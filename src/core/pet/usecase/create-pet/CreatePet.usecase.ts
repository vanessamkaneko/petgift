import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Pet } from "../../entity/Pet.entity";
import { CreatePetDTO } from "../../dtos/CreatePet.dto";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";

@Injectable()
export class CreatePetUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository,

    @Inject(IProtectorRepository)
    private readonly protectorRepository: IProtectorRepository,
  ) { }

  async execute(payload: CreatePetDTO): Promise<Pet> {
    const protectorExists = await this.protectorRepository.findById(payload.protectorId);

    if (!protectorExists) {
      throw new BadRequestException("Protector not found");
    }

    const newPet = new Pet(payload);

    return this.petRepository.create(newPet);
  }
}