import Secure from './SecurePageElements.js';
const secure = new Secure();

class SecureActions {
   /**
    * clicks the logout link on the '/secure' page
    */
   clickLogout() {
      secure.getLogoutLink().click();
   }
}

export default SecureActions;
