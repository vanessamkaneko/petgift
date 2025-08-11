import { Controller, Get, Param } from "@nestjs/common";
import { GetUserUseCase } from "src/core/user/usecase/get-user/GetUser.usecase";

@Controller('user')
export class GetUserController {
  constructor(
    private readonly getUserUseCase: GetUserUseCase
  ) {}

  @Get(':id')
  async handle(@Param('id') id: string) {
    return this.getUserUseCase.execute(id);
  }
}