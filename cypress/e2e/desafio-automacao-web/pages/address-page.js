//Ativar TypeScript Cypress
/// <reference types="cypress" />

class AddressPage {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // baseUrl : 'https://magento.softwaretestingboard.com/'

    urlAddressPage = 'customer/addres/'
    selectclickBtnMyAccount = '.items a'
    textoclickBtnMyAccount = 'My Account'
    selectPaginaCorreta = '.logged-in'

    clickBtnMyAccount() {
        //cy.url().should('include', this.urlAddressPage)
        cy.get(this.selectPaginaCorreta).should('be.visible')
        cy.contains(this.selectclickBtnMyAccount, this.textoclickBtnMyAccount).should('be.visible').click();
    }
}
export default AddressPage