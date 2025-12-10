describe('Testing qauto site for sdudy', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/',  {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      }},)
  })

  it('Find all buttons from hero section', () => {
    cy.get('.hero-descriptor').find('.btn')
  })

  it('Find all links and btn from footer', () => {
    cy.get('.contacts_socials').find('a')
    cy.get('#contactsSection').find('.contacts_link')
  })
})