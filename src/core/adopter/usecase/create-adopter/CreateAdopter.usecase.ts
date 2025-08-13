import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../../../user/dtos/CreateUser.dto";
import { Adopter } from "../../entity/Adopter.entity";
import { IAdopterRepository } from "src/infrastructure/repositories/interfaces/IAdopterRepository";

@Injectable()
export class CreateAdopterUseCase {
  constructor(
    @Inject(IAdopterRepository)
    private readonly adopterRepository: IAdopterRepository,
  ) { }

  async execute(payload: CreateUserDTO): Promise<Adopter> {
    const newAdopter = new Adopter(payload);
    return this.adopterRepository.create(newAdopter);
  }
}