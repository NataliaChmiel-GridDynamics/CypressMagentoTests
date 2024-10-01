describe("Should filter items.", () => {
	it("Filter items.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Go to backpacks section
		cy.visit(
			"https://magento.softwaretestingboard.com/gear/bags.html?style_bags=24"
		);

		//Check if all items are backpacks
		cy.filterItemsToBackpacks();
	});
});
