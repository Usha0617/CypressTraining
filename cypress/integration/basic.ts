/// <reference types = "cypress" />

it('Demo Test',function(){
    cy.log('Working Fine')
})

it('AssertionValidation Demo',function(){
    cy.visit("https://example.cypress.io/");
    cy.contains('get').click();
    cy.get('#query-btn').should('contain','Button')
    .should('have.class','query-btn')
    .should('be.visible')
    .should('be.enabled');

    
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')

    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn')

        expect(true).to.be.true

    let name = 'cypress'
    expect(name).to.be.equal('cypress')

    assert.equal(44,44,'Not Equal')
})