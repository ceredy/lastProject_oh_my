/// <reference types="cypress" />
//import cypress = require("cypress")

import CmpShared from "../pages/components/CmpShared"
import Psi from "../pages/Psi"
import Kocky from "../pages/Kocky"
import Ostatni from "../pages/Ostatni"
import Diety from "../pages/Diety"
import Homepage from "../pages/Homepage"
import CmpProductDetail from "../pages/components/CmpProductDetail"
import Basket from "../pages/Basket"

describe('Pages validation', ()=> {

it('Visit each main page and validate navigation elements', () => {
cy.visit(Homepage.url)
cy.url().should('be.equal', Cypress.config('baseUrl') + Homepage.url)

cy.visit(Psi.url)
cy.url().should('be.equal', Cypress.config('baseUrl') + Psi.url)

cy.visit(Kocky.url)
cy.url().should('be.equal', Cypress.config('baseUrl') + Kocky.url)

cy.visit(Ostatni.url)
cy.url().should('be.equal', Cypress.config('baseUrl') + Ostatni.url)

cy.visit(Diety.url)
cy.url().should('be.equal', Cypress.config('baseUrl') + Diety.url)

});  

})