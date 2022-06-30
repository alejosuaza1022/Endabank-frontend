import BasePage from "./BasePage";
import url from "../fixtures/url.json"

export default class TransactionPage extends BasePage{

    relativePath: string = this.relativePath +url.urlTransaction;

    private TRANSACTION_FORM: string = '#submitTransaction'
    private DESTINY_ACCOUNT: string = '#bankAccountNumberReceiver'
    private AMOUNT: string = '#amount'
    private SUBMIT_TRANSACTION_BUTTON: string = '#submitTransaction'
    private BANK_ISSUER: string = '#bankAccountNumberIssuer'

    getTransactionForm() {
        return cy.get(this.TRANSACTION_FORM);
    }

    getDestinyAccount(){
        return cy.get(this.DESTINY_ACCOUNT);
    }

    getAmount(){
        return cy.get(this.AMOUNT)
    }

    getSubmitTransactionFormButton(){
        return cy.get(this.SUBMIT_TRANSACTION_BUTTON);
    }

    getTransactionSummaryPopUp(){
        return cy.get(this.BANK_ISSUER);
    }
}