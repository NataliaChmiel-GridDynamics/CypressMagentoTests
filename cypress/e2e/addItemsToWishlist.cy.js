import { accountUserCredentials } from "./generatingCredentials";

describe("Should add products to wishlist.", () => {
	it("Add products to wishlist.", () => {
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
	});
});
