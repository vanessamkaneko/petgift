import { IsEnum, IsNumber, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PetSex, PetSpecie, PetStatus } from "./CreatePet.dto";

export class FilterPetsDTO {
  @IsEnum(PetStatus)
  @IsOptional()
  status?: PetStatus;

  @IsEnum(PetSpecie)
  @IsOptional()
  species?: PetSpecie;

  @IsEnum(PetSex)
  @IsOptional()
  sex?: PetSex;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  minAge?: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  maxAge?: number;
}
