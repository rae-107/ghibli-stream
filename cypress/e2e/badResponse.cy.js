describe('Bad Response', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://studio-ghibli-films-api.herokuapp.com/api', {statusCode: 500, body: 'Something wrong with the server'})
    cy.visit('http://localhost:3000/')
  })

  it('Should display error message if there is a bad network response', () => {
    cy.get('h2').contains('Oh no! Something went wrong with the server. Please try again!')
  })
})