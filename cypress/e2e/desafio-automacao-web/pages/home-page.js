//// <reference types="cypress" />
class HomePage {
    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // baseUrl : 'https://magento.softwaretestingboard.com/'
  criarUmaConta = 'customer/account/create/'
    acessar () {
        cy.visit('')
    }

    botaoCriarUmaConta () {
        cy.url().should('be.equal', `${Cypress.config("baseUrl")}`)
        cy.contains('.header a', 'Create an Account').should('be.visible').click();
        cy.url().should('include', criarUmaConta)
    }
}
export default new HomePage()