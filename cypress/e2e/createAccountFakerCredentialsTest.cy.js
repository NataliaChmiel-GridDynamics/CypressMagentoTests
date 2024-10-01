import { accountFakerCredentials } from "./generatingCredentials";
// import "../support/commands;";

describe("Should create account with Faker Credentials.", () => {
	it("Creates account and logs out successfully.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Sign in with faker credentials
		cy.createNewAccountWithFakerCredentials();

		//Log out
		cy.logOut();
	});
});
