import { Body, Controller, Param, Put, UseGuards } from "@nestjs/common";
import { UpdatePetDTO } from "src/core/pet/dtos/UpdatePet.dto";
import { UpdatePetUseCase } from "src/core/pet/usecase/update-pet/UpdatePet.usecase";
import { ProtectorGuard } from "src/core/protector/guards/Protector.guard";

@Controller('pet')
@UseGuards(ProtectorGuard)
export class UpdatePetController {
  constructor(
    private readonly updatePetUseCase: UpdatePetUseCase
  ) { }

  @Put('/update/:id')
  async handle(
    @Param('id') id: string, @Body() payload: UpdatePetDTO) {
    return this.updatePetUseCase.execute(id, payload);
  }
}