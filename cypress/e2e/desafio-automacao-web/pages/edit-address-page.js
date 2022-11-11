//// <reference types="cypress" />
export class EditAddressPage {

   

    cadastrarEndDeCobranca(
        telephone,
        street_1,
        street_2,
        city,
        country,
        region_id,
        zip
      ) {

        // NOVO ENDERECO USANDO O BOTAO DA PÁGINA
        
       
        // ENDEREÇO
        cy.get('#country').should('be.visible').select(country);
        cy.get('#telephone').should('be.visible').type(telephone);
        cy.get('#street_1').should('be.visible').type(street_1);
        cy.get('#street_2').should('be.visible').type(street_2);
        cy.get('#city').should('be.visible').type(city);
        cy.get('#region_id').should('be.visible').select(region_id);
        cy.get('#zip').should('be.visible').type(zip);
        cy.get('#form-validate button.action.save.primary').should('be.visible').click()
        cy.get('.message-success > div').should('have.text', 'You saved the address.')
    }
}
export default EditAddressPage