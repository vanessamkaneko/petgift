import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { GetPetUseCase } from "src/core/pet/usecase/get-pet/GetPet.usecase";
import { ProtectorGuard } from "src/core/protector/guards/Protector.guard";

@Controller('pet')
@UseGuards(ProtectorGuard)
export class GetPetController {
  constructor(
    private readonly getPetUseCase: GetPetUseCase
  ) { }

  @Get(':id')
  async handle(@Param('id') id: string) {
    return this.getPetUseCase.execute(id);
  }
}