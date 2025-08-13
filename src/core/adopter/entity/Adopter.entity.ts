import { User } from "src/core/user/entity/User.entity";


export class Adopter extends User {

    constructor({
        id,
        name,
        email,
        phone,
        document,
        password,
        photo
    }: {
        id?: string;
        name: string;
        email: string;
        phone: string;
        document: string;
        password: string;
        photo?: string;
    }) {
        super({
            id,
            name,
            email,
            phone,
            document,
            password,
            photo
        })
    }
}
