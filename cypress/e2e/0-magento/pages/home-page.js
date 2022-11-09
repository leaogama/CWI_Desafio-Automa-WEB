//// <reference types="cypress" />
export class HomePage {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // url = 'https://magento.softwaretestingboard.com'
  //  urlCriarUmUsuario = "customer/account/create/"

    acessar() {
        cy.visit('')
    }

    criarUmUsuario(primeiroNome, ultimoNome, email, senha) {
       // cy.url().should('be.equal',`${Cypress.config("baseUrl")}`)
        cy.get('.panel > .header > :nth-child(3) > a').should('have.text', 'Create an Account').click();
       
        cy.get('#firstname').type(primeiroNome);
        cy.get('#lastname').type(ultimoNome);
        cy.get('#email_address').type(email);
        cy.get('#password').type(senha);
        cy.get('#password-confirmation').type(senha);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('.message-success').should('contain.text', 'Thank you for registering with Fake Online Clothing Store.');
    }
}
export default HomePage