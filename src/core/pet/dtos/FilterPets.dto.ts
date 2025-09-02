
import { PetSex, PetSpecie, PetStatus } from "./CreatePet.dto";

export type FilterPetsDTO = {
  status?: PetStatus;
  species?: PetSpecie;
  sex?: PetSex;
  minAge?: number;
  maxAge?: number;
};
