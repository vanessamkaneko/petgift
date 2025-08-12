import { User } from "src/core/user/entity/User.entity";

export interface IUserRepository<T extends User> {
  create(user: T): Promise<T>;
  findById(id: string): Promise<T | null>;
}

export const IUserRepository = Symbol('IUserRepository');