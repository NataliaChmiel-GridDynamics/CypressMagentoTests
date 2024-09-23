// import { accountCredentials } from "../e2e/generatingCredentials";

// Cypress.Commands.add("createNewAccount", () => {
//   cy.get("ul.header a").contains("Create an Account").click();
//   cy.get('[data-ui-id="page-title-wrapper"]').contains(
//     "Create New Customer Account"
//   );

//   //Fill in sign in form
//   cy.get("#firstname").type(accountCredentials.firstName);
//   cy.get("#lastname").type(accountCredentials.lastName);
//   cy.get("#email_address").type(accountCredentials.email);
//   cy.get("#password").type(accountCredentials.password);
//   cy.get("#password-confirmation").type(accountCredentials.password);
//   cy.get("button").contains("Create an Account").click();

//   cy.get('[data-ui-id="page-title-wrapper"]').contains("My Account");
// });
