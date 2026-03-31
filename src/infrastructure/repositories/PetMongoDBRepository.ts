import { Injectable } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IPetRepository } from "./interfaces/IPetRepository";
import { PetDocument } from "../db/mongodb/schemas/pet.schema";
import { Pet } from "src/core/pet/entity/Pet.entity";
import { UpdatePetDTO } from "src/core/pet/dtos/UpdatePet.dto";
import { PetStatus } from "src/core/pet/dtos/CreatePet.dto";
import { FilterPetsDTO } from "src/core/pet/dtos/FilterPets.dto";

export type PetFields = {
  status?: PetStatus;
  adopter?: string;
  protectorId?: string;
};

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

  async find(payload: PetFields): Promise<Pet[] | null> {
    const query: any = { ...payload };
    if (query.adopter) {
      query.adopter = new Types.ObjectId(query.adopter);
    }
    if (query.protectorId) {
      query.protector = new Types.ObjectId(query.protectorId);
      delete query.protectorId;
    }
    const pets = await this.petModel.find(query).exec();
    return pets.map((pet) => this.toEntity(pet));
  }

  /** * Filtra os pets com base nos critérios fornecidos.
   * @param filters - Os filtros a serem aplicados.
   * @returns Uma lista de pets que correspondem aos filtros.
   */
  async filter(filters: FilterPetsDTO): Promise<Pet[]> {
    console.log("Recebido no filtro:", filters);
    const query: any = {};

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.species) {
      query.species = filters.species;
    }

    if (filters.sex) {
      query.sex = filters.sex;
    }

    if (filters.minAge !== undefined || filters.maxAge !== undefined) {
      query.age = {};
      if (filters.minAge !== undefined) {
        query.age.$gte = filters.minAge;
      }
      if (filters.maxAge !== undefined) {
        query.age.$lte = filters.maxAge;
      }
    }

    const pets = this.petModel.find(query).exec();
    return (await pets).map((pet) => this.toEntity(pet));
  }


  /**
   * Atualiza um pet pelo ID.
   * @param id - O ID do pet a ser atualizado.
   * @param payload - Os dados a serem atualizados.
   * @returns O pet atualizado.
   */
  async updateById(id: string, payload: UpdatePetDTO): Promise<Pet> {
    const mappedPayload: any = { ...payload };
    if (mappedPayload.adopterId !== undefined) {
      mappedPayload.adopter = new Types.ObjectId(mappedPayload.adopterId);
      delete mappedPayload.adopterId;
    }

    const updatedPet = await this.petModel.findByIdAndUpdate(
      id,
      mappedPayload,
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