import { afterEach, describe, expect, it, vi } from "vitest";
import * as ShuffleUtils from "../shuffle-array";
import { performRoundRobin } from "./round-robin";

describe("performRoundRobin", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("standard", () => {
    it("distributes items evenly", () => {
      const recipients = ["Alice", "Bob"];
      const items = ["Task 1", "Task 2", "Task 3", "Task 4"];

      const result = performRoundRobin(items, recipients);

      expect(result.get("Alice")).toHaveLength(2);
      expect(result.get("Bob")).toHaveLength(2);
    });

    it("handles uneven split correctly", () => {
      const recipients = ["Alice", "Bob", "Charlie"];
      const items = ["Task 1", "Task 2", "Task 3", "Task 4"];

      const result = performRoundRobin(items, recipients);

      const counts = Array.from(result.values()).map((arr) => arr.length);
      expect(Math.max(...counts)).toBe(2);
      expect(Math.min(...counts)).toBe(1);
    });
  });

  describe("inverse", () => {
    it("distributes correctly when inputs are swapped", () => {
      const buckets = ["Task A", "Task B"];
      const itemsToDistribute = ["Alice", "Bob", "Charlie"];

      const result = performRoundRobin(itemsToDistribute, buckets);

      expect(result.size).toBe(2);
      expect(result.has("Task A")).toBe(true);

      const totalAssigned = Array.from(result.values()).flat().length;
      expect(totalAssigned).toBe(3);
    });
  });

  it("returns empty map if recipients (keys) are empty", () => {
    const result = performRoundRobin(["Item 1"], []);
    expect(result.size).toBe(0);
  });

  it("returns map with empty arrays if items are empty", () => {
    const result = performRoundRobin([], ["Key 1", "Key 2"]);
    expect(result.size).toBe(2);
    expect(result.get("Key 1")).toEqual([]);
  });

  it("calls shuffleArray on both items and recipients", () => {
    const shuffleSpy = vi.spyOn(ShuffleUtils, "shuffleArray");
    const items = ["A", "B"];
    const recipients = ["1", "2"];

    performRoundRobin(items, recipients);

    expect(shuffleSpy).toHaveBeenCalledTimes(2);
    expect(shuffleSpy).toHaveBeenCalledWith(items);
    expect(shuffleSpy).toHaveBeenCalledWith(recipients);
  });
});
