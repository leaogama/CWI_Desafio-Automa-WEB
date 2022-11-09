export class LoginPage {


    //https://magento.softwaretestingboard.com/customer/account/login

    logar(email, senha) {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type(email)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(senha)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }


}

export default LoginPage