import basePage from "../pageObjects/basePage";

export default class signUpPage extends basePage{

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



    getPhoneNumberInput(){
        return (cy.get('#phoneNumber'));
    }

    getNewEmailInput(){
        return (cy.get('#email'))
    }
    
    getPasswordInput(){
        return(cy.get('#password'));
    }

    getRePasswordInput(){
        return(cy.get('#rePassword'));
    }

    getSubmitSignUpButton(){
        return(cy.get('#submitSignUp'));
    }

    getTypeIdentifierID(){
        return(cy.get('#typeIdentifierId'));
    }

    getIdentifier(){
        return(cy.get('#identifier'));
    }

    getFirstName(){
        return(cy.get('#firstName'));
    }

    getFirstName(){
        return(cy.get('#firstName'));
    }

    getLastName(){
        return(cy.get('#lastName'));
    }







}