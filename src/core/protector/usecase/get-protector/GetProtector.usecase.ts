import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";
import { Protector } from "../../entity/Protector.entity";

@Injectable()
export class GetProtectorUseCase {
  constructor(
    @Inject(IProtectorRepository)
    private readonly protectorRepository: IProtectorRepository
  ) { }

  async execute(id: string): Promise<Protector> {
    const protector = await this.protectorRepository.findById(id);

    if (!protector) {
      throw new BadRequestException('Protector not found!');
    }

    return protector;
  }
}