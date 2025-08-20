import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum PetSex {
  FEMALE = "F",
  MALE = "M",
}

export enum PetSpecie {
  CAT = "cat",
  DOG = "dog",
}

export enum PetStatus {
  AVAILABLE = "available",
  ADOPTED = "adopted",
}

export class CreatePetDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(PetSex)
  @IsNotEmpty()
  sex: PetSex;

  @IsString()
  @IsNotEmpty()
  age: string;

  @IsEnum(PetSpecie)
  @IsNotEmpty()
  species: PetSpecie;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsEnum(PetStatus)
  @IsNotEmpty()
  status: PetStatus;

  @IsString()
  @IsNotEmpty()
  protectorId: string; // ID do protetor que cadastrou o pet

  @IsString()
  @IsOptional()
  adopterId?: string; // ID do adotante, se já tiver sido adotado
}

