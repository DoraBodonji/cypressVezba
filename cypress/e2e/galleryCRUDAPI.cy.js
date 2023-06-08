/// <reference types='cypress' />
import { commands } from '../support/commands'
import { commonElements } from '../page_object/common_elements'

describe('Gallery CRUD via API', () => {
    before(()=>{
        // cy.clearAllCookies()
        // cy.clearAllLocalStorage()
        // cy.clearAllSessionStorage
        // cy.visit('')
        // cy.url().should('include','gallery-app')
        // cy.visit('create')
        cy.loginViaApi();
    })


    // it('loginViaApi', () => {
    //     cy.loginViaApi();
        
    // })

    


    // it('registerUserViaApi',() => {
    //     cy.registerUserViaApi('Test', 'Test', 'test0991@test.com', '12345678', '12345678')
    // })


    it('CreateViaApi',()=>{
        cy.CreateViaApi()
    })

    it('visit homepage', () => {
        cy.visit('')
    })
})