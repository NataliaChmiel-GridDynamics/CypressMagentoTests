import { accountUserCredentials } from "./generatingCredentials";
import { shareWishlistCredentials } from "./generatingCredentials";

describe("Should share wishlist.", () => {
	it("Share wishlist.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.get("ul.header a").contains("Sign In").click();
		cy.get('[data-ui-id="page-title-wrapper"]').contains(
			"Customer Login"
		);

		//Log in with user credentials
		cy.get("#email").type(accountUserCredentials.emailUser);
		cy.get("#pass").type(accountUserCredentials.passwordUser);
		cy.get("button.login span").contains("Sign In").click();
		cy.get(".logged-in")
			.contains(
				`Welcome, ${accountUserCredentials.firstNameUser} ${accountUserCredentials.lastNameUser}!`
			)
			.click();

		//Add products to wishlist from home page
		cy.contains("span", "Add to Wish List").click({ force: true });
		cy.get("div.message-success").should(
			"include.text",
			"has been added to your Wish List"
		);
		cy.url().should("include", "/wishlist");

		//Share wishlist
		cy.get("span").contains("Share Wish List").click();
		cy.get("#email_address").type(
			shareWishlistCredentials.emailAddress
		);
		cy.get("#message").type(shareWishlistCredentials.message);
		cy.get("span").contains("Share Wish List").click();
	});
});
