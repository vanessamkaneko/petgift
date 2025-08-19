import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";

@Injectable()
export class DeletePetUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(id: string): Promise<void> {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new BadRequestException('Pet not found!');
    }

    await this.petRepository.delete(id);
  }
}