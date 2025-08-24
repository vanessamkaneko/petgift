import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../../../user/dtos/CreateUser.dto";
import { Adopter } from "../../entity/Adopter.entity";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";
import { AuthService } from "src/infrastructure/security/AuthService";

@Injectable()
export class CreateAdopterUseCase {
  constructor(
    @Inject(IAdopterRepository)
    private readonly adopterRepository: IAdopterRepository,

    private readonly authService: AuthService
  ) { }

  async execute(payload: CreateUserDTO): Promise<Adopter> {
    const hashedPassword = await this.authService.hashPassword(payload.password);

    payload.password = hashedPassword;

    const newAdopter = new Adopter(payload);
    return this.adopterRepository.create(newAdopter);
  }
}