import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreatePetDTO } from "src/core/pet/dtos/CreatePet.dto";
import { CreatePetUseCase } from "src/core/pet/usecase/create-pet/CreatePet.usecase";
import { ProtectorGuard } from "src/core/protector/guards/Protector.guard";

@Controller('pet')
@UseGuards(ProtectorGuard)
export class CreatePetController {
  constructor(
    private readonly createPetUseCase: CreatePetUseCase
  ) { }

  @Post()
  async handle(@Body() body: CreatePetDTO) {
    return this.createPetUseCase.execute(body);
  }
}