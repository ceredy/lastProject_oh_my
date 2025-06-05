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


describe('Login tests on home page', () => {
  const kolikKockolitu = 1
  const kolikGranule = 1
  const userCredentials = Cypress.env('userinfo_valid')
  const textToSearch1 = 'calibra eaz'
  const textToSearch2 = 'Brit Care Cat Grain-Free Large cats Power & Vitality 7 kg'
  const firstListProductName = 'Calibra Eazzy Cat podestýlka Fine SET 3x 10 kg'
  const secondListProductName = 'Calibra Eazzy Cat podestýlka Ultra Fine 10 kg'
  const thirdListProductName = 'Calibra Eazzy Cat podestýlka Ultra Fine SET 3x 10 kg'
  const thirdListProductUrl = 'https://www.spokojenypes.cz/calibra-eazzy-cat-podestylka-ultra-fine-set-3x-10-kg/'
  const granuleUrl = 'https://www.spokojenypes.cz/brit-care-cat-grain-free-large-cats-power-amp-vitality-7-kg/'
  const expectedProducts = [
    { name: textToSearch2, count: kolikGranule },
    { name: thirdListProductName, count: kolikKockolitu }
  ];

  beforeEach(() => {
    cy.validLogin();
  });

  it('Should login with valid credentials and assert user info', () => {

    CmpShared.cmpShLoginAlreadyLogedRoll().click()
    CmpShared.cmpShLoginLogedUserNameRoll().should('have.text', userCredentials)

  });

  it('Should assert products searching tool', () => {

    // Vpíše část názvu produktu
    CmpShared.cmpShSearch().clear().type(textToSearch1)
    //Assert
    // Měl by vrátit 4 produkty a ty musí odpovídat očekávání
    CmpShared.cmpShAutoCompleteList().should('have.length', 4)
    CmpShared.cmpShAutoCompleteList().eq(0).should('have.attr', 'data-autocomplete-value', firstListProductName)
    CmpShared.cmpShAutoCompleteList().eq(1).should('have.attr', 'data-autocomplete-value', secondListProductName)
    CmpShared.cmpShAutoCompleteList().eq(2).should('have.attr', 'data-autocomplete-value', thirdListProductName)

    // Vpíše celý název třetího produktu
    CmpShared.cmpShSearch().clear().type(thirdListProductName)
    //Assert
    // Ověří že se nyní vrací jen dva produkty a to jsou ty co hledáme
    CmpShared.cmpShAutoCompleteList().should('have.length', 2)
    CmpShared.cmpShAutoCompleteList().eq(0).should('have.attr', 'data-autocomplete-value', thirdListProductName)
    CmpShared.cmpShAutoCompleteList().eq(1).should('have.attr', 'data-autocomplete-value', firstListProductName)

  })


  it('Find 2 products assert URLs, like them, add them to cart, proceed to checkout', () => {

    CmpShared.cmpShSearch().clear().type(thirdListProductName)
    CmpShared.cmpShAutoCompleteList().eq(0).click()
    //Assert
    cy.url().should('be.equal', thirdListProductUrl)


    CmpProductDetail.pdAddToFavourites()
    CmpProductDetail.pdAmountCounterIncreaseTo(kolikKockolitu)
    CmpProductDetail.pdAddToBasket()
    CmpProductDetail.pdPopContinueShoping()
    //Assert
    CmpShared.cmpShBasketItemCounter().should('have.text', '1')
    //CmpShared.cmpShFavoritesCounter().should('have.text', "2")

    CmpShared.cmpShSearch().clear().type(textToSearch2)
    CmpShared.cmpShAutoCompleteList().eq(0).click()
    cy.url().should('be.equal', granuleUrl)
    cy.log(CmpProductDetail.pdAddToFavourites())
    CmpProductDetail.pdAddToFavourites()
    CmpProductDetail.pdAmountCounterIncreaseTo(kolikGranule)
    CmpProductDetail.pdAddToBasket()
    CmpProductDetail.pdPopShowBasket()

    Basket.bsk1PackagingPayementContinueBtn().click()
    Basket.bsk2TransportPosta().click()
    Basket.bsk2PaymentCardOnline().click()
    Basket.bsk2AdressDetailsContinueBtn().click()

  
 })



    /*expectedProducts.forEach(({ name, count }) => {
      cy.contains('table#basketItems_1 tbody tr', name)
        .find('input[name="count"]')
        .should('have.value', count);
    });*/



 

it('Should login with valid credentials, clear the basket and favorites', () => {

    CmpShared.cmpShBasket().click()
    Basket.bsk1ItemTableDelete()
    //Assert
    cy.get('div.confirm').should('not.exist')
    
    Basket.bsk1ItemTableDelete()

  });



})