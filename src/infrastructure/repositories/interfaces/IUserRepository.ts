import { User } from "src/core/user/entity/User.entity";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
}

export const IUserRepository = Symbol('IUserRepository');