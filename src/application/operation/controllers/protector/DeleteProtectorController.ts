import { Controller, Delete, Get, Param } from "@nestjs/common";
import { DeleteProtectorUseCase } from "src/core/protector/usecase/delete-protector/DeleteProtector.usecase";

@Controller('protector')
export class DeleteProtectorController {
  constructor(
    private readonly deleteProtectorUseCase: DeleteProtectorUseCase
  ) { }

  @Delete('/delete/:id')
  async handle(@Param('id') id: string) {
    return this.deleteProtectorUseCase.execute(id);
  }
}