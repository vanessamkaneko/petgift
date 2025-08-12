import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { IAdopterRepository } from "./interfaces/IAdopterRepository";
import { AdopterDocument } from "../db/mongodb/schemas/adopter.schema";

@Injectable()
export class AdopterMongoDBRepository implements IAdopterRepository {
  private readonly adopterModel: Model<AdopterDocument>;

  constructor(
    @InjectModel(AdopterDocument.name) private readonly model: Model<AdopterDocument>) {
    this.adopterModel = model;
  }

  /**
   * Cria um novo adotante no banco de dados.
   * @param adopter - O adotante a ser criado.
   * @returns O adotante criado.
   */
  async create(adopter: Adopter): Promise<Adopter> {
    const adopterDocument = new this.adopterModel(adopter); // transformando User do mongo p/ User da aplicação
    const createdAdopter = await adopterDocument.save();
    return this.toEntity(createdAdopter);
  }

  /**
   * Busca um adotante pelo ID.
   * @param id - O ID do adotante a ser buscado.
   * @returns O adotante encontrado ou null se não encontrado.
   */
  async findById(id: string): Promise<Adopter | null> {
    const adopter = await this.adopterModel.findById(id).exec();

    if (!adopter) {
      return null;
    }

    return this.toEntity(adopter);
  }

  private toEntity(doc: AdopterDocument): Adopter {
    return new Adopter(
      doc.name,
      doc.email,
      doc.phone,
      doc.document,
      doc.photo,
      doc.password,
    )
  }
}