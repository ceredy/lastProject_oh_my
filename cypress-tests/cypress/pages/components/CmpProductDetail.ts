export default new class ProductComponents {

   
pdAddToBasket: any = () => { return cy.get('button[name="addbasket"]').eq(0).click() }
pdAddToFavourites: any = () => { return cy.get('a[data-lb-action="Do oblíbených"]').eq(1).click({force:true})  }
pdAmountCounterIncreaseTo: any = (kolik) => { 
    cy.get('input[class="inp_count stepper-input spinbutton"]').clear().type(kolik)
}

pdPopContinueShoping: any = () => { return cy.contains('button', 'Pokračovat v nákupu').click() }
pdPopShowBasket: any = () => { return cy.get('a[id="ctl00_btnLinkToBasket"]').click(); }

}


