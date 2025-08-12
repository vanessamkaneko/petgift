import { User } from "src/core/user/entity/User.entity";

export class Protector extends User {
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
        super(id, name, email, phone, document, password, photo);
    }
}
