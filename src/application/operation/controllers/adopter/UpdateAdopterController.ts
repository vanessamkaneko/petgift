import { Body, Controller, Param, Put, UseGuards } from "@nestjs/common";
import { UpdateAdopterUseCase } from "src/core/adopter/usecase/update-adopter/UpdateAdopter.usecase";
import { UpdateUserDTO } from "src/core/user/dtos/UpdateUser.dto";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";

@Controller('adopter')
@UseGuards(AuthGuard)
export class UpdateAdopterController {
  constructor(
    private readonly updateAdopterUseCase: UpdateAdopterUseCase
  ) { }

  @Put('/update/:id')
  async handle(
    @Param('id') id: string, @Body() payload: UpdateUserDTO) {
    return this.updateAdopterUseCase.execute(id, payload);
  }
}