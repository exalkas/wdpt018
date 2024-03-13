describe("this is a hello world", () => {
  it("visits the homepage", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Welcome at social app!");
  });
});
