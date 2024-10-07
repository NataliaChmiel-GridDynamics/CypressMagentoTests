import { itemsReview } from "./generatingCredentials";

describe("Should create and add review of an item.", () => {
	it("Create and add review.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Go to a review page
		cy.get(".product-image-wrapper").first().click();
		cy.get("a").contains("Reviews").click();
		cy.get("span").contains(`You're reviewing`);

		//Create a review
		cy.get("#Rating_5_label").click({ force: true });
		cy.get("#summary_field").type(itemsReview.summary);
		cy.get("#review_field").type(itemsReview.review);
		cy.get("span").contains("Submit Review").click();
	});
});
