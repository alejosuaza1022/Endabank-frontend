import BasePage from "./BasePage";
import url from "../fixtures/url.json"

export default class merchantApprovalLogPage extends BasePage{
    static getEndDateField() {
        throw new Error("Method not implemented.");
    }
    static getStartDateField() {
        throw new Error("Method not implemented.");
    }
    static getSubmitFilterButton() {
        throw new Error("Method not implemented.");
    }

    relativePath: string = this.relativePath +url.urlProfile;

    private START_DATE_FIELD: string = '#searchStartDate'
    private END_DATE_FIELD: string = '#searchEndDate'
    private MERCHANT_SEARCH_INPUT_FIELD: string = '#merchantSearchInput'
    private REVIEWING_USER_SEARCH_INPUT_FIELD: string = '#reviewingUserSearchInput'
    private SUBMIT_FILTER_BUTTON: string = '#submitFilter';

    getSubmitFilterButton() {
        return cy.get(this.SUBMIT_FILTER_BUTTON);
    }

    getStartDateField(){
        return cy.get(this.START_DATE_FIELD);
    }

    getEndDateField(){
        return cy.get(this.END_DATE_FIELD);
    }

    getMerchantSearchInputField(){
        return cy.get(this.MERCHANT_SEARCH_INPUT_FIELD);
    }
   
    getReviewingUserSearchInputField(){
        return cy.get(this.REVIEWING_USER_SEARCH_INPUT_FIELD);
    }



}
