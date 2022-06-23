const num = Math.floor(Math.random() * 100 + 1);
const email = "test-".concat(num).concat("@gmail.com");

/* eslint-disable no-undef */
describe("Login, Register and Authentication", () => {
	it("Register User", () => {
		cy.visit("http://localhost:3000/register", {
			headers: { "Accept-Encoding": "gzip, deflate" },
		});
		cy.get("input#name").type("test");
		cy.get("input#email").type(email);
		cy.get("input#password").type("qwerty");
		cy.get("input#confirm-password").type("qwerty");
		cy.get('button[id="register-button"]').click();
		cy.get('button[id="logout"]').click();
	});

	it("Login User", () => {
		cy.get("input#email").type(email);
		cy.get("input#password").type("qwerty");
		cy.get('button[id="login-button"]').click();
		cy.get('button[id="logout"]').click();
	});

	it("authentication test", () => {
		cy.visit("http://localhost:3000/home");
		cy.url().should("eq", "http://localhost:3000/");
	});
});
