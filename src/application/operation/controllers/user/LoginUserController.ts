import { Controller, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { LoginUserDTO } from 'src/core/user/dtos/LoginUser.dto';
import { LoginUserUseCase } from 'src/core/user/usecase/login-user/LoginUser.usecase';

@Controller('auth')
export class LoginUserController {
  constructor(
    private readonly loginUseCase: LoginUserUseCase
  ) { }

  @Post('login')
  async handle(@Req() req: Request, @Body() body: LoginUserDTO) {
    const { token, user } = await this.loginUseCase.execute(body);

    // Salva user na sessão
    req.session.user = {
      email: user.email,
      type: user.type
    };

    return {
      token,
      user: req.session.user, // opcional, para frontend já ter os dados
    };
  }
}