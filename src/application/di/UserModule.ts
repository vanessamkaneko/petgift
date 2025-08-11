import { Get, Module } from '@nestjs/common';
import { UserPersistenceModule } from 'src/infrastructure/persistence/mongodb/user/UserPersistenceModule';
import { CreateUserController } from '../operation/controllers/user/CreateUserController';
import { CreateUserUseCase } from 'src/core/user/usecase/create-user/CreateUser.usecase';
import { GetUserController } from '../operation/controllers/user/GetUserController';
import { GetUserUseCase } from 'src/core/user/usecase/get-user/GetUser.usecase';


@Module({
  imports: [UserPersistenceModule],
  controllers: [CreateUserController, GetUserController],
  providers: [CreateUserUseCase, GetUserUseCase],
})
export class UserModule { }