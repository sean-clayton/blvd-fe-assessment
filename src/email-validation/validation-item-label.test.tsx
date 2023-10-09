import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ValidationItemLabel from "./validation-item-label";

describe("ValidationItemLabel", () => {
  it("Renders a Disposable label with the value true correctly.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Disposable" value={true} />
    );
    expect(wrapper.container.textContent).toContain("Disposable");
    expect(wrapper.container.textContent).toContain("Yes");
  });

  it("Renders a Disposable label with the value false correctly.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Disposable" value={false} />
    );
    expect(wrapper.container.textContent).toContain("Disposable");
    expect(wrapper.container.textContent).toContain("No");
  });

  it("Renders a Valid Format label with the value false correctly.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Valid Format" value={true} />
    );
    expect(wrapper.container.textContent).toContain("Valid Format");
    expect(wrapper.container.textContent).toContain("Yes");
  });

  it("Renders a Valid Format label with the value false correctly.", () => {
    const wrapper = render(
      <ValidationItemLabel label="Valid Format" value={false} />
    );
    expect(wrapper.container.textContent).toContain("Valid Format");
    expect(wrapper.container.textContent).toContain("No");
  });
});
