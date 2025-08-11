import { User } from "../../entity/User.entity";
import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "src/infrastructure/repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "../../dtos/CreateUser.dto";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(payload: CreateUserDTO): Promise<User> {
    const newUser = new User(payload);
    return this.userRepository.create(newUser);
  }
}