/// <reference types='cypress' />

import { commonElements } from '../page_object/common_elements'

describe('CRUD flow', () => {
    beforeEach(() => {
        cy.visit('login');
        // commonElements.emailInputFieldLogin.type('dora12@test.com')
        // commonElements.passwordInputFieldLogin.type('12345678');
        commonElements.loginUserFE(Cypress.env('existingUserEmail'), Cypress.env('validPassword'));
        commonElements.submitBtnLoginPage.click();
        commonElements.loginBtn.should('not.exist');
        // it('Register via APi - first name blank', () => {
        //     cy.loginViaApi('aaaa','asdas@masda.com');
        //     commonElements.ErrorAlert.should('have text', 'Bad Credentials')
        // commonElements.ErrorAlert.should('be.visible')
        //have.css background-color
       
        // })
    })

    it('Create new gallery',()=>{
        cy.get('a').contains('Create Gallery');
        cy.get('[href="/create"]').click();
        cy.get('#title').type("Dora galerija");
        cy.get('#description').type('Cat');
        cy.get('[type="url"]').type('https://upload.wikimedia.org/wikipedia/commons/4/49/Fz6n2005dnmb.jpg');
        cy.get('button').contains('Submit').click();
        cy.get('h1').should('have.text', 'All Galleries');
        cy.get(".box-title").first().should('contain', 'Dora galerija');
    })

   

    it('Edit Gallery', () => {
        cy.get(".box-title").eq(2).click();
        cy.get('a').contains('Edit Gallery').click();
        cy.get('#title').type(' editovano');
        cy.get('button').contains('Submit').click()
        // cy.get('#title').should('have.value', 'Moja prva galerija - 2');
        // cy.get('#description').should('have.value','Opis moje prve galerije');
        // cy.get('[type="url"]').should('have.value','https://upload.wikimedia.org/wikipedia/commons/4/49/Fz6n2005dnmb.jpg');

    })

    it('Delete Gallery',()=>{
        cy.get(".box-title").eq(2).click();
        cy.get('.btn').contains('Delete Gallery').click();
    })

})