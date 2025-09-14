import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Pet } from "../../entity/Pet.entity";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";

@Injectable()
export class GetPetUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(id: string): Promise<Pet> {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new BadRequestException('Pet not found!');
    }

    return pet;
  }
}