import { Injectable } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IPetRepository } from "./interfaces/IPetRepository";
import { PetDocument } from "../db/mongodb/schemas/pet.schema";
import { Pet } from "src/core/pet/entity/Pet.entity";
import { UpdatePetDTO } from "src/core/pet/dtos/UpdatePet.dto";
import { PetStatus } from "src/core/pet/dtos/CreatePet.dto";

@Injectable()
export class PetMongoDBRepository implements IPetRepository {
  private readonly petModel: Model<PetDocument>;

  constructor(
    @InjectModel(PetDocument.name) private readonly model: Model<PetDocument>) {
    this.petModel = model;
  }

  /**
   * Cria um novo pet no banco de dados.
   * @param pet - O pet a ser criado.
   * @returns O pet criado.
   */
  async create(pet: Pet): Promise<Pet> {
    const petDocument = new this.petModel({
      ...pet,
      protector: new Types.ObjectId(pet.protectorId), // 👈 converte a string para ObjectId
    });
    const createdPet = await petDocument.save();
    return this.toEntity(createdPet);
  }

  /**
   * Busca um pet pelo ID.
   * @param id - O ID do pet a ser buscado.
   * @returns O pet encontrado ou null se não encontrado.
   */
  async findById(id: string): Promise<Pet | null> {
    const pet = await this.petModel.findById(id).exec();

    if (!pet) {
      return null;
    }

    return this.toEntity(pet);
  }

  /**
   * Busca todos os pets disponíveis.
   * @returns Uma lista de pets ou null se nenhum for encontrado.
   */

  async find(): Promise<Pet[] | null> {
    const pets = this.petModel.find({ status: PetStatus.AVAILABLE }).exec();
    return (await pets).map((pet) => this.toEntity(pet));
  }

  /**
   * Atualiza um pet pelo ID.
   * @param id - O ID do pet a ser atualizado.
   * @param payload - Os dados a serem atualizados.
   * @returns O pet atualizado.
   */
  async update(id: string, payload: UpdatePetDTO): Promise<Pet> {
    const updatedPet = await this.petModel.findByIdAndUpdate(
      id,
      {
        name: payload.name,
        sex: payload.sex,
        age: payload.age,
        species: payload.species,
        description: payload.description,
        photo: payload.photo,
        status: payload.status,
        adopterId: payload.adopterId,
      },
      { new: true },
    );

    return this.toEntity(updatedPet);
  }

  /**
 * Remove um pet pelo ID.
 * @param id - O ID do pet a ser removido.
 * @returns Uma Promise resolvida quando a operação for concluída.
 */
  async delete(id: string): Promise<void> {
    const pet = await this.petModel.findByIdAndDelete(id);

    if (!pet) {
      throw new Error(`Pet not found`);
    }
  }

  private toEntity(doc: PetDocument): Pet {
    return new Pet(
      {
        id: doc._id.toString(),
        name: doc.name,
        sex: doc.sex,
        age: doc.age,
        species: doc.species,
        description: doc.description,
        photo: doc.photo,
        status: doc.status,
        protectorId: doc.protector.toString(),
        adopterId: doc.adopter ? doc.adopter.toString() : undefined
      }
    )
  }
}