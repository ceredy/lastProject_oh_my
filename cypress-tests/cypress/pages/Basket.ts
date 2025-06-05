export default new class BasketPage {

url:string = '/basket-1/'
url2:string = '/basket-2/'
url3:string = '/basket-3/'

   
   bsk1ItemTableDelete:any = () => {
      cy.get('td.delete button[name="delete"]').first().click()
      cy.wait(1000)
      cy.get('button[class="confirm yes btn btn-red"]').click()
   }
   bsk1PackagingPayementContinueBtn:any = () => {return cy.get (`a[href="${this.url2}"]`).eq(0)}
   bsk2TransportPosta:any = () => {return cy.get ('input[id="DelSub1027"]')}
   bsk2PaymentCardOnline:any = () => {return cy.get ('input[id="PaySub26"]')}
   bsk2AdressDetailsContinueBtn:any = () => {return cy.get (`a[href="${this.url3}"]`).eq(0)}
   bsk3FormFirstName:any = () => {return cy.get ('input[name="sFirstName"]')}
   bsk3FormLastName:any = () => {return cy.get ('input[name="sFirstName"]')}
   bsk3FormEmail:any = () => {return cy.get ('span[class="value require showb2c showb2b"]')}
   bsk3FormTelephone:any = () => {return cy.get ('input[name="sPhone"]')}
   bsk3FormStreet:any = () => {return cy.get ('input[name="sStreet"]')}
   bsk3FormCity:any = () => {return cy.get ('input[name="sCity"]')}
   bsk3FormZipCode:any = () => {return cy.get ('input[name="sZipCode"]')}
   bsk3FormCountrySelect:any = () => {return cy.get ('select[name="fkTblCountry"]')}
   bsk3FormNote:any = () => {return cy.get ('textarea[name="sInfo"]')}




}