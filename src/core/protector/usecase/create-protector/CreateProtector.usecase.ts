import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../../../user/dtos/CreateUser.dto";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";
import { Protector } from "../../entity/Protector.entity";
import { AuthService } from "src/infrastructure/security/AuthService";

@Injectable()
export class CreateProtectorUseCase {
  constructor(
    @Inject(IProtectorRepository)
    private readonly ProtectorRepository: IProtectorRepository,

    private readonly authService: AuthService
  ) { }

  async execute(payload: CreateUserDTO): Promise<Protector> {
    const hashedPassword = await this.authService.hashPassword(payload.password);
    payload.password = hashedPassword;

    const newProtector = new Protector(payload);

    return this.ProtectorRepository.create(newProtector);
  }
}