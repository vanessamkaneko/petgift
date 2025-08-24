import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginUserUseCase } from 'src/core/user/usecase/login-user/LoginUser.usecase';
import { AdopterDocument, AdopterSchema } from 'src/infrastructure/db/mongodb/schemas/adopter.schema';
import { ProtectorDocument, ProtectorSchema } from 'src/infrastructure/db/mongodb/schemas/protector.schema';
import { IUserRepository } from 'src/infrastructure/repositories/interfaces/IUserRepository';
import { UserMongoDBRepository } from 'src/infrastructure/repositories/UserMongoDBRepository';
import { AuthModule } from 'src/infrastructure/security/AuthModule';
import { LoginUserController } from '../operation/controllers/user/LoginUserController';

@Module({
  imports: [
    // Registra os modelos Mongoose
    MongooseModule.forFeature([
      { name: AdopterDocument.name, schema: AdopterSchema },
      { name: ProtectorDocument.name, schema: ProtectorSchema },
    ]),
    AuthModule
  ],
  controllers: [LoginUserController],
  providers: [LoginUserUseCase,
    {
      provide: IUserRepository, // token
      useClass: UserMongoDBRepository, // implementação concreta
    },
  ],
})
export class UserModule { }