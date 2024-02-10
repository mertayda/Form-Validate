describe('Landing Page Tests', () => {
  it('clicks on Register Button and navigates to the registration page', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Register').click();
    
    // Add an assertion to check if you've successfully navigated to the registration page
    cy.contains('Register').click();
cy.log('http://localhost:5173/register', cy.url());
    cy.url().should('include', '/register');
  });
});

describe("Form Validations", () => {
  beforeEach(() => {
    // Assuming your registration page is at http://localhost:5173/register
    cy.visit("http://localhost:5173/register");
  });

  it("form is filled, and the button becomes active", () => {
    cy.get('input[name="username"]').type("Mert");
    cy.get('input[name="email"]').type("admin@test.com");
    cy.get('input[name="password"]').type("123456Qa!");
    cy.get('[name="checkbox"]').check();
    cy.get("button").should("not.be.disabled");
  });
});
