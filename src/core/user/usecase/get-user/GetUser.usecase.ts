import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "src/infrastructure/repositories/interfaces/IUserRepository";
import { User } from "../../entity/User.entity";

@Injectable()
export class GetUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new BadRequestException('User not found!');
    }

    return user;
  }
}