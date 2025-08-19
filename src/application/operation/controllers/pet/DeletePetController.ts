import { Controller, Delete, Get, Param } from "@nestjs/common";
import { DeletePetUseCase } from "src/core/pet/usecase/delete-pet/DeletePet.usecase";

@Controller('pet')
export class DeletePetController {
  constructor(
    private readonly deletePetUseCase: DeletePetUseCase
  ) { }

  @Delete('/delete/:id')
  async handle(@Param('id') id: string) {
    return this.deletePetUseCase.execute(id);
  }
}