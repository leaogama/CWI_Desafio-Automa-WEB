/// <reference types="cypress" />

import "cypress-localstorage-commands"

import HomePage from '../../pages/home-paje';
const homePage = new HomePage()
import NewAddress from '../../pages/new-address';
const newAddress = new NewAddress()
import MyAccount from '../../pages/my-account';
const myAccount = new MyAccount()
import LoginPage from "../../pages/login-page";
const loginPage = new LoginPage

// FAKER GERA DADOS FAKE
const faker = require('faker');
faker.locale = 'pt_BR';
const primeiroNome = faker.name.firstName();
const ultimoNome = faker.name.lastName();
const nome = primeiroNome + ' ' + ultimoNome;
const email = faker.internet.email(nome);
const senha = 'Aa!1Qq@2az'
// ENDERECO COM DADOS "PADRAO" 
// Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'
const telephone = '+5551999888777'
const street_1 = 'Rua Barão do Gravataí, 700'
const street_2 = 'Bairro Menino Deus'
const city = 'Porto Alegre'
const country = 'Brazil'
const region_id = 'Rio Grande do Sul'
const zip = '90050-330'


// cy.visit('');
describe('DESAFIO CWI', () => {

  beforeEach(() => {
    cy.viewport(1280, 1280)
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });


  it('Acessar a página inicial da loja.', () => {
    // REGRA : Acessar a página inicial da loja
    homePage.acessar()
  })


  it('Cadastrar um usuário.', () => {
    // REGRA : Realizar o cadastro do usuário atráves do link 'Create an Account'
    homePage.acessar()
    homePage.criarUmUsuario(primeiroNome, ultimoNome, email, senha)
    // console.clear()
    // console.log(nome)
    // console.log(email)
  });


  it('Cadastrar endereço de cobrança.', () => {
    // REGRA: Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'

    //homePage.acessar()
    //loginPage.logar(email, senha)
    cy.get('.box-billing-address > .box-actions > .action > span').click();
    loginPage.logar(email, senha)
    newAddress.deCobranca(
      telephone,
      street_1,
      street_2,
      city,
      country,
      region_id,
      zip
    )
  })

  it('Exibir tela de "My Account".', () => {
    // REGRA : Finalizar na tela de 'My Account'
    myAccount.acessar()
    loginPage.logar(email, senha)
  });
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