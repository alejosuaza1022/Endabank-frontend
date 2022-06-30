import Url from "../fixtures/url.json";

export default class basePage {
    relativePath1 =Url.baseUrlMerchant;

    constructor() {}

    visit(){
        return cy.visit(this.relativePath1)
    }
    private NIKE_AIR_96_ADD_BUTTON: string = ':nth-child(6) > .bg-white > .px-4 > .bg-indigo-600'
    private AIR_FORCE_1_ADD_BUTTON: string = ':nth-child(5) > .bg-white > .px-4 > .bg-indigo-600'
    private JORDAN_RACER_ADD_BUTTON: string = ':nth-child(4) > .bg-white > .px-4 > .bg-indigo-600'
    private AIR_JORDAN_11_ADD_BUTTON: string = ':nth-child(3) > .bg-white > .px-4 > .bg-indigo-600'
    private AIR_JORDAN_1_ADD_BUTTON: string = ':nth-child(1) > .bg-white > .px-4 > .bg-indigo-600'
    private JORDAN_RETRO_4_ADD_BUTTON: string = ':nth-child(2) > .bg-white > .px-4 > .bg-indigo-600'
    private ADIDAS_YEEZY_ADD_BUTTON: string = ':nth-child(7) > .bg-white > .px-4 > .bg-indigo-600'
    private JORDAN_1_LOW_ADD_BUTTON: string = ':nth-child(8) > .bg-white > .px-4 > .bg-indigo-600'
    private NIKE_AIR_96_REMOVE_BUTTON: string = ':nth-child(3) > :nth-child(4) > .w-4'
    private AIR_FORCE_1_REMOVE_BUTTON: string = ':nth-child(5) > :nth-child(4) > .w-4'
    private JORDAN_RACER_REMOVE_BUTTON: string = ':nth-child(4) > :nth-child(4) > .w-4'
    private AIR_JORDAN_11_REMOVE_BUTTON: string = ':nth-child(3) > :nth-child(4) > .w-4 > [d="M1 1L25 25"]'
    private AIR_JORDAN_1_REMOVE_BUTTON: string = ':nth-child(1) > :nth-child(4) > .w-4'
    private JORDAN_RETRO_4_REMOVE_BUTTON: string = ':nth-child(2) > :nth-child(4) > .w-4'
    private ADIDAS_YEEZY_REMOVE_BUTTON: string = ':nth-child(3) > :nth-child(4) > .w-4'
    private JORDAN_1_LOW_REMOVE_BUTTON: string = ':nth-child(3) > :nth-child(4) > .w-4'
    private NIKE_AIR_96_LABEL: string = ':nth-child(4) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private AIR_FORCE_1_LABEL: string = ':nth-child(8) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private JORDAN_RACER_LABEL: string = ':nth-child(7) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private AIR_JORDAN_11_LABEL: string = ':nth-child(3) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private AIR_JORDAN_1_LABEL: string = ':nth-child(1) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private JORDAN_RETRO_4_LABEL: string = ':nth-child(2) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private ADIDAS_YEEZY_LABEL: string = ':nth-child(5) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private JORDAN_1_LOW_LABEL: string = ':nth-child(6) > :nth-child(1) > .flex > .ml-3 > .text-gray-900'
    private SUB_TOTAL_SPACE: string = ':nth-child(1) > .text-right'
    private NIKE_AIR_96_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(6) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private AIR_FORCE_1_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(2) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private JORDAN_RACER_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(1) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private AIR_JORDAN_11_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(5) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private AIR_JORDAN_1_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(3) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private JORDAN_RETRO_4_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(4) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private ADIDAS_YEEZY_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(5) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private JORDAN_1_LOW_ADD_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(6) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-r'
    private NIKE_AIR_96_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(4) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private AIR_FORCE_1_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(2) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private JORDAN_RACER_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(1) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private AIR_JORDAN_11_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(5) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private AIR_JORDAN_1_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(3) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private JORDAN_RETRO_4_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(4) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private ADIDAS_YEEZY_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(7) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private JORDAN_1_LOW_REMOVE_FROM_SHOPPING_CAR_BUTTON: string = ':nth-child(8) > :nth-child(2) > .custom-number-input > .flex-row > .rounded-l'
    private SHOPPING_CAR_BUTTON: string = 'img.cursor-pointer';

    getAirJordan1AddButton() {
        return cy.get(this.AIR_JORDAN_1_ADD_BUTTON);
    }

    getJordanRetro4AddButton(){
        return cy.get(this.JORDAN_RETRO_4_ADD_BUTTON);
    }

    getAirJordan11AddButton(){
        return cy.get(this.AIR_JORDAN_11_ADD_BUTTON);
    }

    getJordanRacerAddButton(){
        return cy.get(this.JORDAN_RACER_ADD_BUTTON);
    }
   
    getAirForce1AddButton(){
        return cy.get(this.AIR_FORCE_1_ADD_BUTTON);
    }

    getNikeAir96AddButton(){
        return cy.get(this.NIKE_AIR_96_ADD_BUTTON);
    }

    getAdidasYeezyAddButton(){
        return cy.get(this.ADIDAS_YEEZY_ADD_BUTTON);
    }

    getJordan1LowAddButton(){
        return cy.get(this.JORDAN_1_LOW_ADD_BUTTON);
    }

    getShoppingCarButton(){
        return cy.get(this.SHOPPING_CAR_BUTTON);
    }

    getSubTotalSpace(){
        return cy.get(this.SUB_TOTAL_SPACE);
    }
    getAirJordan1RemoveButton() {
        return cy.get(this.AIR_JORDAN_1_REMOVE_BUTTON);
    }

    getJordanRetro4RemoveButton(){
        return cy.get(this.JORDAN_RETRO_4_REMOVE_BUTTON);
    }

    getAirJordan11RemoveButton(){
        return cy.get(this.AIR_JORDAN_11_REMOVE_BUTTON);
    }

    getJordanRacerRemoveButton(){
        return cy.get(this.JORDAN_RACER_REMOVE_BUTTON);
    }
   
    getAirForce1RemoveButton(){
        return cy.get(this.AIR_FORCE_1_REMOVE_BUTTON);
    }

    getNikeAir96RemoveButton(){
        return cy.get(this.NIKE_AIR_96_REMOVE_BUTTON);
    }

    getAdidasYeezyRemoveButton(){
        return cy.get(this.ADIDAS_YEEZY_REMOVE_BUTTON);
    }

    getJordan1LowRemoveButton(){
        return cy.get(this.JORDAN_1_LOW_REMOVE_BUTTON);
    }

    getAirJordan1Label() {
        return cy.get(this.AIR_JORDAN_1_LABEL);
    }

    getJordanRetro4Label(){
        return cy.get(this.JORDAN_RETRO_4_LABEL);
    }

    getAirJordan11Label(){
        return cy.get(this.AIR_JORDAN_11_LABEL);
    }

    getJordanRacerLabel(){
        return cy.get(this.JORDAN_RACER_LABEL);
    }
   
    getAirForce1Label(){
        return cy.get(this.AIR_FORCE_1_LABEL);
    }

    getNikeAir96Label(){
        return cy.get(this.NIKE_AIR_96_LABEL);
    }

    getAdidasYeezyLabel(){
        return cy.get(this.ADIDAS_YEEZY_LABEL);
    }

    getJordan1LowLabel(){
        return cy.get(this.JORDAN_1_LOW_LABEL);
    }

    getNikeAir96AddFromShoppingCarButton(){
        return cy.get(this.NIKE_AIR_96_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getAirForce1AddFromShoppingCarButton(){
        return cy.get(this.AIR_FORCE_1_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getJordanRacerAddFromShoppingCarButton(){
        return cy.get(this.JORDAN_RACER_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getAirJordan11AddFromShoppingCarButton(){
        return cy.get(this.AIR_JORDAN_11_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getAirJordan1AddFromShoppingCarButton(){
        return cy.get(this.AIR_JORDAN_1_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getJordanRetro4AddFromShoppingCarButton(){
        return cy.get(this.JORDAN_RETRO_4_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getAdidasYeezyAddFromShoppingCarButton(){
        return cy.get(this.ADIDAS_YEEZY_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getJordan1LowAddFromShoppingCarButton(){
        return cy.get(this.JORDAN_1_LOW_ADD_FROM_SHOPPING_CAR_BUTTON)
    }

    getNikeAir96RemoveFromShoppingCarButton(){
        return cy.get(this.NIKE_AIR_96_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getAirForce1RemoveFromShoppingCarButton(){
        return cy.get(this.AIR_FORCE_1_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getJordanRacerRemoveFromShoppingCarButton(){
        return cy.get(this.JORDAN_RACER_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getAirJordan11RemoveFromShoppingCarButton(){
        return cy.get(this.AIR_JORDAN_11_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getAirJordan1RemoveFromShoppingCarButton(){
        return cy.get(this.AIR_JORDAN_1_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getJordanRetro4RemoveFromShoppingCarButton(){
        return cy.get(this.JORDAN_RETRO_4_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getAdidasYeezyRemoveFromShoppingCarButton(){
        return cy.get(this.ADIDAS_YEEZY_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

    getJordan1LowRemoveFromShoppingCarButton(){
        return cy.get(this.JORDAN_1_LOW_REMOVE_FROM_SHOPPING_CAR_BUTTON)
    }

}