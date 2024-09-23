import { accountUserCredentials } from "./generatingCredentials";


describe("Should create account with User Credentials and log out successfully.", () => {
  it("Creates account and log out successfully.", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.get('ul.header a').contains('Create an Account').click();
    cy.get('[data-ui-id="page-title-wrapper"]').contains('Create New Customer Account');

    //Fill in sign in form
    cy.get('#firstname').type(accountUserCredentials.firstNameUser);
    cy.get('#lastname').type(accountUserCredentials.lastNameUser);
    cy.get('#email_address').type(accountUserCredentials.emailUser);
    cy.get('#password').type(accountUserCredentials.passwordUser);
    cy.get('#password-confirmation').type(accountUserCredentials.confirmPasswordUser);
    cy.get('button').contains('Create an Account').click();
    cy.get('[data-ui-id="page-title-wrapper"]').contains('My Account');

    //Log out
    cy.get('[data-toggle="dropdown"]').click({ multiple: true, force: true });
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/customer/account/logout/"]'
    ).click({ force: true, multiple: true });
  });
});
