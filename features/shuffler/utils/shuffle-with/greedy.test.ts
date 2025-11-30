import { afterEach, describe, expect, it, vi } from "vitest";
import * as ShuffleUtils from "../shuffle-array";
import { performGreedyDistribution } from "./greedy";

describe("performGreedyDistribution", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("standard", () => {
    it("distributes items evenly", () => {
      const recipients = ["Alice", "Bob"];
      const items = ["Task 1", "Task 2", "Task 3", "Task 4"];

      const result = performGreedyDistribution(items, recipients);

      expect(result.get("Alice")).toHaveLength(2);
      expect(result.get("Bob")).toHaveLength(2);
    });

    it("handles uneven split by filling least filled buckets", () => {
      const recipients = ["Alice", "Bob", "Charlie"];
      const items = ["Task 1", "Task 2", "Task 3", "Task 4"];

      const result = performGreedyDistribution(items, recipients);

      const counts = Array.from(result.values()).map((arr) => arr.length);
      // greedy guarantees the difference between max and min never exceeds 1
      expect(Math.max(...counts)).toBe(2);
      expect(Math.min(...counts)).toBe(1);
    });
  });

  it("returns empty map if recipients (keys) are empty", () => {
    const result = performGreedyDistribution(["Item 1"], []);
    expect(result.size).toBe(0);
  });

  it("returns map with empty arrays if items are empty", () => {
    const result = performGreedyDistribution([], ["Key 1", "Key 2"]);
    expect(result.size).toBe(2);
    expect(result.get("Key 1")).toEqual([]);
  });

  it("calls shuffleArray on both items and recipients", () => {
    const shuffleSpy = vi.spyOn(ShuffleUtils, "shuffleArray");
    const items = ["A", "B"];
    const recipients = ["1", "2"];

    performGreedyDistribution(items, recipients);

    // greedy shuffles to prevent bias when multiple buckets have the same count
    expect(shuffleSpy).toHaveBeenCalledTimes(2);
    expect(shuffleSpy).toHaveBeenCalledWith(items);
    expect(shuffleSpy).toHaveBeenCalledWith(recipients);
  });
});
