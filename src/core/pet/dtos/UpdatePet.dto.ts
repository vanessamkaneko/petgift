import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PetSex, PetSpecie, PetStatus } from './CreatePet.dto';

export class UpdatePetDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(PetSex)
  @IsOptional()
  sex?: PetSex;

  @IsString()
  @IsOptional()
  age?: string;

  @IsEnum(PetSpecie)
  @IsOptional()
  species?: PetSpecie;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsEnum(PetStatus)
  @IsOptional()
  status?: PetStatus;

  @IsString()
  @IsOptional()
  adopterId?: string;
}