import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IProtectorRepository } from "src/infrastructure/repositories/interfaces/IProtectorRepository";

@Injectable()
export class DeleteProtectorUseCase {
  constructor(
    @Inject(IProtectorRepository)
    private readonly protectorRepository: IProtectorRepository
  ) { }

  async execute(id: string): Promise<void> {
    const protector = await this.protectorRepository.findById(id);

    if (!protector) {
      throw new BadRequestException('Protector not found!');
    }

    await this.protectorRepository.delete(id);
  }
}