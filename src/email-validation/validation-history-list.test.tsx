import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ValidationHistoryList from "./validation-history-list";

describe("ValidationHistoryList", () => {
  it("Can find the list by test-id.", () => {
    render(<ValidationHistoryList results={[]} />);

    expect(screen.getByTestId("validation-history-list")).toBeTruthy();
  });

  it("Renders a list of validation results.", () => {
    const results = [{ email: "test", result: { format: false } }];

    render(<ValidationHistoryList results={results} />);

    const element = screen.getByTestId("validation-history-list");

    expect(element.textContent).toContain("test");
    expect(element.textContent).toContain("Valid Format: No");
  });

  it("Uses an ordered list for the list.", () => {
    render(<ValidationHistoryList results={[]} />);

    expect(screen.getByRole("list")?.tagName).toBe("OL");
  });

  it("Uses list items for the list.", () => {
    render(
      <ValidationHistoryList results={[{ email: "test", result: {} }]} />
    ).queryAllByRole("listitem");

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
