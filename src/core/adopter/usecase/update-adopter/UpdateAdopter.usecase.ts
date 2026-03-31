import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "src/infrastructure/repositories/interfaces/IUserRepository";
import { Adopter } from "../../entity/Adopter.entity";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { AuthService } from "src/infrastructure/security/AuthService";

@Injectable()
export class UpdateAdopterUseCase {
  constructor(
    @Inject(IAdopterRepository)
    private readonly adopterRepository: IAdopterRepository,
    private readonly authService: AuthService
  ) { }

  async execute(id: string, payload: UpdateUserDTO): Promise<Adopter> {
    const adopter = await this.adopterRepository.findById(id);

    if (!adopter) {
      throw new BadRequestException('Adopter not found!');
    }

    if (payload.password) {
       payload.password = await this.authService.hashPassword(payload.password);
    }

    return this.adopterRepository.updateById(id, payload);
  }
}