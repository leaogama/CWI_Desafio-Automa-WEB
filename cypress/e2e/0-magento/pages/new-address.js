//// <reference types="cypress" />
export class NewAddress {

   // url = 'https://magento.softwaretestingboard.com'

    deCobranca(
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
        cy.get('#country').select(country);
        cy.get('#telephone').type(telephone);
        cy.get('#street_1').type(street_1);
        cy.get('#street_2').type(street_2);
        cy.get('#city').type(city);
        cy.get('#region_id').select(region_id);
        cy.get('#zip').type(zip);
        cy.get('#form-validate button.action.save.primary').click()
        cy.get('.message-success > div').should('have.text', 'You saved the address.')
    }
}
export default NewAddress