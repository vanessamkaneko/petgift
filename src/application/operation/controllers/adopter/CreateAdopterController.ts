import { Body, Controller, Post } from "@nestjs/common";
import { CreateAdopterUseCase } from "src/core/adopter/usecase/create-adopter/CreateAdopter.usecase";
import { CreateUserDTO } from "src/core/user/dtos/CreateUser.dto";

@Controller('adopter')
export class CreateAdopterController {
  constructor(
    private readonly createAdopterUseCase: CreateAdopterUseCase
  ) { }

  @Post()
  async handle(@Body() body: CreateUserDTO) {
    return this.createAdopterUseCase.execute(body);
  }
}