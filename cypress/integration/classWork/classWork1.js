
import RegistrationPage from "../../Registration1/RegistrationPage.spec"

describe("Registration", () => {
    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com/')
    });
    
      //Test if user can register in "demo.nopcommerce" with valid data
          it("Register in demo.nopcommerce with valid data", () =>{
           cy.get('.ico-register').click().should('have.text', "Register" )
           RegistrationPage.typeFirstName("Tesvan");
           RegistrationPage.typeLastName("LLC");

          });
        });
        

