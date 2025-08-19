import { Module } from "@nestjs/common";
import { PetPersistenceModule } from "src/infrastructure/persistence/mongodb/pet/PetPersistenceModule";
import { CreatePetController } from "../operation/controllers/pet/CreatePetController";
import { CreateAdopterUseCase } from "src/core/adopter/usecase/create-adopter/CreateAdopter.usecase";
import { DeletePetController } from "../operation/controllers/pet/DeletePetController";
import { UpdatePetController } from "../operation/controllers/pet/UpdatePetController";
import { DeletePetUseCase } from "src/core/pet/usecase/delete-pet/DeletePet.usecase";
import { UpdatePetUseCase } from "src/core/pet/usecase/update-pet/UpdatePet.usecase";
@Module({
  imports: [PetPersistenceModule],
  controllers: [CreatePetController, UpdatePetController, DeletePetController],
  providers: [CreateAdopterUseCase, UpdatePetUseCase, DeletePetUseCase],
})
export class PetModule { }