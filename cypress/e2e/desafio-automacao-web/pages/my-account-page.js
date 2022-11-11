//Ativar TypeScript Cypress
/// <reference types="cypress" />

class MyAccount {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // baseUrl : 'https://magento.softwaretestingboard.com/'

    urlMyAccount = 'customer/account'
    selectBtnEditEndCobrancaPad = '.box-billing-address span'
    textoBtnEditEndCobrancaPad = 'Edit Address'

    acessarUrlMyAccount() {
        cy.visit(this.urlMyAccount)

    }

    clickBtnEditEndCobrancaPadrao() {
        cy.contains(this.selectBtnEditEndCobrancaPad, this.textoBtnEditEndCobrancaPad).should('be.visible').click()
    }
}
export default MyAccount