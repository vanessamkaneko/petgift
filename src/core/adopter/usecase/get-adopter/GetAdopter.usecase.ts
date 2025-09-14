import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Adopter } from "../../entity/Adopter.entity";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";

@Injectable()
export class GetAdopterUseCase {
  constructor(
    @Inject(IAdopterRepository)
    private readonly adopterRepository: IAdopterRepository
  ) { }

  async execute(id: string): Promise<Adopter> {
    const adopter = await this.adopterRepository.findById(id);

    if (!adopter) {
      throw new BadRequestException('Adopter not found!');
    }

    return adopter;
  }
}