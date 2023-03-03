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

  it('Should laod with a background picture', () => {
    cy.get('.MovieDisplay').should('have.css', 'background-image')
  })

  it('Should load with All movies view', () => {
    cy.get('.links a').first().should('have.class', 'active')
  })

  it('Should display all movies', () => {
    cy.get('.Movie').should('have.length', 2)
    cy.get('.Movie').first().contains('Grave of the Fireflies')
    cy.get('.Movie').last().contains('My Neighbor Totoro')
    cy.get('.small-poster').should('be.visible')
  })

  it('Should be able to add a movie to your favorites list and then see it on your favorites list', () => {
    cy.get('.Movie').first().click()
    cy.get('button').first().click() 
    cy.get('.logo').click()
    cy.get('.links > a').eq(1).click()
    cy.get('.Movie').should('have.length', 1)
  })

  it('Should be able to add a movie to your watched list and then see it on your watched list and removed from your watch list', () => {
    cy.get('.Movie').first().click()
    cy.get('button').eq(1).click() 
    cy.get('.logo').click()
    cy.get('.links > a').eq(2).click()
    cy.get('.Movie').should('have.length', 1)
    cy.get('.links > a').eq(3).click()
    cy.get('.Movie').should('have.length', 1)
  })
})