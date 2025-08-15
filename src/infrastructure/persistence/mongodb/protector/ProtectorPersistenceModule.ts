import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProtectorDocument, ProtectorSchema } from 'src/infrastructure/db/mongodb/schemas/protector.schema';
import { IProtectorRepository } from 'src/infrastructure/repositories/interfaces/IProtectorRepository';
import { ProtectorMongoDBRepository } from 'src/infrastructure/repositories/ProtectorMongoDBRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProtectorDocument.name,
        schema: ProtectorSchema,
      }
    ]),
  ],
  providers: [
    {
      provide: IProtectorRepository,
      useClass: ProtectorMongoDBRepository
    }
  ],
  exports: [IProtectorRepository],
})
export class ProtectorPersistenceModule { }