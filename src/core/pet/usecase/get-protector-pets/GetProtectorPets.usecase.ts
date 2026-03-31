import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { Pet } from "../../entity/Pet.entity";

@Injectable()
export class GetProtectorPetsUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(protectorId: string): Promise<Pet[]> {
    // Retorna todos os pets associados ao protetor
    return this.petRepository.find({ protectorId });
  }
}
