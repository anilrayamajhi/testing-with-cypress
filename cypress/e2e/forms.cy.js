describe("Forms Test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);

    /**
     * Create alias for subscribe-form input
     * cy.getDataTest("subscribe-form").find("input")
     */
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");

    cy.contains(/Successfully subbed: abc@abc.com!/i).should("not.exist");
    // Using subscribe-input alias
    cy.get("@subscribe-input").type("abc@abc.com");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: abc@abc.com!/i).should("exist");
    cy.wait(2000);
    cy.contains(/Successfully subbed: abc@abc.com!/i).should("not.exist");

    cy.get("@subscribe-input").type("abc@abc.io");
    cy.contains(/Invalid email: abc@abc.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: abc@abc.io!/i).should("exist");
    cy.wait(2000);

    cy.contains(/Invalid email: abc@abc.io!/i).should("not.exist");
    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
