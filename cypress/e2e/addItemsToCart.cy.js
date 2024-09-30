import { accountUserCredentials } from "./generatingCredentials";

describe("Should add products to cart.", () => {
	it("Add products to cart.", () => {
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

		//Add products to cart from home page
		cy.contains("span", "Add to Cart").eq(0).click({ force: true });
		cy.get("#option-label-size-143-item-167").click();
		cy.get("#option-label-color-93-item-56").click();
		cy.get("#product-addtocart-button").click();
		cy.get("div").contains("You added Radiant Tee to your");
		cy.get(".counter-number").should("exist");

		//Go to checkout
		cy.get("span").contains("My Cart").click({ force: true });
		cy.get("#top-cart-btn-checkout").click();
		cy.url().should(
			"eq",
			"https://magento.softwaretestingboard.com/checkout/"
		);
	});
});
