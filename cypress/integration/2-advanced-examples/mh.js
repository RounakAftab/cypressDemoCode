///<reference types="cypress" />

describe('mouse hover concept', function(){

it('test mouse hover', function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})



})




})