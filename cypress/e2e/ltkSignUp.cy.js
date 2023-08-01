

describe('User is able to log in', () => {
  
  beforeEach(() => {
    cy.clearCookies()
    cy.getCookies().should('be.empty')
    cy.visit('https://www.shopltk.com')
  })
  it('Goes to the home page of LTK', () => {
    cy.contains('LTK').should('be.visible')
    cy.get('h1').contains('Shop thousands of products tried and styled by real people.')
    
  })

  it('Goes to the Sign Up page', () => {
    cy.get('#app > div.v-application--wrap > header > div > div > a.v-btn--secondary.mr-5.text-right.v-btn.v-btn--outlined.v-btn--router.theme--light.elevation-0.v-size--small.primary--text')
      .click()
    cy.url().should('include', 'login')
    cy.contains('a','Log in')
    cy.contains('button', 'continue').should('be.disabled')
  })

  it('Signs up for an account', () => {
    cy.get('#app > div.v-application--wrap > header > div > div > a.v-btn--secondary.mr-5.text-right.v-btn.v-btn--outlined.v-btn--router.theme--light.elevation-0.v-size--small.primary--text')
      .click()
    cy.url().should('include', 'login')
    cy.contains('a','Log in')
    cy.contains('button', 'continue').should('be.disabled')
    cy.get('#input-15')
      .type('ikhepwfibojqsssqoh@cazlp.com')
    cy.contains('button', 'continue').click()
    cy.get('a').contains('Use another email').then($button => {
      if ($button.is(':visible')){}
    }).click()
    var randomNumber = (Math.random()).toString() 
    cy.log('HERE IS A RANDOM NUMBER LOOK: ' + randomNumber)
    var newEmail = `${randomNumber}${'ikhepwfibojqsssqoh@cazlp.com'}`

    cy.log('here is the new email:' + newEmail)
    cy.get('#input-15')
      .type(newEmail)
    cy.contains('button', 'continue').click()
    cy.get('#input-34')
      .type('ANBCDEall111!')
    cy.contains('button', 'sign up to begin shopping').click()
    cy.url().should('include', 'home/for-you')

  })
})