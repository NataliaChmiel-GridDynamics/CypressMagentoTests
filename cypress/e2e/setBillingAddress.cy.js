import { accountUserCredentials } from "./generatingCredentials";
import { userNewAddress } from "./generatingCredentials";

describe("Should set default billing address.", () => {
	it("Set default billing address.", () => {
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


		//Set new address
		cy.visit(
			"https://magento.softwaretestingboard.com/customer/account/"
		);
		cy.contains("span", "Manage Addresses").click();
		cy.get("#telephone").type(userNewAddress.telephoneNumber);
		cy.get("#street_1").type(userNewAddress.streetAddress);
		cy.get("#city").type(userNewAddress.cityAddress);
        cy.get('select#region_id').select('California');
		cy.get("#zip").type(userNewAddress.postalCode);
        cy.get("button").contains('Save Address').click();
        cy.get("span").contains('Default Billing Address');
        // cy.get("span").contains('Default Billing Address');



        
	});
});
