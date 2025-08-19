import { Adopter } from "src/core/adopter/entity/Adopter.entity";
import { Protector } from "src/core/protector/entity/Protector.entity";

export class Pet {
  readonly id?: string;
  readonly name: string;
  readonly sex: "F" | "M";
  readonly age: string;
  readonly species: "dog" | "cat";
  readonly description?: string;
  readonly status: "available" | "adopted";
  readonly photo?: string;

  // Relações
  protector: Protector;   // Quem cadastrou o pet
  adopter?: Adopter;      // Quem adotou (pode estar vazio)

  constructor({
    id,
    name,
    sex,
    age,
    species,
    description,
    status,
    photo,
    protector,
    adopter
  }: {
    id?: string;
    name: string;
    sex: "F" | "M";
    age: string;
    species: "dog" | "cat";
    description?: string;
    status: "available" | "adopted";
    photo?: string;
    protector?: Protector;
    adopter?: Adopter;
  }) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species;
    this.description = description;
    this.status = status;
    this.photo = photo;
    this.protector = protector;
    this.adopter = adopter;
  }
}
