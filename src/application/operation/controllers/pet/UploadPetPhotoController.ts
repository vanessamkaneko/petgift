import { Controller, Param, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdatePetUseCase } from "src/core/pet/usecase/update-pet/UpdatePet.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";
import { multerPetConfig } from "src/infrastructure/config/multer.config";
import { ProtectorGuard } from "src/core/protector/guards/Protector.guard";

@Controller('pet')
@UseGuards(AuthGuard, ProtectorGuard)
export class UploadPetPhotoController {
  constructor(
    private readonly updatePetUseCase: UpdatePetUseCase
  ) { }

  @Post('/:id/photo')
  @UseInterceptors(FileInterceptor('file', multerPetConfig))
  async handle(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const photoUrl = `/uploads/pets/${file.filename}`;
    // Atualiza apenas a foto do Pet
    return this.updatePetUseCase.execute(id, { photo: photoUrl });
  }
}
