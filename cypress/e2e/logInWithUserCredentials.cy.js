import { accountUserCredentials } from "./generatingCredentials";

describe("Should log in with User Credentials and log out successfully.", () => {
	it("Log in and log out successfully.", () => {
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

		//Log out
		cy.get('[data-toggle="dropdown"]').click({
			multiple: true,
			force: true,
		});
		cy.get(
			'a[href="https://magento.softwaretestingboard.com/customer/account/logout/"]'
		).click({ force: true, multiple: true });
	});
});
