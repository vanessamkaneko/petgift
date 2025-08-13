import { Controller, Delete, Get, Param } from "@nestjs/common";
import { DeleteAdopterUseCase } from "src/core/adopter/usecase/delete-adopter/DeleteAdopter.usecase";

@Controller('adopter')
export class DeleteAdopterController {
  constructor(
    private readonly deleteAdopterUseCase: DeleteAdopterUseCase
  ) { }

  @Delete('/delete/:id')
  async handle(@Param('id') id: string) {
    return this.deleteAdopterUseCase.execute(id);
  }
}