describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("Contains correct header text", () => {
    // cy.get('[data-test="fundamentals-header"]').contains(
    //   /Testing Fundamentals/i
    // );
    // cy.get('[data-test="fundamentals-header"]').should(
    //   "contain.text",
    //   "Testing Fundamentals"
    // );

    //Using custom command
    // cypress/support/commands.js
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    // cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    //Using custom command
    // cypress/support/commands.js
    cy.getDataTest("accordion-item-1", 'div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i)
      .should("be.visible")
      .wait(2000);
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
