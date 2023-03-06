describe('Detail Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://studio-ghibli-films-api.herokuapp.com/api', {fixture: 'movies.json'})
    cy.visit('http://localhost:3000/')
    cy.get('.Movie').first().click()
  })

  it('Should load with poster image', () => {
    cy.get('.large-poster').should('be.visible')
  })

  it('Should display title', () => {
    cy.get('h1').contains('Grave of the Fireflies') 
  })

  it('Should display buttons', () => {
    cy.get('button').should('have.length', 2)
  })

  it('Should display all movie information',() => {
    cy.get('h2').first().contains('Genre: War | Drama')
    cy.get('h2').eq(1).contains('Release Date: April 16, 1988')
    cy.get('h2').eq(2).contains('Rating: Not Rated')
    cy.get('h2').eq(3).contains('Music: Michio Mamiya')
    cy.get('h2').eq(4).contains('Runtime: 1 hrs 29 mins')
    cy.get('h2').eq(5).contains('Box Office: $516,962')
    cy.get('h2').eq(6).contains('Rotten Tomatoes: 100%')
    cy.get('h2').eq(7).contains('IMDB: 8.5/10')
    cy.get('h2').eq(8).contains('Summary')
    cy.get('.synopsis').contains('A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.')
  })

  it('Should be able to get to main view by clicking on logo', () => {
    cy.get('.logo').click()
    cy.url('http://localhose:3000/')
  })

  it('Should be able to get home by clicking all movies display', () => {
    cy.get('.links > a').first().click()
    cy.url('http://localhose:3000/')
  })
})