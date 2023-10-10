import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ValidationHistoryListItem from "./validation-history-list-item";

describe("ValidationHistoryListItem", () => {
  it("Has a Test ID based off of position in the list", () => {
    render(<ValidationHistoryListItem index={0} email="test" result={{}} />);

    expect(screen.getByTestId("validation-history-list-item-0")).toBeTruthy();
  });

  it("Displays the validated email.", () => {
    render(<ValidationHistoryListItem index={0} email="test" result={{}} />);

    expect(
      screen.getByTestId("validation-history-list-item-0").textContent
    ).toContain("test");
  });

  it("Displays that the email was invalid.", () => {
    render(
      <ValidationHistoryListItem
        index={0}
        email="test"
        result={{ format: false }}
      />
    );

    expect(
      screen.getByTestId("validation-history-list-item-0").textContent
    ).toContain("Valid Format: No");
  });

  it("Displays that the email was valid, but is disposable.", () => {
    render(
      <ValidationHistoryListItem
        index={0}
        email="test"
        result={{ format: true, disposable: true }}
      />
    );

    expect(
      screen.getByTestId("validation-history-list-item-0").textContent
    ).toContain("Valid Format: Yes");
    expect(
      screen.getByTestId("validation-history-list-item-0").textContent
    ).toContain("Disposable: Yes");
  });

  it("Displays an error message if an error exists", () => {
    render(
      <ValidationHistoryListItem
        index={0}
        email="errored email"
        error="error message"
      />
    );

    expect(
      screen.getByTestId("validation-history-list-item-0").textContent
    ).toContain("Error: error message");
  });
});
