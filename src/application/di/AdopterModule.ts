import { Delete, Module } from '@nestjs/common';
import { CreateAdopterController } from '../operation/controllers/adopter/CreateAdopterController';
import { CreateAdopterUseCase } from 'src/core/adopter/usecase/create-adopter/CreateAdopter.usecase';
import { GetAdopterController } from '../operation/controllers/adopter/GetAdopterController';
import { GetAdopterUseCase } from 'src/core/adopter/usecase/get-adopter/GetAdopter.usecase';
import { AdopterPersistenceModule } from 'src/infrastructure/persistence/mongodb/user/AdopterPersistenceModule';
import { UpdateAdopterController } from '../operation/controllers/adopter/UpdateAdopterController';
import { UpdateAdopterUseCase } from 'src/core/adopter/usecase/update-adopter/UpdateAdopter.usecase';
import { DeleteAdopterController } from '../operation/controllers/adopter/DeleteAdopterController';
import { DeleteAdopterUseCase } from 'src/core/adopter/usecase/delete-adopter/DeleteAdopter.usecase';


@Module({
  imports: [AdopterPersistenceModule],
  controllers: [CreateAdopterController, GetAdopterController, UpdateAdopterController, DeleteAdopterController],
  providers: [CreateAdopterUseCase, GetAdopterUseCase, UpdateAdopterUseCase, DeleteAdopterUseCase],
})
export class AdopterModule { }