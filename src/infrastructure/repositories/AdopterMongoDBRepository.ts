import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { IAdopterRepository } from "./interfaces/IAdopterRepository";
import { AdopterDocument } from "../db/mongodb/schemas/adopter.schema";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";

@Injectable()
export class AdopterMongoDBRepository implements IAdopterRepository {
  private readonly adopterModel: Model<AdopterDocument>;

  constructor(
    @InjectModel(AdopterDocument.name) private readonly model: Model<AdopterDocument>) {
    this.adopterModel = model;
  }

  findOne(fields: any): Promise<Adopter> {
    throw new Error("Method not implemented.");
  }

  /**
   * Cria um novo adotante no banco de dados.
   * @param adopter - O adotante a ser criado.
   * @returns O adotante criado.
   */
  async create(adopter: Adopter): Promise<Adopter> {
    const adopterDocument = new this.adopterModel(adopter);
    const createdAdopter = await adopterDocument.save();
    return this.toEntity(createdAdopter); // transformando User do mongo p/ User da aplicação
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

  /**
   * Atualiza um adotante pelo ID.
   * @param id - O ID do adotante a ser atualizado.
   * @param payload - Os dados a serem atualizados.
   * @returns O adotante atualizado.
   */
  async updateById(id: string, payload: UpdateUserDTO): Promise<Adopter> {
    const updatedAdopter = await this.adopterModel.findByIdAndUpdate(
      id,
      payload,
      { new: true },
    );

    return this.toEntity(updatedAdopter);
  }

  /**
 * Remove um adotante pelo ID.
 * @param id - O ID do adotante a ser removido.
 * @returns Uma Promise resolvida quando a operação for concluída.
 */
  async delete(id: string): Promise<void> {
    const adopter = await this.adopterModel.findByIdAndDelete(id);

    if (!adopter) {
      throw new Error(`Adopter not found`);
    }
  }

  private toEntity(doc: AdopterDocument): Adopter {
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