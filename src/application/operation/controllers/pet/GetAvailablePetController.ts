import { Controller, Get } from "@nestjs/common";
import { GetAvailablePetsUseCase } from "src/core/pet/usecase/get-available-pets/GetAvailablePets.usecase";

@Controller("pets")
export class GetAvailablePetsController {
  constructor(private readonly getAvailablePetsUseCase: GetAvailablePetsUseCase) { }

  @Get("available")
  async handle() {
    return this.getAvailablePetsUseCase.execute();
  }
}