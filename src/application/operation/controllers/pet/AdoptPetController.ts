import { Body, Controller, Param, Post } from "@nestjs/common";
import { AdoptPetUseCase } from "src/core/pet/usecase/adopt-pet/AdoptPet.usecase";

/* posteriormente o id do adopter deve ser pego através do user logado e não ser enviado no body... */
@Controller("pet")
export class AdoptPetController {
  constructor(
    private readonly adoptPetUseCase: AdoptPetUseCase,
  ) { }

  @Post("/adopt/:id")
  async handle(@Param("id") id: string, @Body("adopterId") adopterId: string,
  ) {
    return await this.adoptPetUseCase.execute(id, adopterId);
  }
}
