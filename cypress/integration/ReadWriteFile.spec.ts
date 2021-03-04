import { sample } from "cypress/types/lodash"

describe('Read Write File Demo', function(){
    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })


it('read file using fixture', function(){

    cy.fixture('example.json')
        .its('name').should('eq', 'cypress')
    cy.log(this.data.name)
    cy.log(this.data.email)    
})  

it('Read file using readfile cmd', function(){

    cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq', 'cypress')
})

it('Write file demo', function(){

    cy.writeFile('./sample.txt', 'Hello I am writing cypress test data')
    cy.writeFile('sample.txt','\nThis is intersting', {flag: 'a+'})
})
})