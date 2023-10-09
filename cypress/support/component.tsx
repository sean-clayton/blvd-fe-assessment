import { mount } from "cypress/react18";
import AppWrapper from "../../src/app-wrapper";
import { worker } from "../../src/mocks/browser";

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add("mount", (component, options = {}) => {
  const wrapped = <AppWrapper>{component}</AppWrapper>;

  // Ensure msw is started before mounting the component during tests.
  worker.start();

  return mount(wrapped, options);
});
