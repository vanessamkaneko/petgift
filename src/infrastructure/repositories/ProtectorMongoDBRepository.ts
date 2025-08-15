import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { ProtectorDocument } from "../db/mongodb/schemas/protector.schema";
import { IProtectorRepository } from "./interfaces/IProtectorRepository";
import { Protector } from "src/core/protector/entity/Protector.entity";

@Injectable()
export class ProtectorMongoDBRepository implements IProtectorRepository {
  private readonly protectorModel: Model<ProtectorDocument>;

  constructor(
    @InjectModel(ProtectorDocument.name) private readonly model: Model<ProtectorDocument>) {
    this.protectorModel = model;
  }

  /**
   * Cria um novo protetor no banco de dados.
   * @param protector - O protetor a ser criado.
   * @returns O protetor criado.
   */

  async create(protector: Protector): Promise<Protector> {
    const protectorDocument = new this.protectorModel(protector); // transformando User do mongo p/ User da aplicação
    const createdProtector = await protectorDocument.save();
    return this.toEntity(createdProtector);
  }

  /**
   * Busca um protetor pelo ID.
   * @param id - O ID do protetor a ser buscado.
   * @returns O protetor encontrado ou null se não encontrado.
   */
  async findById(id: string): Promise<Protector | null> {
    const protector = await this.protectorModel.findById(id).exec();

    if (!protector) {
      return null;
    }

    return this.toEntity(protector);
  }

  /**
   * Atualiza um protetor pelo ID.
   * @param id - O ID do protetor a ser atualizado.
   * @param payload - Os dados a serem atualizados.
   * @returns O protetor atualizado.
   */
  async update(id: string, payload: UpdateUserDTO): Promise<Protector> {
    const updatedProtector = await this.protectorModel.findByIdAndUpdate(
      id,
      {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        document: payload.document,
        password: payload.password,
        photo: payload.photo
      },
      { new: true },
    );

    return this.toEntity(updatedProtector);
  }

  /**
   * Deleta um protetor pelo ID.
   * @param id - O ID do protetor a ser deletado.
   * @returns Uma Promise resolvida quando a operação for concluída.
   */
  /** */
  async delete(id: string): Promise<void> {
    const protector = await this.protectorModel.findByIdAndDelete(id);

    if (!protector) {
      throw new Error(`Protector not found`);
    }
  }

  private toEntity(doc: ProtectorDocument): Protector {
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
}