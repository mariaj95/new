/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
//@ts-nocheck

//const navbarText = Cypress.env('navbarText');
// const token = 'abc123'

context('My First test', () => {
    beforeEach(() => {
        cy.visit('/commands/Actions')
    })

    it('triggers a popover on click', () =>{
        cy.get('.action-btn').click()
        cy.findByText('This popover shows up on click').should('be.visible')
    })

    it('can click on different sections of a canvas', () =>{
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('bottomRight')
        cy.get('#action-canvas').click(80, 100)
    })

    it('can double click to edit', () => {
        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('right click to edit', () =>{
        cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').should('be.visible')
    })

    it('shows the nav links on hover', () => {
        cy.get('.dropdown-toggle').trigger('mouseover')
        cy.get('.dropdown-menu').should('be.visible')
    })


    //     cy.fixture('example').then(function(data) {
    //         this.data = data
    //         cy.log('THIS: ', this.data)
    //     })
    // })

    // it('sets and gets a token from local storage', () =>{
    //     cy.setLocalStorage('token', token)
    //     cy.getLocalStorage('token').should('eq', token)
    // })

    // it('overwrites the type command by using sensisitive characters', () =>{
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test@email.com')
    //     cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true})
    // })




    // it('uses fixture data in a network call', function() {
    //     cy.visit('/commands/network-requests')
    //     cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    //     cy.get('.network-btn').click()
    //     cy.wait('@getComment').then((res) => {
    //         cy.log('RESPONSE: ', res)
    //     })
    // })

    // it('pulls data from a fixture', () => {
    //     cy.fixture('example').then((data) => {
    //         cy.log('DATA:', data)
    //     })
    // })

    // it('updates fixture data inline', () => {
    //     cy.fixture('example').then((data) => {
    //         data.email = 'updated@mail.com'
    //         cy.log('UPDATED:', data)
    //     })
    // })
    // before(() => {
    //   cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
    //  })
  
    // beforeEach(() => {
    //   cy.visit('/')
    // })
  
    // afterEach(() => {
    //   cy.log('after each hook is herer')
    // })
    
    // after(() => {
    //   cy.visit('/')
    // })
  
    // it('has an h1 on the page', () => {
    //   cy.get('h1').should('exist')
    // })
  
    // it('renders the correct h1 text', () => {
    //   cy.get('h1').should('contain.text', 'Kitchen Sink')
    // })
  
    // it('renders the correct h1 text', () => {
    //   cy.get('h1').should('contain.text', 'Actions');
    // });
  
    // it('Renders a paragraph under the h1', () => {
    //   cy.get('.container').eq(1).find('p').should('exist');
    // });
  
    // it('renders a section with the correct elements', () => {
    //   cy.get('.container').eq(2).within(() => {
    //     cy.get('h4').should('exist');
    //     cy.get('p').should('exist');
    //   });
    // });
  
    // it('correctly renders the cypress website link', () => {
    //   cy.findByText(navbarText).should('exist')
    // })
    // it('types into an email fied', () => {
    //   cy.visit('/commands/actions')
    //   cy.findByPlaceholderText('Email').type('test@email.com')
    //   cy.wait(2000)
    //   cy.request('https://api.spacexdata.com/v3/missions')
    //   .then((response) => {
    //     console.log(response.body)
    //   })
    // })
  
    // it('shows an active class for the current page', () => {
    //   cy.visit('/commands/actions')
    //   cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    // })
  
    // it('should not have an active class on inactive pages', () => {
    //   cy.visit('/commands/actions')
    //   cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active').find('a').should('have.attr', 'href', '/commands/querying')
    // })
  
    // it('links to the actions page correctly', () => {
    //   cy.visit('/')
    //   cy.findAllByText('Actions').first().click({ force: true})
    //   cy.url().should('include', 'commands/actions')
    // })
  
    // it('lets you type in an input field', () => {
    //   cy.visit('/commands/actions')
    //   cy.findByPlaceholderText('Email').type('test')
    //   cy.findByPlaceholderText('Email').should('have.value', 'test')
    // })
  
    // it('lets you clear an input field', () => {
    //   cy.visit('/commands/actions')
    //   cy.findAllByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
    //   .clear().should('have.value', '')
    //   //estamos usando assertives tambien y aqui llamamos una clase me parece. aqui primero buscamos
    //   // texxto pro label y luego typeamos algo y luego lo borramos. luego con el shoud.have lo que ahacemos es 
    //   // verificar que el valor del input este vacio
    // })
  
    // it('lets you check a checkbox', () => {
    //   cy.visit('/commands/actions')
    //   cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force: true})
    //   cy.get('.action-checkboxes [type="checkbox"]').eq(1).should('be.checked')
    //   //chequeamos la segunda box y usamos un force  
    // })
  
})
  