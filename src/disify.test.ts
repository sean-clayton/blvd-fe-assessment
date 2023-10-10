import { describe, it, expect, vi } from "vitest";
import { getSingleEmail } from "./disify";

describe("getSingleEmail", () => {
  it("Attempts request to the disify api.", () => {
    global.fetch = vi.fn();

    getSingleEmail("test");
    expect(global.fetch).toHaveBeenCalledOnce();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://www.disify.com/api/email/test"
    );
  });
});
