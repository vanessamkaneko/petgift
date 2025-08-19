import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { Pet } from "src/core/pet/entity/Pet.entity";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";

export interface IPetRepository {
  create(pet: Pet): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  update(id: string, payload: UpdateUserDTO): Promise<Pet>;
  delete(id: string): Promise<void>;
}

export const IPetRepository = Symbol('IPetRepository');