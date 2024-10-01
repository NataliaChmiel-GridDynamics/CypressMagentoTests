import { accountUserCredentials } from "./generatingCredentials";

describe("Should log in with User Credentials and log out successfully.", () => {
	it("Log in and log out successfully.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Log out
		cy.logOut();
	});
});
