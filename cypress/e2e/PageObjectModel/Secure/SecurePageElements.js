class Secure {
   /**
    *
    * @returns the 'logout' link on the /secure page
    */
   getLogOut() {
      return cy.get('a.button[href="/logout"]');
   }
}

export default Secure;
