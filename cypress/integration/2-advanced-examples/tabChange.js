///<reference types="cypress" />

describe('new tab open', function(){

it.only('Now remove target',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //remove target attribute
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('includes','index')
    cy.go('back')


})

})