import { Body, Controller, Post } from "@nestjs/common";
import { CreatePetDTO } from "src/core/pet/dtos/CreatePet.dto";
import { CreatePetUseCase } from "src/core/pet/usecase/create-pet/CreatePet.usecase";

@Controller('pet')
export class CreatePetController {
  constructor(
    private readonly createPetUseCase: CreatePetUseCase
  ) { }

  @Post()
  async handle(@Body() body: CreatePetDTO) {
    return this.createPetUseCase.execute(body);
  }
}