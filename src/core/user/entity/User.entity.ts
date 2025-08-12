export abstract class User {

  readonly id?: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly document: string;
  readonly password: string;
  readonly photo?: string;

  constructor(
    name: string,
    email: string,
    phone: string,
    document: string,
    password: string,
    photo?: string,
    id?: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.document = document;
    this.password = password;
    this.photo = photo;
  }
}
