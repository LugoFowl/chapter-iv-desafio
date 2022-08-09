/// <reference types = "Cypress"/>

var Chance = require('chance');
var chance = new Chance()
describe('Cadastro', () => {

    before(() => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
       
        cy.get('input[id = email_create]').type(chance.email())
        cy.get('button[id="SubmitCreate"]').click()
    })
    it('Quando eu informar os dados e finalizar, então o cadastro deverá ser efetuado com sucesso', () => {
        cy.get('input[id="id_gender1"]').check()
        var firstName = cy.get('input[id="customer_firstname"]').type(chance.first())
        var lastName = cy.get('input[id="customer_lastname"]').type(chance.last())
        cy.get('input[id="passwd"]').type(chance.string({ length: 5 }))
        cy.get('select[id="days"]').select(chance.integer({ min: 1, max: 31 }))
        cy.get('select[id="months"]').select(chance.integer({ min: 1 , max: 12}))
        cy.get('select[id="years"]').select('1987')
        cy.get('input[id="newsletter"]').check()
        cy.get('input[id="optin"]').check()

        cy.get('input[id="firstname"]').type(`${firstName}`)
        cy.get('input[id="lastname"]').type(`${lastName}`)
        cy.get('input[id="company"]').type(chance.company())
        cy.get('input[id="address1"]').type(chance.address())
        cy.get('input[id="city"]').type(chance.city())
        cy.get('select[id="id_state"]').select('California', {force : true})
        cy.get('input[id="postcode"]').type(chance.zip())
        cy.get('div[id="uniform-id_country"]').type('United States')
        cy.get('textarea[id="other"]').type(chance.string())
        cy.get('input[id="phone"]').type(chance.phone())
        cy.get('input[id="phone_mobile"]').type(chance.phone())
        cy.get('input[id="alias"]').type(chance.string())
        cy.get('button[id="submitAccount"]').click()

        cy.url('contain', 'my-account')

    })
})



