import { Get, Module } from '@nestjs/common';
import { CreateAdopterController } from '../operation/controllers/adopter/CreateAdopterController';
import { CreateAdopterUseCase } from 'src/core/adopter/usecase/create-adopter/CreateAdopter.usecase';
import { GetAdopterController } from '../operation/controllers/adopter/GetAdopterController';
import { GetAdopterUseCase } from 'src/core/adopter/usecase/get-adopter/GetAdopter.usecase';
import { AdopterPersistenceModule } from 'src/infrastructure/persistence/mongodb/user/AdopterPersistenceModule';


@Module({
  imports: [AdopterPersistenceModule],
  controllers: [CreateAdopterController, GetAdopterController],
  providers: [CreateAdopterUseCase, GetAdopterUseCase],
})
export class AdopterModule { }