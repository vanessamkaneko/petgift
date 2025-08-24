import { Protector } from "src/core/protector/entity/Protector.entity";
import { IUserRepository } from "./IUserRepository";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";

export interface IProtectorRepository extends IUserRepository<Protector> {
  create(protector: Protector): Promise<Protector>;
  findById(id: string): Promise<Protector | null>;
  update(id: string, payload: UpdateUserDTO): Promise<Protector>;
  delete(id: string): Promise<void>;
}

export const IProtectorRepository = Symbol('IProtectorRepository');