//Ativar TypeScript Cypress
/// <reference types="cypress" />

class EditAddressPage {

    // URL PADRAO FOI CADASTRADA EM CYPRESS.CONFIG.JS    
    // baseUrl : 'https://magento.softwaretestingboard.com/'



   inputCountry = '#country'
   inputTelephone = '#telephone'
   inputStreet_1 = '#street_1'
   inputStreet_2 '#street_2'
   inputStreet_3 '#street_3'
   inputCity = '#city'
   inputRegion_id = '#region_id'
   inputZip = '#zip'
   selectBtnFormSave =  '#form-validate button.action.save.primary'
   selectMessageSuccess = '.message-success > div'
   textoMessageSuccess = 'You saved the address.'




    cadastrarEndDeCobranca(
        telephone,
        street_1,
        street_2,
        street_3,
        city,
        country,
        region_id,
        zip
      ) {

        // NOVO ENDERECO USANDO O BOTAO DA PÁGINA
        
        cy.get(this.inputCountry).should('be.visible').select(country);
        cy.get(this.inputTelephone).should('be.visible').type(telephone);
        cy.get(this.inputStreet_1).should('be.visible').type(street_1);
        cy.get(this.inputStreet_2).should('be.visible').type(street_2);
        cy.get(this.inputStreet_3).should('be.visible').type(street_3);
        cy.get(this.inputCity).should('be.visible').type(city);
        cy.get(this.inputRegion_id).should('be.visible').select(region_id);
        cy.get(this.inputZip).should('be.visible').type(zip);
        cy.get(this.selectBtnFormSave).should('be.visible').click()
        cy.get(this.selectMessageSuccess).should('have.text', this.textoMessageSuccess)
    }
}
export default EditAddressPage