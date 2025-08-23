import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { User } from "src/core/user/entity/User.entity";

export interface IUserRepository<T extends User> {
  create(user: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  findByEmail(email: string): Promise<T | null>;
  update(id: string, payload: UpdateUserDTO): Promise<T>;
  delete(id: string): Promise<void>;
}

export const IUserRepository = Symbol('IUserRepository');