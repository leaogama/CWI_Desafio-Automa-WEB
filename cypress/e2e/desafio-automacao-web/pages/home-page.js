//// <reference types="cypress" />
export class HomePage {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // url = 'https://magento.softwaretestingboard.com'
  //  urlCriarUmUsuario = "customer/account/create/"

    acessar() {
        cy.visit('')
    }

    irPaginaCriarUmaConta() {
       // cy.url().should('be.equal',`${Cypress.config("baseUrl")}`)
        cy.contains('.header a','Create an Account').should('be.visible').click();
       
    }
}
export default HomePage