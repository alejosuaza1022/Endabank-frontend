import BasePage from "./BasePage";

export default class signUpPage extends BasePage{

    relativePath: string = this.relativePath +'/sign-up'

    newEmailGenerator(){
        var newEmail: string;
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var username = '';
        for(var ii=0; ii<10; ii++){
            username += chars[Math.floor(Math.random() * chars.length)];
        }
        newEmail=username+'@gmail.com'
        return (newEmail)
    }

    newIdentifier(){
        var chars = '1234567890';
        var sDigits: string = '';
        for(var ii=0; ii<10; ii++){
            sDigits += chars[Math.floor(Math.random() * chars.length)];
        }
        return(sDigits)
    }

    
    wrongEmailGenerator(){
        var wrongEmail: string;
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var username = '';
        for(var ii=0; ii<10; ii++){
            username += chars[Math.floor(Math.random() * chars.length)];
        }
        wrongEmail=username+'gmail.com'
        return (wrongEmail)
    }

    wrongIdentifier(){
        var chars = 'abcdefghijk';
        var sWrongDigits: string = '';
        for(var ii=0; ii<10; ii++){
            sWrongDigits += chars[Math.floor(Math.random() * chars.length)];
        }
        return(sWrongDigits)
    }

    
    getTypeIdentifierID(){
        return(cy.get('#typeIdentifierId'));
    }

    getIdentifier(){
        return(cy.get('#identifier'));
    }

    getIdentifierMessage(){
        return(cy.get('.grid-cc > :nth-child(2) > .text-xs'));
    }

    getFirstName(){
        return(cy.get('#firstName'));
    }

    getFirstNameMessage(){
        return (cy.get(':nth-child(1) > .text-xs'));
    }

    getLastName(){
        return (cy.get('#lastName'));
    }

    getLastNameMessage(){
        return (cy.get('.grid > :nth-child(2) > .text-xs'));
    }

    getPhoneNumberInput(){
        return (cy.get('#phoneNumber'));
    }

    getPhoneNumberMessage(){
        return (cy.get(':nth-child(3) > .text-xs'))
    }

    getNewEmailInput(){
        return (cy.get('#email'))
    }

    getNewEmailMessage(){
        return (cy.get(':nth-child(4) > .text-xs'))
    }
    
    getPasswordInput(){
        return (cy.get('#password'));
    }

    getPasswordMessage(){
        return (cy.get(':nth-child(5) > .text-xs'));
    }

    getRePasswordInput(){
        return (cy.get('#rePassword'));
    }

    getRePasswordMessage(){
        return (cy.get(':nth-child(6) > .text-xs'));
    }

    getSubmitSignUpButton(){
        return (cy.get('#submitSignUp'));
    }
    
}