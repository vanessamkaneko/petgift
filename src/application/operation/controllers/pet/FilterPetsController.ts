import { Controller, Get, Query } from "@nestjs/common";
import { FilterPetsDTO } from "src/core/pet/dtos/FilterPets.dto";
import { FilterPetsUseCase } from "src/core/pet/usecase/filter-pets/FilterPets.usecase";
import { GetPetsUseCase } from "src/core/pet/usecase/get-pets/GetPets.usecase";

@Controller("pets")
export class FilterPetsController {
  constructor(private readonly filterPetsUseCase: FilterPetsUseCase) { }

  @Get("filter")
  async handle(@Query() query: FilterPetsDTO) {
    // simulação: por enquanto fixo como adopter
    const userRole = "adopter";

    return this.filterPetsUseCase.execute(query, userRole);
  }
}