import { Body, Controller, Param, Put, UseGuards } from "@nestjs/common";
import { UpdateProtectorUseCase } from "src/core/protector/usecase/update-protector/UpdateProtector.usecase";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";

@Controller('protector')
@UseGuards(AuthGuard)
export class UpdateProtectorController {
  constructor(
    private readonly updateProtectorUseCase: UpdateProtectorUseCase
  ) { }

  @Put('/update/:id')
  async handle(
    @Param('id') id: string, @Body() payload: UpdateUserDTO) {
    return this.updateProtectorUseCase.execute(id, payload);
  }
}