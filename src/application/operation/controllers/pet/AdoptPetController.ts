import { Controller, Param, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AdoptPetUseCase } from "src/core/pet/usecase/adopt-pet/AdoptPet.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";

@Controller("pet")
@UseGuards(AuthGuard)
export class AdoptPetController {
  constructor(
    private readonly adoptPetUseCase: AdoptPetUseCase,
  ) { }

  @Post("/adopt/:id")
  async handle(
    @Param("id") id: string, 
    @Req() req: Request,
  ) {
    const adopterId = req.session.user!.id;
    return await this.adoptPetUseCase.execute(id, adopterId);
  }
}
