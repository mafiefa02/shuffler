export type ShufflerItem = string;

export type ShufflerType = "assignees" | "assignments";

export type Assignment = Map<ShufflerItem, ShufflerItem[]>;

export type Meta = "strategy" | "mode";

export type ShufflerResultMeta = Record<Meta, string>;

export type ShuffleMode = "by-assignee" | "by-task";

export type ShuffleStrategyType =
  | "round-robin"
  | "greedy"
  | "random"
  | "sequential";

export type ShuffleStrategy = (
  items: ShufflerItem[],
  recipients: ShufflerItem[],
) => Assignment;
