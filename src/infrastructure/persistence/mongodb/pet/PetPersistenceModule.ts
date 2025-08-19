import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetDocument, PetSchema } from 'src/infrastructure/db/mongodb/schemas/pet.schema';
import { IPetRepository } from 'src/infrastructure/repositories/interfaces/IPetRepository';
import { PetMongoDBRepository } from 'src/infrastructure/repositories/PetMongoDBRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PetDocument.name,
        schema: PetSchema,
      }
    ]),
  ],
  providers: [
    {
      provide: IPetRepository,
      useClass: PetMongoDBRepository
    }
  ],
  exports: [IPetRepository],
})
export class PetPersistenceModule { }