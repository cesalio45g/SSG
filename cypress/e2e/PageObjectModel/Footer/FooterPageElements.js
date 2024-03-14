class Footer {
   /**
    *
    * @returns The Footer container (there are 2 elements within)
    */
   getFooter() {
      return cy.get('footer div.container');
   }
}
export default Footer;
