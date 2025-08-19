import { Inject, Injectable } from "@nestjs/common";
import { Pet } from "../../entity/Pet.entity";
import { CreatePetDTO } from "../../dtos/CreatePet.dto";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";

@Injectable()
export class CreatePetUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository,
  ) { }

  async execute(payload: CreatePetDTO): Promise<Pet> {
    const newPet = new Pet(payload);
    return this.petRepository.create(newPet);
  }
}