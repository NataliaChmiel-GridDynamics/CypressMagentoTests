import { accountUserCredentials } from "./generatingCredentials";
import { shareWishlistCredentials } from "./generatingCredentials";

describe("Should filter items.", () => {
	it("Filter items.", () => {
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

		//Go to backpacks section
		cy.visit(
			"https://magento.softwaretestingboard.com/gear/bags.html?style_bags=24"
		);

        //Check if all items are backpacks
		cy.get('[class="products list items product-items"]').each(
			($item) => {
				cy.wrap($item).should("contain.text", "Backpack");
			}
		);
	});
});
