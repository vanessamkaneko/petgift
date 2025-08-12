import { IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  document: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  photo?: string;
}