import { UpdatePetDTO } from "src/core/pet/dtos/UpdatePet.dto";
import { Pet } from "src/core/pet/entity/Pet.entity";
import { PetFields } from "../PetMongoDBRepository";

export interface IPetRepository {
  create(pet: Pet): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  find(payload: PetFields): Promise<Pet[] | null>;
  updateById(id: string, payload: UpdatePetDTO): Promise<Pet>;
  delete(id: string): Promise<void>;
}

export const IPetRepository = Symbol('IPetRepository');