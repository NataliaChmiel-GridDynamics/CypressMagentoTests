describe("Should check that all links in footer work properly.", () => {
	it("Check all links in footer.", () => {
		cy.visit("/");

		//Scroll to footer section
		cy.scrollTo("bottom");

		//Notes
		cy.get(
			'a[href="https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion"]'
		).then((link) => {
			const url = link.prop("href");
			cy.request(url).its("status").should("eq", 200);
		});

		//API testing
		cy.get(
			'a[href="https://softwaretestingboard.com/practice-api-testing-using-magento-2/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=API_Testing_Promo"]'
		).then((link) => {
			const url = link.prop("href");
			cy.request(url).its("status").should("eq", 200);
		});

		//Write for us
		cy.get(
			'a[href="https://softwaretestingboard.com/write-for-us/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=write4us"]'
		).then((link) => {
			const url = link.prop("href");
			cy.request(url).its("status").should("eq", 200);
		});

		//Subscribe
		cy.get(
			'a[href="https://softwaretestingboard.com/subscribe/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=email_subscribe"]'
		).then((link) => {
			const url = link.prop("href");
			cy.request(url).its("status").should("eq", 200);
		});

		//Search Terms
		cy.contains("a", "Search Terms").click();
		cy.url().should("include", "/search/term/popular");
		cy.goBack();

		//Privacy
		cy.contains("a", "Privacy and Cookie Policy").click();
		cy.url().should(
			"include",
			"/privacy-policy-cookie-restriction-mode"
		);
		cy.goBack();

		//Advanced Search
		cy.contains("a", "Advanced Search").click({ force: true });
		cy.url().should("include", "/catalogsearch/advanced");
		cy.goBack();

		//Orders and Returns
		cy.contains("a", "Orders and Returns").click();
		cy.url().should("include", "/guest/form");
		cy.goBack();
	});
});
