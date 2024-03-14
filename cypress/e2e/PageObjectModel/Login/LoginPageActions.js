import Login from './LoginPageElements.js';
const login = new Login();

class LoginActions {
   /**
    *
    * @param {string} username
    * clears the input field then enters the username parameter
    */
   enterUsername(username) {
      login.getUsernameField().clear().type(username);
   }

   /**
    *
    * @param {string} password
    * clears the input field then enters the password parameter
    */
   enterPassword(password) {
      login.getPasswordField().clear().type(password);
   }

   /**
    * clicks the login button, should be done after a username and password has been entered
    */
   clickLogin() {
      login.getLoginBtn().click();
   }
}

export default LoginActions;
