import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ValidationItemLabel from "./validation-item-label";

describe("ValidationItemLabel", () => {
  it("Renders a Disposable label with the value true correctly.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Disposable" value="Yes" />
    );
    expect(wrapper.container.textContent).toContain("Disposable");
    expect(wrapper.container.textContent).toContain("Yes");
  });

  it("Renders a Valid Format label with given value.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Valid Format" value="No" />
    );
    expect(wrapper.container.textContent).toContain("Valid Format");
    expect(wrapper.container.textContent).toContain("No");
  });

  it("Renders an Error label with the given error reason.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Error" value="Reason" />
    );

    expect(wrapper.container.textContent).toContain("Error");
    expect(wrapper.container.textContent).toContain("Reason");
  });
});
