import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { Pet } from "../../entity/Pet.entity";

@Injectable()
export class GetAdopterPetsUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(adopterId: string): Promise<Pet[]> {
    // Busca todos pets que tem este adopter com status ADOPTED
    return this.petRepository.find({ adopter: adopterId });
  }
}
