///<reference types="cypress" />

describe('new tab open', function () {

    it('tab not gonna open', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()
        
        cy.on('window:alert', (str) => {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')


        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')


        })


    })


})