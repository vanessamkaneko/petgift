import { Controller, Get, Query, Req } from "@nestjs/common";
import { Request } from "express";
import { FilterPetsDTO } from "src/core/pet/dtos/FilterPets.dto";
import { FilterPetsUseCase } from "src/core/pet/usecase/filter-pets/FilterPets.usecase";
import { GetPetsUseCase } from "src/core/pet/usecase/get-pets/GetPets.usecase";

@Controller("pets")
export class FilterPetsController {
  constructor(private readonly filterPetsUseCase: FilterPetsUseCase) { }

  @Get("filter")
  async handle(@Query() query: FilterPetsDTO, @Req() req: Request) {
    const userRole = req.session?.user?.type || "adopter";

    return this.filterPetsUseCase.execute(query, userRole);
  }
}