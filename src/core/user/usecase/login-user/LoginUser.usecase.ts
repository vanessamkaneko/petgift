import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginUserDTO } from "../../dtos/LoginUser.dto";
import { IUserRepository } from "src/infrastructure/repositories/interfaces/IUserRepository";
import { User } from "../../entity/User.entity";
import { AuthService } from "src/infrastructure/security/AuthService";

@Injectable()
export class LoginUserUseCase {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository<User>,

    @Inject(AuthService)
    private readonly authService: AuthService,
  ) { }

  async execute(payload: LoginUserDTO): Promise<string> {
    const user = await this.userRepository.findByEmail(payload.email);

    if (!user || !(await this.authService.comparePasswords(payload.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Gera o JWT
    const token = await this.authService.generateToken(user);
    return token;
  }
}