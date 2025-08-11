import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { UserDocument } from "../db/mongodb/schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { IUserRepository } from "./interfaces/IUserRepository";
import { User } from "src/core/user/entity/User.entity";

@Injectable()
export class UserMongoDBRepository implements IUserRepository {
  private readonly userModel: Model<UserDocument>;

  constructor(
    @InjectModel(UserDocument.name) private readonly model: Model<UserDocument>) {
    this.userModel = model;
  }

  async create(user: User): Promise<User> {
    const userDocument = new this.userModel(user); // transformando User do mongo p/ User da aplicação
    const createdUser = await userDocument.save();
    return this.toEntity(createdUser);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      return null;
    }
  
    return this.toEntity(user);
  }

  private toEntity(doc: UserDocument): User {
    return new User({
      id: doc._id.toString(),
      name: doc.name,
      email: doc.email,
      phone: doc.phone,
      document: doc.document,
      photo: doc.photo,
      type: doc.type,
      password: doc.password
    })
  }
}