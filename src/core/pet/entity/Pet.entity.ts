import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { Protector } from "src/core/protector/entity/Protector.entity";
import { PetSex, PetSpecie, PetStatus } from "../dtos/CreatePet.dto";

export class Pet {
  readonly id?: string;
  readonly name: string;
  readonly sex: PetSex;
  readonly age: string;
  readonly species: PetSpecie;
  readonly description?: string;
  status: PetStatus;
  readonly photo?: string;

  readonly protectorId: string;
  adopterId?: string;

  constructor({
    id,
    name,
    sex,
    age,
    species,
    description,
    status,
    photo,
    protectorId,
    adopterId
  }: {
    id?: string;
    name: string;
    sex: PetSex;
    age: string;
    species: PetSpecie;
    description?: string;
    status: PetStatus;
    photo?: string;
    protectorId: string;
    adopterId?: string;
  }) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species;
    this.description = description;
    this.status = status;
    this.photo = photo;
    this.protectorId = protectorId;
    this.adopterId = adopterId;
  }
}
