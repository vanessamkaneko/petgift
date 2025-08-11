export class User {
    readonly id?: string;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly document: string;
    readonly password: string;
    readonly photo?: string;
    readonly type: string;

    constructor(params: {
        id?: string;
        name: string; 
        email: string;
        phone: string;
        document: string;
        password: string;
        photo?: string;
        type: string
    }) {
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.phone = params.phone;
        this.document = params.document;
        this.password = params.password;
        this.photo = params.photo;
        this.type = params.type;
    }
}
