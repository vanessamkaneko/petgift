import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Adopter } from "../../entity/Adopter.entity";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";

@Injectable()
export class DeleteAdopterUseCase {
  constructor(
    @Inject(IAdopterRepository)
    private readonly adopterRepository: IAdopterRepository
  ) { }

  async execute(id: string): Promise<void> {
    const adopter = await this.adopterRepository.findById(id);

    if (!adopter) {
      throw new BadRequestException('Adopter not found!');
    }

    await this.adopterRepository.delete(id);
  }
}