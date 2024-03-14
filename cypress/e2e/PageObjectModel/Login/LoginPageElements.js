class Login {
   /**
    *
    * @returns the 'username' input field
    */
   getUsernameField() {
      return cy.get('input[name="username"]');
   }

   /**
    *
    * @returns the 'password' input field
    */
   getPasswordField() {
      return cy.get('input[name="password"]');
   }

   /**
    *
    * @returns the 'login' button
    */
   getLoginBtn() {
      return cy.get('button[type="submit"]');
   }

   getErrMsgBanner() {
      return cy.get('div#flash');
   }
}

export default Login;
