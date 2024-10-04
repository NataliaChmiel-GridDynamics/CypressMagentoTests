import { accountUserCredentials } from "./generatingCredentials";

describe("Should add products to cart.", () => {
	it("Add products to cart.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Add products to cart from home page
		cy.get(".product-items").within(() => {
			cy.contains("span", "Add to Cart")
				.first()
				.click({ force: true });
		});

		cy.get(".product-add-form").within(() => {
			cy.get("#option-label-size-143-item-167").click();
			cy.get("#option-label-color-93-item-56").click();
			cy.get("#product-addtocart-button").click();
		});

		cy.get("div").contains("You added Radiant Tee to your");
		cy.get(".counter-number").should("exist");

		//Go to checkout
		cy.goToCheckout();
	});
});
