describe("login tests", () => {
  it("Logs in", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Welcome at social app!");

    cy.get("#email").type("a03"); // selects username input
    cy.get(":nth-child(2) > .w-full").type("123");

    cy.get(".mb-12 > .py-4").click(); // clicks the login button

    cy.contains("a02");
  });

  it("fails log in ", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Welcome at social app!");

    cy.get("#email").type("a033"); // selects username input
    cy.get(":nth-child(2) > .w-full").type("123");

    cy.get(".mb-12 > .py-4").click(); // clicks the login button

    cy.contains("a02");
  });
});
