import { BadRequestException, ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { Pet } from "../../entity/Pet.entity";
import { PetStatus } from "../../dtos/CreatePet.dto";
import { NotFoundError } from "rxjs";

@Injectable()
export class AdoptPetUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository,
  ) { }

  async execute(id: string, adopterId: string): Promise<Pet> {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new NotFoundException("Pet not found!");
    }

    if (pet.status !== PetStatus.AVAILABLE) {
      throw new ConflictException("Pet is not available for adoption!");
    }

    return this.petRepository.updateById(id, {
      status: PetStatus.ADOPTED,
      adopterId: adopterId,
    });
  }
}
