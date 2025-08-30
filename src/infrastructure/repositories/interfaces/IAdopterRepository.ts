import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { IUserRepository } from "./IUserRepository";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";

export interface IAdopterRepository extends IUserRepository<Adopter> {
  create(adopter: Adopter): Promise<Adopter>;
  findById(id: string): Promise<Adopter | null>;
  updateById(id: string, payload: UpdateUserDTO): Promise<Adopter>;
  delete(id: string): Promise<void>;
}

export const IAdopterRepository = Symbol('IAdopterRepository');