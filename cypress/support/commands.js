import { accountUserCredentials } from "../e2e/generatingCredentials";
import { accountFakerCredentials } from "../e2e/generatingCredentials";

//Verify if home page is visible successfully
Cypress.Commands.add("isHomePageVisible", () => {
	cy.get("ul.header a").contains("Sign In").click();
	cy.get('[data-ui-id="page-title-wrapper"]').contains(
		"Customer Login"
	);
});

//Create account with user credentials
Cypress.Commands.add("createNewAccountWithUserCredentials", () => {
	cy.get("#firstname").type(accountUserCredentials.firstNameUser);
	cy.get("#lastname").type(accountUserCredentials.lastNameUser);
	cy.get("#email_address").type(accountUserCredentials.emailUser);
	cy.get("#password").type(accountUserCredentials.passwordUser);
	cy.get("#password-confirmation").type(
		accountUserCredentials.confirmPasswordUser
	);
	cy.get("button").contains("Create an Account").click();
	cy.get('[data-ui-id="page-title-wrapper"]').contains("My Account");
});

//Login with user credentials
Cypress.Commands.add("logInWithUserCredentials", () => {
	cy.get("#email").type(accountUserCredentials.emailUser);
	cy.get("#pass").type(accountUserCredentials.passwordUser);
	cy.get("button.login span").contains("Sign In").click();
	cy.get(".logged-in")
		.contains(
			`Welcome, ${accountUserCredentials.firstNameUser} ${accountUserCredentials.lastNameUser}!`
		)
		.click();
});

//Log out 
Cypress.Commands.add("logOut", () => {
	cy.get('[data-toggle="dropdown"]').click({ multiple: true, force: true });
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/customer/account/logout/"]'
    ).click({ force: true, multiple: true });
});

//Go to checkout
Cypress.Commands.add("goToCheckout", () => {
	cy.get("span").contains("My Cart").click({ force: true });
	cy.get("#top-cart-btn-checkout").click();
	cy.url().should(
		"eq",
		"https://magento.softwaretestingboard.com/checkout/"
	);
});

//Filter items to backpacks visible only
Cypress.Commands.add("filterItemsToBackpacks", () => {
	cy.get('[class="products list items product-items"]').each(
		($item) => {
			cy.wrap($item).should("contain.text", "Backpack");
		}
	);
});

//Add products to wishlist 

Cypress.Commands.add("addProductsToWishlist", () => {
	cy.contains("span", "Add to Wish List").click({ force: true });
		cy.get("div.message-success").should(
			"include.text",
			"has been added to your Wish List"
		);
		cy.url().should("include", "/wishlist");
});