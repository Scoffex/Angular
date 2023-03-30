export class UserModel {

    public email: string;
    public id: string;
    private token: string
    private tokenExpirationDate: Date;

    constructor(email: string, id: string, token: string, tokenExpirationDate: Date) {
        this.email = email;
        this.id = id;
        this.token = token;
        this.tokenExpirationDate = tokenExpirationDate;
    }

    getToken() {
        if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
            return null;
        } else {
            return this.token;
        }
    }
}