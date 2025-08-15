import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";
import { Protector } from "../../entity/Protector.entity";

@Injectable()
export class UpdateProtectorUseCase {
  constructor(
    @Inject(IProtectorRepository)
    private readonly protectorRepository: IProtectorRepository
  ) { }

  async execute(id: string, payload: UpdateUserDTO): Promise<Protector> {
    const protector = await this.protectorRepository.findById(id);

    if (!protector) {
      throw new BadRequestException('Protector not found!');
    }

    return this.protectorRepository.update(id, payload);
  }
}