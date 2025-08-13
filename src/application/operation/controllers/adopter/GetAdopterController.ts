import { Controller, Get, Param } from "@nestjs/common";
import { GetAdopterUseCase } from "src/core/adopter/usecase/get-adopter/GetAdopter.usecase";

@Controller('adopter')
export class GetAdopterController {
  constructor(
    private readonly getAdopterUseCase: GetAdopterUseCase
  ) { }

  @Get(':id')
  async handle(@Param('id') id: string) {
    return this.getAdopterUseCase.execute(id);
  }
}