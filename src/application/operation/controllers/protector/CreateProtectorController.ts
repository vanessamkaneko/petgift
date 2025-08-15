import { Body, Controller, Post } from "@nestjs/common";
import { CreateProtectorUseCase } from "src/core/protector/usecase/create-protector/CreateProtector.usecase";
import { CreateUserDTO } from "src/core/user/dtos/CreateUser.dto";

@Controller('protector')
export class CreateProtectorController {
  constructor(
    private readonly createProtectorUseCase: CreateProtectorUseCase
  ) { }

  @Post()
  async handle(@Body() body: CreateUserDTO) {
    return this.createProtectorUseCase.execute(body);
  }
}