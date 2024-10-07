describe("Should create account with User Credentials and log out successfully.", () => {
	it("Creates account and log out successfully.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();
		cy.get('span').contains('Create an Account').click();


		//Fill in sign in form
		cy.createNewAccountWithUserCredentials();

		//Log out
		cy.logOut();
	});
});
