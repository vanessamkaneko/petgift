import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";
import { Protector } from "../../entity/Protector.entity";
import { AuthService } from "src/infrastructure/security/AuthService";

@Injectable()
export class UpdateProtectorUseCase {
  constructor(
    @Inject(IProtectorRepository)
    private readonly protectorRepository: IProtectorRepository,
    private readonly authService: AuthService
  ) { }

  async execute(id: string, payload: UpdateUserDTO): Promise<Protector> {
    const protector = await this.protectorRepository.findById(id);

    if (!protector) {
      throw new NotFoundException('Protector not found!');
    }

    if (payload.password) {
       payload.password = await this.authService.hashPassword(payload.password);
    }

    return this.protectorRepository.updateById(id, payload);
  }
}