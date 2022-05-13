declare namespace Cypress{
    interface Chainable{
        login: (username:string, password:string) => void;
        enterUrl: (url:string)=> void;
        verifySection: (url:string, time:number, url2:string)=> void;
        verifyStatus: (status:string) => void;
    } 
}
