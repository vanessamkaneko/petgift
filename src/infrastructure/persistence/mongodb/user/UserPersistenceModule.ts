import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from 'src/infrastructure/db/mongodb/schemas/user.schema';
import { IUserRepository } from 'src/infrastructure/repositories/interfaces/IUserRepository';
import { UserMongoDBRepository } from 'src/infrastructure/repositories/UserMongoDBRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserDocument.name,
        schema: UserSchema,
      }
    ]),
  ],
  providers: [
    {
    provide: IUserRepository,
    useClass: UserMongoDBRepository
    }
  ],
  exports: [IUserRepository],
})
export class UserPersistenceModule { }