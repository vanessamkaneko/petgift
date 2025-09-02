import { Inject, Injectable } from "@nestjs/common";
import { IPetRepository } from "src/infrastructure/repositories/interfaces/IPetRepository";
import { FilterPetsDTO } from "../../dtos/FilterPets.dto";
import { Pet } from "../../entity/Pet.entity";
import { PetStatus } from "../../dtos/CreatePet.dto";

@Injectable()
export class FilterPetsUseCase {
  constructor(
    @Inject(IPetRepository)
    private readonly petRepository: IPetRepository,
  ) { }

  async execute(filters: FilterPetsDTO, userRole: "adopter" | "protector"): Promise<Pet[]> {
    // Se for adopter, força a busca só em pets disponíveis
    if (userRole === "adopter") {
      filters.status = PetStatus.AVAILABLE;
    }

    // Se for protector, ele pode ver todos (não força nada)
    return this.petRepository.filter(filters);
  }
}
