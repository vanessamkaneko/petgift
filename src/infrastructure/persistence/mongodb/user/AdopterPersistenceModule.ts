import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdopterDocument, AdopterSchema } from 'src/infrastructure/db/mongodb/schemas/adopter.schema';
import { AdopterMongoDBRepository } from 'src/infrastructure/repositories/AdopterMongoDBRepository';
import { IAdopterRepository } from 'src/infrastructure/repositories/interfaces/IAdopterRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AdopterDocument.name,
        schema: AdopterSchema,
      }
    ]),
  ],
  providers: [
    {
      provide: IAdopterRepository,
      useClass: AdopterMongoDBRepository
    }
  ],
  exports: [IAdopterRepository],
})
export class AdopterPersistenceModule { }