import { Module } from "@nestjs/common";
import { CreatePetUseCase } from "src/core/pet/usecase/create-pet/CreatePet.usecase";
import { DeletePetUseCase } from "src/core/pet/usecase/delete-pet/DeletePet.usecase";
import { UpdatePetUseCase } from "src/core/pet/usecase/update-pet/UpdatePet.usecase";
import { PetPersistenceModule } from "src/infrastructure/persistence/mongodb/pet/PetPersistenceModule";
import { CreatePetController } from "../operation/controllers/pet/CreatePetController";
import { DeletePetController } from "../operation/controllers/pet/DeletePetController";
import { UpdatePetController } from "../operation/controllers/pet/UpdatePetController";
import { ProtectorPersistenceModule } from "src/infrastructure/persistence/mongodb/user/ProtectorPersistenceModule";
import { GetAvailablePetsController } from "../operation/controllers/pet/GetAvailablePetController";
import { GetAvailablePetsUseCase } from "src/core/pet/usecase/get-available-pets/GetAvailablePets.usecase";
import { AdoptPetController } from "../operation/controllers/pet/AdoptPetController";
import { AdoptPetUseCase } from "src/core/pet/usecase/adopt-pet/AdoptPet.usecase";
@Module({
  imports: [PetPersistenceModule, ProtectorPersistenceModule],
  controllers: [CreatePetController, GetAvailablePetsController, UpdatePetController, DeletePetController, AdoptPetController],
  providers: [CreatePetUseCase, GetAvailablePetsUseCase, UpdatePetUseCase, DeletePetUseCase, AdoptPetUseCase],
})
export class PetModule { }