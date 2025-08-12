import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { IUserRepository } from "./IUserRepository";

export interface IAdopterRepository extends IUserRepository<Adopter> {
  create(adopter: Adopter): Promise<Adopter>;
  findById(id: string): Promise<Adopter | null>;
}

export const IAdopterRepository = Symbol('IAdopterRepository');