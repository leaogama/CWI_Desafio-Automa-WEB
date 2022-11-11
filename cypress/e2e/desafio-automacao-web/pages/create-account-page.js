//Ativar TypeScript Cypress
/// <reference types="cypress" />

class CreateAccountPage {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // baseUrl : 'https://magento.softwaretestingboard.com/'

    inputFirstName = '#firstname'
    inputLastNdne = '#lastname'
    inputEmail = '#email_address'
    inputPassword = '#password'
    inputPasswordConfirmation = '#password-confirmation'
    btnCreateAccount = '#form-validate > .actions-toolbar > div.primary > .action > span'
    selectSucessoCadastrarNovaConta = '.message-success'
    textoSucessoCadastrarNovaConta = 'Thank you for registering with Fake Online Clothing Store.'

    cadastrarNovaConta(primeiroNome, ultimoNome, email, senha) {


        cy.get(this.inputFirstName).type(primeiroNome);
        cy.get(this.inputLastNdne).type(ultimoNome);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputPassword).type(senha);
        cy.get(this.inputPasswordConfirmation).type(senha);
        cy.get(this.btnCreateAccount).click();
        cy.get(this.selectSucessoCadastrarNovaConta).should('contain.text', this.textoSucessoCadastrarNovaConta);
    }
}
export default CreateAccountPage