
import { generate } from "generate-password";
class ExistingUser {
    static readonly id: string = "24";
    static readonly email: string = "daniel.giraldo@endava.com";
    // static readonly email: string = "nicolas.cardona@endava.com";
    static password: string;
    static token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaWNvbGFzLmNhcmRvbmFAZW5kYXZhLmNvbSIsImV4cCI6MTY1MDQ3MjU2OSwiaWF0IjoxNjUwNDcxMzY5LCJ1c2VySWQiOjI0fQ.aFtdG7tSS8ss_yd6qrBPj2_eNkq87oUyc8pXrqVvbteLh9fIWJtwxE34svXvFMddi6wmQs0p0GHwFtUcyW_MSg"

    static chooseNewPassword(): void { 
        this.password = generate({
            length: 10,
            numbers: true,
            symbols: true,
            lowercase: true,
            uppercase: true,
            strict: true,
        })
    }

    static generateFixture(): void {
        cy.writeFile("cypress/fixtures/existing-user.json", {
            id: this.id,
            email: this.email,
            password: this.password,
        });
    }
}

export default ExistingUser;