import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
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

  it("Calls an onSubmit callback when submitting the form", async () => {
    const callback = vi.fn();
    render(<EmailValidationForm onSubmit={callback} />);

    const form = screen.getByRole("form");

    await act(async () => {
      fireEvent.submit(form);
    });

    expect(callback).toHaveBeenCalledOnce();
  });

  it("Renders an input with a name of 'email'.", () => {
    render(<EmailValidationForm />);

    expect(screen.getByLabelText("Email").getAttribute("name")).toBe("email");
  });

  it("Renders a form without validation", () => {
    render(<EmailValidationForm />);

    expect(screen.getByRole("form").getAttribute("novalidate")).toBe("");
  });

  it("Doesn't let you submit until the input has a value", async () => {
    render(<EmailValidationForm />);
    const input = screen.getByLabelText("Email");
    const button = screen.getByRole("button");

    expect(button.getAttribute("disabled")).toBe("");

    await act(async () => {
      fireEvent.change(input, { target: { value: "Test" } });
    });

    expect(button.getAttribute("disabled")).toBe(null);
  });
});
