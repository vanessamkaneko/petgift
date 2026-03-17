import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { Pet } from "../../entity/Pet.entity";
import { PetFields } from "src/infrastructure/repositories/PetMongoDBRepository";
import { PetStatus } from "../../dtos/CreatePet.dto";

@Injectable()
export class GetPetsUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(userRole?: 'adopter' | 'protector'): Promise<Pet[]> {
    const payload: PetFields = {};

    // Se o user não for um protector (for adopter ou unauthenticated)
    if (userRole !== 'protector') {
      payload.status = PetStatus.AVAILABLE;
    }

    return this.petRepository.find(payload);
  }
}