import { Module } from '@nestjs/common';
import { CreateProtectorController } from '../operation/controllers/protector/CreateProtectorController';
import { CreateProtectorUseCase } from 'src/core/protector/usecase/create-protector/CreateProtector.usecase';
import { GetProtectorController } from '../operation/controllers/protector/GetProtectorController';
import { UpdateProtectorController } from '../operation/controllers/protector/UpdateProtectorController';
import { DeleteProtectorController } from '../operation/controllers/protector/DeleteProtectorController';
import { GetProtectorUseCase } from 'src/core/protector/usecase/get-protector/GetProtector.usecase';
import { UpdateProtectorUseCase } from 'src/core/protector/usecase/update-protector/UpdateProtector.usecase';
import { DeleteProtectorUseCase } from 'src/core/protector/usecase/delete-protector/DeleteProtector.usecase';
import { ProtectorPersistenceModule } from 'src/infrastructure/persistence/mongodb/user/ProtectorPersistenceModule';


@Module({
  imports: [ProtectorPersistenceModule],
  controllers: [CreateProtectorController, GetProtectorController, UpdateProtectorController, DeleteProtectorController],
  providers: [CreateProtectorUseCase, GetProtectorUseCase, UpdateProtectorUseCase, DeleteProtectorUseCase],
})
export class ProtectorModule { }