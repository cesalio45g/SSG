import LoginPageElements from './LoginPageElements.js';
const login = new LoginPageElements();
import LoginPageActions from './LoginPageActions.js';
const loginAction = new LoginPageActions();
import SecureActions from '../Secure/SecurePageActions.js';
const secureAction = new SecureActions();

describe('Given a user visits the Practice Login page', () => {
   beforeEach('Visit Login Page', () => {
      cy.then(Cypress.session.clearCurrentSessionData);
      cy.visit('/login');
   });

   // Functional Login Test
   context('When a user enters valid login credentials', () => {
      it('Then a user shall be able to login', () => {
         loginAction.enterUsername(Cypress.env('USERNAME'));
         loginAction.enterPassword(Cypress.env('PASSWORD'), { log: false });
         loginAction.clickLogin();
         cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/secure');
         });
         secureAction.clickLogout();
         // optional check
         cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/login');
         });
      });
   });

   // Negative Login Test
   context('When a user enters invalid username credentials', () => {
      it('Then an invalid username message shall appear', () => {
         loginAction.enterUsername('dummyUsername');
         loginAction.enterPassword(Cypress.env('PASSWORD'), { log: false });
         loginAction.clickLogin();
         cy.location().should((loc) => {
            expect(loc.pathname).not.to.eq('/secure');
         });
         login
            .getErrMsgBanner()
            .should('contain.text', 'Your username is invalid!');
      });
   });

   // Negative Login Test
   context('When a user enters invalid password credentials', () => {
      it('Then an invalid password message shall appear', () => {
         loginAction.enterUsername(Cypress.env('USERNAME'));
         loginAction.enterPassword('dummyPassword');
         loginAction.clickLogin();
         cy.location().should((loc) => {
            expect(loc.pathname).not.to.eq('/secure');
         });
         login
            .getErrMsgBanner()
            .should('contain.text', 'Your password is invalid!');
      });
   });
});
