import { accountFakerCredentials } from "./generatingCredentials";
// import "../support/commands;";

describe("Should create account with Faker Credentials.", () => {
  it("Creates account and logs out successfully.", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.get('ul.header a').contains('Create an Account').click();
    cy.get('[data-ui-id="page-title-wrapper"]').contains('Create New Customer Account');

    //Fill in sign in form
    cy.get('#firstname').type(accountFakerCredentials.firstName);
    cy.get('#lastname').type(accountFakerCredentials.lastName);
    cy.get('#email_address').type(accountFakerCredentials.email);
    cy.get('#password').type(accountFakerCredentials.password);
    cy.get('#password-confirmation').type(accountFakerCredentials.password);
    cy.get('button').contains('Create an Account').click();
    cy.get('[data-ui-id="page-title-wrapper"]').contains('My Account');

    //Log out
    cy.get('[data-toggle="dropdown"]').click({ multiple: true, force: true });
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/customer/account/logout/"]'
    ).click({ force: true, multiple: true });
  });
});
