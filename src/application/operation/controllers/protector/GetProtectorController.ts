import { Controller, Get, Param } from "@nestjs/common";
import { GetAdopterUseCase } from "src/core/adopter/usecase/get-adopter/GetAdopter.usecase";
import { GetProtectorUseCase } from "src/core/protector/usecase/get-protector/GetProtector.usecase";

@Controller('protector')
export class GetProtectorController {
  constructor(
    private readonly getProtectorUseCase: GetProtectorUseCase
  ) { }

  @Get(':id')
  async handle(@Param('id') id: string) {
    return this.getProtectorUseCase.execute(id);
  }
}