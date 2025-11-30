import { afterEach, describe, expect, it, vi } from "vitest";
import * as ShuffleUtils from "../shuffle-array";
import { performSequentialDistribution } from "./sequential";

describe("performSequentialDistribution", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("chunking logic", () => {
    it("fills the first recipient entirely before moving to the next", () => {
      // mock shuffle to return items in original order so we can test grouping
      vi.spyOn(ShuffleUtils, "shuffleArray").mockImplementation((arr) => arr);

      const recipients = ["Alice", "Bob"];
      // 4 items, 2 recipients = chunk size of 2
      const items = ["1", "2", "3", "4"];

      const result = performSequentialDistribution(items, recipients);

      // alice should get the first slice [1, 2]
      expect(result.get("Alice")).toEqual(["1", "2"]);
      // bob should get the second slice [3, 4]
      expect(result.get("Bob")).toEqual(["3", "4"]);
    });

    it("calculates uneven chunk sizes correctly (ceiling)", () => {
      vi.spyOn(ShuffleUtils, "shuffleArray").mockImplementation((arr) => arr);

      const recipients = ["Alice", "Bob"];
      // 5 items, 2 recipients. chunk size = Math.ceil(5/2) = 3
      const items = ["1", "2", "3", "4", "5"];

      const result = performSequentialDistribution(items, recipients);

      // alice gets first 3
      expect(result.get("Alice")).toEqual(["1", "2", "3"]);
      // bob gets remaining 2
      expect(result.get("Bob")).toEqual(["4", "5"]);
    });

    it("leaves last recipients empty if not enough items for chunk size", () => {
      vi.spyOn(ShuffleUtils, "shuffleArray").mockImplementation((arr) => arr);

      const recipients = ["Alice", "Bob", "Charlie"];
      // 2 items, 3 recipients. chunk size = Math.ceil(2/3) = 1
      const items = ["1", "2"];

      const result = performSequentialDistribution(items, recipients);

      expect(result.get("Alice")).toEqual(["1"]);
      expect(result.get("Bob")).toEqual(["2"]);
      expect(result.get("Charlie")).toEqual([]); // ran out of items
    });
  });

  it("returns empty map if recipients are empty", () => {
    const result = performSequentialDistribution(["Item 1"], []);
    expect(result.size).toBe(0);
  });

  it("calls shuffleArray on items and recipients", () => {
    const shuffleSpy = vi.spyOn(ShuffleUtils, "shuffleArray");
    const items = ["A", "B"];
    const recipients = ["1", "2"];

    performSequentialDistribution(items, recipients);

    expect(shuffleSpy).toHaveBeenCalledWith(items);
    expect(shuffleSpy).toHaveBeenCalledWith(recipients);
  });
});
