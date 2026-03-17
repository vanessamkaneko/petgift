import { Controller, Param, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateProtectorUseCase } from "src/core/protector/usecase/update-protector/UpdateProtector.usecase";
import { AuthGuard } from "src/infrastructure/security/guards/Auth.guard";
import { multerProfileConfig } from "src/infrastructure/config/multer.config";

@Controller('protector')
@UseGuards(AuthGuard)
export class UploadProtectorPhotoController {
  constructor(
    private readonly updateProtectorUseCase: UpdateProtectorUseCase
  ) { }

  @Post('/:id/photo')
  @UseInterceptors(FileInterceptor('file', multerProfileConfig))
  async handle(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const photoUrl = `/uploads/profiles/${file.filename}`;
    // Atualiza apenas a foto do Protector
    return this.updateProtectorUseCase.execute(id, { photo: photoUrl });
  }
}
