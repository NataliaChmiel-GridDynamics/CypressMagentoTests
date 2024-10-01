import { accountUserCredentials } from "./generatingCredentials";

describe("Should add products to cart.", () => {
	it("Add products to cart.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Add products to cart from home page
		cy.contains("span", "Add to Cart").eq(0).click({ force: true });
		cy.get("#option-label-size-143-item-167").click();
		cy.get("#option-label-color-93-item-56").click();
		cy.get("#product-addtocart-button").click();
		cy.get("div").contains("You added Radiant Tee to your");
		cy.get(".counter-number").should("exist");

		//Go to checkout
		cy.goToCheckout();

		//Checkout process
		cy.get("span").contains("Ship Here").click();
		cy.get('[value="tablerate_bestway"]').click();
		cy.get("span").contains("Next").click();
		cy.get("#billing-address-same-as-shipping-checkmo").click();
		cy.get("span").contains("Place Order").click();
		cy.get("span").contains("Thank you for your purchase!");
		cy.get("span").contains("Continue Shopping").click();
	});
});

