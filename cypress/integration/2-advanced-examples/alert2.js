///<reference types="cypress" />

describe('alert Man', function () {

    it('alert practice', function () {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        //Alert
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str) => {

            expect(str).to.equal('I am a JS Alert')
        })

        //Confirm
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {

            expect(str).to.equal('I am a JS Confirm')

        })

        //Promt
        cy.window().then(function(win) {
        cy.stub(win, 'prompt').returns('This is Rounak');
        cy.contains('Click for JS Prompt').click() 
        cy.get('#result').should('contain','This is Rounak')

        })

    })





})