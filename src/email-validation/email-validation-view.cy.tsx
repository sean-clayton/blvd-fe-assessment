import EmailValidationView from "./email-validation-view";

describe("Email Validation", () => {
  it("Resets the form after submitting.", () => {
    cy.mount(<EmailValidationView />);
    cy.get("input").type("test");
    cy.get("form").submit();
    cy.get("input").should("not.have.value");
  });

  it("Renders a proper result when submitting an incorrectly formatted email.", () => {
    cy.mount(<EmailValidationView />);
    cy.get("input").type("test");
    cy.get("form").submit();
    cy.get("[data-testid=validation-history-list-item-0]").should("exist");
  });

  it("Displays an error when trying to submit an email with a space.", () => {
    cy.mount(<EmailValidationView />);
    cy.get("input").type("cause-error");
    cy.get("form").submit();
    cy.get("[data-testid=validation-history-list-item-0]").should(
      "contain.text",
      "Error: API Error"
    );
  });

  it("Renders multiple results when submitting multiple times.", () => {
    cy.mount(<EmailValidationView />);

    cy.get("input:not([disabled])").type("test");
    cy.get("form").submit();

    cy.get("input:not([disabled])").type("test");
    cy.get("form").submit();

    cy.get("[data-testid=validation-history-list-item-0]").should("exist");
    cy.get("[data-testid=validation-history-list-item-1]").should("exist");
  });
});
