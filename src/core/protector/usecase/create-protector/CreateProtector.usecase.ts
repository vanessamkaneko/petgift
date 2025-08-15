import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../../../user/dtos/CreateUser.dto";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";
import { Protector } from "../../entity/Protector.entity";

@Injectable()
export class CreateProtectorUseCase {
  constructor(
    @Inject(IProtectorRepository)
    private readonly ProtectorRepository: IProtectorRepository,
  ) { }

  async execute(payload: CreateUserDTO): Promise<Protector> {
    const newProtector = new Protector(payload);
    return this.ProtectorRepository.create(newProtector);
  }
}