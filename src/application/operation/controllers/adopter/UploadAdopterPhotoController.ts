import { Controller, Param, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateAdopterUseCase } from "src/core/adopter/usecase/update-adopter/UpdateAdopter.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";
import { multerProfileConfig } from "src/infrastructure/config/multer.config";

@Controller('adopter')
@UseGuards(AuthGuard)
export class UploadAdopterPhotoController {
  constructor(
    private readonly updateAdopterUseCase: UpdateAdopterUseCase
  ) { }

  @Post('/:id/photo')
  @UseInterceptors(FileInterceptor('file', multerProfileConfig))
  async handle(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const photoUrl = `/uploads/profiles/${file.filename}`;
    // Atualiza apenas a foto do Adopter
    return this.updateAdopterUseCase.execute(id, { photo: photoUrl });
  }
}
