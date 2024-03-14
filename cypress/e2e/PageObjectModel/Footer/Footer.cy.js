import Footer from './FooterPageElements.js';
const footer = new Footer();

describe('Given a user has visited the Practice website', () => {
   before('Visit Login Page', () => {
      cy.visit('/login');
   });

   context('When the user views the Footer information', () => {
      it('Then the Footer shall contain a title', () => {
         footer.getFooter().within(() => {
            cy.get('h4').should(
               'contain.text',
               'Automation Testing Practice Website'
            );
         });
      });

      it('Then the Footer shall contain text specific to a version and copyright', () => {
         footer.getFooter().within(() => {
            cy.get('p').should('contain.text', 'Version: b1e49823 | Copyright');
         });
      });
   });
});
