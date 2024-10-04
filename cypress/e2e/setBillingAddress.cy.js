import { accountUserCredentials } from "./generatingCredentials";
import { userNewAddress } from "./generatingCredentials";

describe("Should set default billing address.", () => {
	it("Set default billing address.", () => {
		cy.visit("/");

		//Verify that home page is visible successfully
		cy.isHomePageVisible();

		//Log in with user credentials
		cy.logInWithUserCredentials();

		//Set new address
		cy.visit(
			"https://magento.softwaretestingboard.com/customer/account/"
		);

		cy.get("span").contains("Manage Addresses").click();
		cy.get("span").contains("Add New Address").click();

		cy.visit(
			"https://magento.softwaretestingboard.com/customer/address/new/"
		);
		//Fill form
		cy.get("#form-validate").within(() => {
			cy.get("#telephone").type(userNewAddress.telephoneNumber);
			cy.get("#street_1").type(userNewAddress.streetAddress);
			cy.get("#city").type(userNewAddress.cityAddress);
			cy.get("select#region_id").select("California");
			cy.get("#zip").type(userNewAddress.postalCode);
			cy.get("button").contains("Save Address").click();
		});

		cy.get("span").contains("Default Billing Address");
	});
});
