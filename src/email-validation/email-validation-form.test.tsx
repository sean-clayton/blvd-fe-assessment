import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import EmailValidationForm from "./email-validation-form";

describe("EmailValidationForm", () => {
  it("Renders a form.", () => {
    render(<EmailValidationForm />);

    expect(screen.getByRole("form")).toBeTruthy();
  });

  it("Renders a form with a proper aria label.", () => {
    render(<EmailValidationForm />);

    expect(screen.getByLabelText("Email validation form")).toBeTruthy();
  });

  it("Renders an input with a proper label.", () => {
    render(<EmailValidationForm />);

    const el = screen.getByLabelText("Email");

    expect(el).toBeTruthy();
    expect(el.tagName).toBe("INPUT");
  });

  it("Renders an input with the 'email' type.", () => {
    render(<EmailValidationForm />);

    expect(screen.getByLabelText("Email").getAttribute("type")).toBe("email");
  });

  it("Renders a submit button.", () => {
    render(<EmailValidationForm />);

    const el = screen.getByRole("button");

    expect(el).toBeTruthy();
    expect(el.getAttribute("type")).toBe("submit");
  });

  it("Renders a submit button with a proper label.", () => {
    render(<EmailValidationForm />);

    expect(screen.getByRole("button").textContent).toBe("Submit");
  });

  it("Calls an onSubmit callback when submitting the form", () => {
    const callback = vi.fn();
    render(<EmailValidationForm onSubmit={callback} />);

    screen.getByText(/Submit/).click();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
