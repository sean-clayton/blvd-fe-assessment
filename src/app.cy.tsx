import App from "./app";

it("mounts", () => {
  cy.mount(<App />);
  cy.get("#app").should("have.text", "Hello World!");
});
