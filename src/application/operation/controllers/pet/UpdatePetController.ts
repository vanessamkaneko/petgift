import { Body, Controller, Param, Put } from "@nestjs/common";
import { UpdatePetDTO } from "src/core/pet/dtos/UpdatePet.dto";
import { UpdatePetUseCase } from "src/core/pet/usecase/update-pet/UpdatePet.usecase";

@Controller('pet')
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