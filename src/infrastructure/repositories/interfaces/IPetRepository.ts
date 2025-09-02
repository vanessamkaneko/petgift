import { UpdatePetDTO } from "src/core/pet/dtos/UpdatePet.dto";
import { Pet } from "src/core/pet/entity/Pet.entity";
import { PetFields } from "../PetMongoDBRepository";
import { FilterPetsDTO } from "src/core/pet/dtos/FilterPets.dto";

export interface IPetRepository {
  create(pet: Pet): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  find(payload: PetFields): Promise<Pet[] | null>;
  filter(filters: FilterPetsDTO): Promise<Pet[]>;
  updateById(id: string, payload: UpdatePetDTO): Promise<Pet>;
  delete(id: string): Promise<void>;
}

export const IPetRepository = Symbol('IPetRepository');