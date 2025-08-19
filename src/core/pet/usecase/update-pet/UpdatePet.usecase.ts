import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { UpdatePetDTO } from "../../dtos/UpdatePet.dto";
import { Pet } from "../../entity/Pet.entity";

@Injectable()
export class UpdatePetUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(id: string, payload: UpdatePetDTO): Promise<Pet> {
    const pet = await this.petRepository.findById(id);

    if (!pet) {
      throw new BadRequestException('Pet not found!');
    }

    return this.petRepository.update(id, payload);
  }
}