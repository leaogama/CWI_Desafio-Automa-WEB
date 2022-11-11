//// <reference types="cypress" />
export class MyAccount {

    //urlMyAccount = 'customer/account'

    acessar() {
        //cy.visit(this.urlMyAccount)
        cy.get('.items > :nth-child(1) > a').should('be.visible').should('have.text', 'My Account').click()
    }
    botaoEditEndCobrancaPadrao(){
        cy.contains('.box-billing-address span','Edit Address').should('be.visible').click()
    }
}
export default MyAccount