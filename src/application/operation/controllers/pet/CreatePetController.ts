import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
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
  async handle(@Req() req: Request, @Body() body: CreatePetDTO) {
    if (req.session?.user?.id) {
      body.protectorId = req.session.user.id;
    }
    return this.createPetUseCase.execute(body);
  }
}