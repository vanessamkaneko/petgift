import { Controller, Delete, Get, Param, UseGuards } from "@nestjs/common";
import { DeletePetUseCase } from "src/core/pet/usecase/delete-pet/DeletePet.usecase";
import { ProtectorGuard } from "src/core/protector/guards/Protector.guard";

@Controller('pet')
@UseGuards(ProtectorGuard)
export class DeletePetController {
  constructor(
    private readonly deletePetUseCase: DeletePetUseCase
  ) { }

  @Delete('/delete/:id')
  async handle(@Param('id') id: string) {
    return this.deletePetUseCase.execute(id);
  }
}