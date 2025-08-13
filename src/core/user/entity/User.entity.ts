export abstract class User {

  readonly id?: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly document: string;
  readonly password: string;
  readonly photo?: string;

  constructor({
    id,
    name,
    email,
    phone,
    document,
    password,
    photo,
  }: {
    id?: string;
    name: string;
    email: string;
    phone: string;
    document: string;
    password: string;
    photo?: string;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.document = document;
    this.password = password;
    this.photo = photo;
  }
}
