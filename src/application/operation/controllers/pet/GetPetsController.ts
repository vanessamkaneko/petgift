import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { GetPetsUseCase } from "src/core/pet/usecase/get-pets/GetPets.usecase";

@Controller("pets")
export class GetPetsController {
  constructor(private readonly getPetsUseCase: GetPetsUseCase) { }

  @Get()
  async handle(@Req() req: Request) {
    const userRole = req.session?.user?.type;
    return this.getPetsUseCase.execute(userRole);
  }
}