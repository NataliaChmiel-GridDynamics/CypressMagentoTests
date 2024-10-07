import { shareWishlistCredentials } from "./generatingCredentials";

describe("Should share wishlist.", () => {
	it("Share wishlist.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Add products to wishlist from home page
		cy.addProductsToWishlist();

		//Share wishlist
		cy.get("span").contains("Share Wish List").click();
		cy.get("#email_address").type(
			shareWishlistCredentials.emailAddress
		);
		cy.get("#message").type(shareWishlistCredentials.message);
		cy.get("span").contains("Share Wish List").click();
	});
});
