import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { Pet } from "../../entity/Pet.entity";
import { PetFields } from "src/infrastructure/repositories/PetMongoDBRepository";

@Injectable()
export class GetPetsUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async execute(): Promise<Pet[]> {
    const payload: PetFields = {};

    // Verificar se o usuario é adopter ou protector...
    // Se for adopter, retornar apenas os pets disponíveis para adoção
    // if (isAdopter) {
    //   payload.status = PetStatus.AVAILABLE; // só disponíveis
    // }

    // Se for protector, retornar todos os pets
    return this.petRepository.find(payload);
  }
}