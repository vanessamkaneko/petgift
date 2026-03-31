import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { GetAdopterPetsUseCase } from "src/core/pet/usecase/get-adopter-pets/GetAdopterPets.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";

@Controller("pet")
@UseGuards(AuthGuard)
export class GetAdopterPetsController {
  constructor(
    private readonly getAdopterPetsUseCase: GetAdopterPetsUseCase,
  ) { }

  @Get("/my-adoptions")
  async handle(@Req() req: Request) {
    const adopterId = req.session.user!.id;
    return await this.getAdopterPetsUseCase.execute(adopterId);
  }
}
