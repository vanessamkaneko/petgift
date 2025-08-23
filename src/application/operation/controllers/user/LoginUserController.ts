import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDTO } from 'src/core/user/dtos/LoginUser.dto';
import { LoginUserUseCase } from 'src/core/user/usecase/login-user/LoginUser.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUserUseCase
  ) { }

  @Post('login')
  async handle(@Body() body: LoginUserDTO) {
    return await this.loginUseCase.execute(body);
  }
}