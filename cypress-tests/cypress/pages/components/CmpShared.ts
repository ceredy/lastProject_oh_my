export default new class CmpShared {

   cmpShLoginRoll: any = () => { return cy.get('a[id="linkLoginForm"]') }
   cmpShLoginAlreadyLogedRoll: any = () => { return cy.get('a[class="link-my-profile"]') }
   cmpShLoginInputUsername: any = () => { return cy.get('input[name="logEmail"]') }
   cmpShLoginInputPassword: any = () => { return cy.get('input[name="logPass"]') }
   cmpShLoginSubmitButton: any = () => { return cy.get('input[name="logAdd"]') }
   cmpShLoginLogedUserNameRoll: any = () => { return cy.get('div[class="title"]').find('span') }


   cmpShFavorites: any = () => { return cy.get('a[class="favorites-toggle link active"]') }
   cmpShFavoritesCounter: any = () => { return cy.get('section#CommodityFavoritesBar strong.count > span')}
   cmpShBasket: any = () => { return cy.get('div[id="basketBoxLite"]') }
   cmpShBasketItemCounter: any = () => { return cy.get('span[class="basketBoxLiteItemCount"]').first() } 

   cmpShSearch: any = () => { return cy.get('input[id="searchId"]') }
   cmpShAutoCompleteList: any = () => { return cy.get('div[class="luigi-ac-item-wrapper"]').find('a[data-result-id]') }

   cmpShNavHome: any = () => { return cy.get('a[class="link-home"]') }
   cmpShNavPsi: any = () => { return cy.get('a[href="/chovatelske-potreby-pro-psy/"]') }
   cmpShNavKocky: any = () => { return cy.get('a[href="/chovatelske-potreby-pro-kocky/"]') }
   cmpShNavOstatni: any = () => { return cy.get('a[href="/ostatni-zvirata/"]') }
   cmpShNavDiety: any = () => { return cy.get('a[href="/veterinarni-diety/"]') }





}
