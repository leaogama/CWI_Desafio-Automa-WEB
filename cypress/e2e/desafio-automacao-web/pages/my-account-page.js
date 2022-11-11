//// <reference types="cypress" />
export class MyAccount {

    //urlMyAccount = 'customer/account'

    acessar() {
        //cy.visit(this.urlMyAccount)
        cy.get('.items > :nth-child(1) > a').should('have.text', 'My Account').click()
    }
}
export default MyAccount