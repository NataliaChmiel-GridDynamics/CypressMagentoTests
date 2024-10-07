describe("Should add products to wishlist.", () => {
	it("Add products to wishlist.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Add products to wishlist from home page
		cy.addProductsToWishlist();
	});
});
