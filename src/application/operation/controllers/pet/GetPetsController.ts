import { Controller, Get } from "@nestjs/common";
import { GetPetsUseCase } from "src/core/pet/usecase/get-pets/GetPets.usecase";

@Controller("pets")
export class GetPetsController {
  constructor(private readonly getPetsUseCase: GetPetsUseCase) { }

  @Get()
  async handle() {
    return this.getPetsUseCase.execute();
  }
}