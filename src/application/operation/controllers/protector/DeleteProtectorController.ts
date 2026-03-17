import { Controller, Delete, Get, Param, UseGuards } from "@nestjs/common";
import { DeleteProtectorUseCase } from "src/core/protector/usecase/delete-protector/DeleteProtector.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";

@Controller('protector')
@UseGuards(AuthGuard)
export class DeleteProtectorController {
  constructor(
    private readonly deleteProtectorUseCase: DeleteProtectorUseCase
  ) { }

  @Delete('/delete/:id')
  async handle(@Param('id') id: string) {
    return this.deleteProtectorUseCase.execute(id);
  }
}