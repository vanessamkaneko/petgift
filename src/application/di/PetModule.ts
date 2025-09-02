import { Module } from "@nestjs/common";
import { CreatePetUseCase } from "src/core/pet/usecase/create-pet/CreatePet.usecase";
import { DeletePetUseCase } from "src/core/pet/usecase/delete-pet/DeletePet.usecase";
import { UpdatePetUseCase } from "src/core/pet/usecase/update-pet/UpdatePet.usecase";
import { PetPersistenceModule } from "src/infrastructure/persistence/mongodb/pet/PetPersistenceModule";
import { CreatePetController } from "../operation/controllers/pet/CreatePetController";
import { DeletePetController } from "../operation/controllers/pet/DeletePetController";
import { UpdatePetController } from "../operation/controllers/pet/UpdatePetController";
import { ProtectorPersistenceModule } from "src/infrastructure/persistence/mongodb/user/ProtectorPersistenceModule";
import { AdoptPetController } from "../operation/controllers/pet/AdoptPetController";
import { AdoptPetUseCase } from "src/core/pet/usecase/adopt-pet/AdoptPet.usecase";
import { GetPetsUseCase } from "src/core/pet/usecase/get-pets/GetPets.usecase";
import { GetPetsController } from "../operation/controllers/pet/GetPetsController";
import { FilterPetsController } from "../operation/controllers/pet/FilterPetsController";
import { FilterPetsUseCase } from "src/core/pet/usecase/filter-pets/FilterPets.usecase";
@Module({
  imports: [PetPersistenceModule, ProtectorPersistenceModule],
  controllers: [CreatePetController, GetPetsController, UpdatePetController, DeletePetController, AdoptPetController, FilterPetsController],
  providers: [CreatePetUseCase, GetPetsUseCase, UpdatePetUseCase, DeletePetUseCase, AdoptPetUseCase, FilterPetsUseCase],
})
export class PetModule { }