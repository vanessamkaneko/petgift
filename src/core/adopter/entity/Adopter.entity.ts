import { User } from "src/core/user/entity/User.entity";


export class Adopter extends User {

    constructor(
        name: string,
        email: string,
        phone: string,
        document: string,
        password: string,
        photo?: string,
        id?: string,
    ) {
        super(name, email, phone, document, password, photo, id);
    }
}
