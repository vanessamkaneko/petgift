import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/core/user/dtos/CreateUser.dto";
import { CreateUserUseCase } from "src/core/user/usecase/create-user/CreateUser.usecase";

@Controller('user')
export class CreateUserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  @Post()
  async handle(@Body() body: CreateUserDTO) {
    return this.createUserUseCase.execute(body);
  }
}