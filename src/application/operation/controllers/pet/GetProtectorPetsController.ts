import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { GetProtectorPetsUseCase } from "src/core/pet/usecase/get-protector-pets/GetProtectorPets.usecase";
import { ProtectorGuard } from "src/core/protector/guards/Protector.guard";

@Controller("pet")
@UseGuards(ProtectorGuard)
export class GetProtectorPetsController {
  constructor(
    private readonly getProtectorPetsUseCase: GetProtectorPetsUseCase,
  ) { }

  @Get("/my-registrations")
  async handle(@Req() req: Request) {
    const protectorId = req.session.user!.id;
    return await this.getProtectorPetsUseCase.execute(protectorId);
  }
}
