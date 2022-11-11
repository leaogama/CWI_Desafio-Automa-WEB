//Ativar TypeScript Cypress
/// <reference types="cypress" />

class HomePage {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // baseUrl : 'https://magento.softwaretestingboard.com/'

    urlCriarUmaConta = 'customer/account/create/'
    selectBtnCriarUmaConta = '.header a'
    textoBtnCriarUmaConta = 'Create an Account'

    acessar() {
        cy.visit('')
    }

    clickBtnCriarUmaConta() {
        cy.url().should('be.equal', `${Cypress.config("baseUrl")}`)
        cy.contains(this.selectBtnCriarUmaConta, this.textoBtnCriarUmaConta).should('be.visible').click();
        cy.url().should('include', this.urlCriarUmaConta)
    }
}
export default HomePage