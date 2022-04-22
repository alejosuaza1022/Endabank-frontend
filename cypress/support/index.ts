declare namespace Cypress{
    interface Chainable{
        login: (username:string, password:string) => void;
        enterUrl: (command:string, url:string)=> void;
        
    } 
}
