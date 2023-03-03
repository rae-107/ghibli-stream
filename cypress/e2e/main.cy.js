describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://studio-ghibli-films-api.herokuapp.com/api/', {fixture: 'movies.json'})
    cy.visit('http://localhost:3000/')
  })

  it('Should load with the logo', () => {
    cy.get('.logo').should('be.visible')
  })

  it('Should have 4 links with different movie views', () => {
    cy.get('.links > a').should('have.length', 4)  
  })

  it('Should load with All movies view', () => {
    cy.get('.links a').first().should('have.class', 'active')
  })
})