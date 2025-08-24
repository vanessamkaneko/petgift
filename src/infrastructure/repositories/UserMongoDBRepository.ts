// infrastructure/repositories/user.repository.ts
import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./interfaces/IUserRepository";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { User } from "src/core/user/entity/User.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AdopterDocument } from "../db/mongodb/schemas/adopter.schema";
import { ProtectorDocument } from "../db/mongodb/schemas/protector.schema";
import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { Protector } from "src/core/protector/entity/Protector.entity";

type UserFieldsType = {
  email?: string;
}

@Injectable()
export class UserMongoDBRepository implements IUserRepository<User> {

  constructor(
    @InjectModel(AdopterDocument.name) private readonly adopterModel: Model<AdopterDocument>,
    @InjectModel(ProtectorDocument.name) private readonly protectorModel: Model<ProtectorDocument>,
  ) { }

  create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: string, payload: UpdateUserDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findOne(email: string): Promise<User | null> {
    // Primeiro tenta achar em Adopters
    let doc = await this.adopterModel.findOne({ email }).lean();
    if (doc) {
      return this.toEntityProtetor(doc);
    }

    // Se não achou, tenta em Protectors
    doc = await this.protectorModel.findOne({ email }).lean();
    if (doc) {
      return this.toEntityAdopter(doc);
    }

    // Se não encontrou em nenhuma
    return null;
  }

  private toEntityProtetor(doc: ProtectorDocument): Protector {
    return new Protector(
      {
        id: doc._id.toString(),
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        document: doc.document,
        password: doc.password,
        photo: doc.photo
      }
    )
  }

  private toEntityAdopter(doc: AdopterDocument): Adopter {
    return new Adopter(
      {
        id: doc._id.toString(),
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        document: doc.document,
        password: doc.password,
        photo: doc.photo
      }
    )
  }
}
