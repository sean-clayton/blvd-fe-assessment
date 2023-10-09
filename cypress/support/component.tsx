import { mount } from "cypress/react18";
import AppWrapper from "../../src/app-wrapper";

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add("mount", (component, options = {}) => {
  const wrapped = <AppWrapper>{component}</AppWrapper>;

  return mount(wrapped, options);
});
