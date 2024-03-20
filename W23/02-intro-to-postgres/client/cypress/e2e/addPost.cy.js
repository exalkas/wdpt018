describe("Adds a post", () => {
  it("adds a post", () => {
    cy.login();

    cy.get('[href="/addPost"]').click();

    cy.contains("Save");

    cy.get("#title").type("Cypress rules 2");
    cy.get(":nth-child(2) > .w-full").type("this is a post from cypress");

    cy.get(".mb-12 > .py-4").click();

    cy.get('[href="/home"]').click();

    cy.contains("Cypress rules 2");
  });
});
