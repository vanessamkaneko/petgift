import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "src/infrastructure/repositories/interfaces/IUserRepository";
import { Adopter } from "../../entity/Adopter.entity";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";

@Injectable()
export class UpdateAdopterUseCase {
  constructor(
    @Inject(IAdopterRepository)
    private readonly adopterRepository: IAdopterRepository
  ) { }

  async execute(id: string, payload: UpdateUserDTO): Promise<Adopter> {
    const adopter = await this.adopterRepository.findById(id);

    if (!adopter) {
      throw new BadRequestException('Adopter not found!');
    }

    return this.adopterRepository.updateById(id, payload);
  }
}