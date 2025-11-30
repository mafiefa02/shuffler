import { afterEach, describe, expect, it, vi } from "vitest";
import { performRandomDistribution } from "./pure-random";

describe("performRandomDistribution", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("behavioral", () => {
    it("assigns all items to a recipient", () => {
      const recipients = ["Alice", "Bob"];
      const items = ["Task 1", "Task 2", "Task 3"];

      const result = performRandomDistribution(items, recipients);

      const totalAssigned = Array.from(result.values()).flat().length;
      expect(totalAssigned).toBe(3);
    });

    it("distributes based on Math.random", () => {
      // mock random to control where items go.
      // 0.0 -> first recipient
      // 0.9 -> second recipient (assuming 2 recipients)
      const randomSpy = vi
        .spyOn(Math, "random")
        .mockReturnValueOnce(0.0) // item 1 -> recipient 0
        .mockReturnValueOnce(0.99) // item 2 -> recipient 1
        .mockReturnValueOnce(0.0); // item 3 -> recipient 0

      const recipients = ["Alice", "Bob"];
      const items = ["Item 1", "Item 2", "Item 3"];

      const result = performRandomDistribution(items, recipients);

      // alice is index 0, bob is index 1
      expect(result.get("Alice")).toEqual(["Item 1", "Item 3"]);
      expect(result.get("Bob")).toEqual(["Item 2"]);
      expect(randomSpy).toHaveBeenCalledTimes(3);
    });
  });

  it("returns empty map if recipients are empty", () => {
    const result = performRandomDistribution(["Item 1"], []);
    expect(result.size).toBe(0);
  });

  it("returns map with empty arrays if items are empty", () => {
    const result = performRandomDistribution([], ["Key 1", "Key 2"]);
    expect(result.size).toBe(2);
    expect(result.get("Key 1")).toEqual([]);
  });
});
