import { Controller, Delete, Get, Param, UseGuards } from "@nestjs/common";
import { DeleteAdopterUseCase } from "src/core/adopter/usecase/delete-adopter/DeleteAdopter.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";

@Controller('adopter')
@UseGuards(AuthGuard)
export class DeleteAdopterController {
  constructor(
    private readonly deleteAdopterUseCase: DeleteAdopterUseCase
  ) { }

  @Delete('/delete/:id')
  async handle(@Param('id') id: string) {
    return this.deleteAdopterUseCase.execute(id);
  }
}