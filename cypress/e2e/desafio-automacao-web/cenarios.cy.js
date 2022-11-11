//Ativar TypeScript Cypress
/// <reference types="cypress" />  

//IMPORTS
import { faker } from '@faker-js/faker';
import HomePage from "./pages/home-page";
import CreateAccountPage from "./pages/create-account-page";
import EditAddressPage from "./pages/edit-address-page";
import MyAccountPage from "./pages/my-account-page";

const homePage = new HomePage();
const createAccountPage = new CreateAccountPage();
const editAddressPage = new EditAddressPage();
const myAccountPage = new MyAccountPage();

// GERANDO UMA CONTA FALSA (RANDOMICA) com a lib. faker. link:https://github.com/faker-js/faker
faker.locale = 'pt_BR';
const primeiroNome = faker.name.firstName()
const ultimoNome = faker.name.lastName();
const email = faker.internet.email(primeiroNome, ultimoNome) + faker.internet.password(8, /[1-9]/);
const senha = 'Aa!1Qq@2az' + faker.internet.password(4)

// GERANDO ENDEREÇO FALSO COM DADOS "PADRAO" Regra: "Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'"
const country = 'Brazil'
const region_id = faker.address.state()
const city = faker.address.cityName('BR')
const street_1 = "Rua " + faker.address.street() + ', ' + faker.random.numeric(4)
const street_2 = "Apt. " + faker.random.numeric(2)
const telephone = faker.phone.number('+55 ## 9########')
const zip = faker.address.zipCode()

// CENÁRIO DE TESTE: Cadastro de usuário com endereço de cobrança.
describe('DESAFIO CWI', () => {

  /* CASO DE TESTE: Acessar a página inicial da loja
      Realizar o cadastro do usuário atráves do link 'Create an Account'
      Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'
      Finalizar na tela de 'My Account' */

  it('Acessar a página inicial da loja e cadastrar um usuário e endereço padrão de cobrança e exibir tela "My Account".', () => {
    // Define resolução de tela.
    cy.viewport(1280, 1200)
    // REGRA : Acessar a página inicial da loja
    homePage.acessar()
    // REGRA : Realizar o cadastro do usuário atráves do link 'Create an Account'
    homePage.botaoCriarUmaConta()
    createAccountPage.cadastrarNovaConta(
      primeiroNome,
      ultimoNome,
      email,
      senha)

    // homePage.criarUmUsuario(primeiroNome, ultimoNome, email, senha)
    // REGRA: Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'
    myAccountPage.botaoEditEndCobrancaPadrao()
    editAddressPage.cadastrarEndDeCobranca(
      telephone,
      street_1,
      street_2,
      city,
      country,
      region_id,
      zip
    )
    // REGRA : Finalizar na tela de 'My Account'
    myAccountPage.acessar()
    //loginPage.logar(email, senha)

  })
})



    //cy.get('.items > :nth-child(1) > a').should('have.text', 'My Account')
    // cy.get('.panel > .header > :nth-child(3) > a').should('have.text', 'Create an Account').click();
    // cy.get('#firstname').type(primeiroNome);
    // cy.get('#lastname').type(ultimoNome);
    // cy.get('#email_address').type(email);
    // cy.get('#password').type('Aa!1Qq@2az');
    // cy.get('#password-confirmation').type('Aa!1Qq@2az');
    // cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();

    // cy.get('.message-success').should('contain.text', 'Thank you for registering with Fake Online Clothing Store.');
    // cy.get('.box-billing-address > .box-actions > .action > span').click();
    // // ENDEREÇO
    // cy.get('#telephone').type('+5551999888777');
    // cy.get('#street_1').type('Rua Barão do Gravataí, 700');
    // cy.get('#street_2').type('Bairro Menino Deus');
    // cy.get('#city').type('Porto Alegre');
    // cy.get('#country').select('BR');
    // cy.get('#region_id').select('504');
    // cy.get('#zip').type('90050-330');
    // cy.get('#form-validate button.action.save.primary').click()
    // cy.get('.message-success > div').should('have.text', 'You saved the address.')
/*
O cenário deve:

      Acessar a página inicial da loja
      Realizar o cadastro do usuário atráves do link 'Create an Account'
      Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'
      Finalizar na tela de 'My Account'

Depois de finalizar, envie o projeto em um arquivo zip nesta tarefa.


eCommerce - https://magento.softwaretestingboard.com/
OrangeHRM - https://ohrm.softwaretestingboard.com/
Credentials(username\password)
recruiter_one\r1@123
recruiter_two\r2@123
recruiter_three\r3@123
recruiter_four\r4@123

*/