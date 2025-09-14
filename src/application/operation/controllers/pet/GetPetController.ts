import { Controller, Get, Param } from "@nestjs/common";
import { GetPetUseCase } from "src/core/pet/usecase/get-pet/GetPet.usecase";

@Controller('pet')
export class GetPetController {
  constructor(
    private readonly getPetUseCase: GetPetUseCase
  ) { }

  @Get(':id')
  async handle(@Param('id') id: string) {
    return this.getPetUseCase.execute(id);
  }
}