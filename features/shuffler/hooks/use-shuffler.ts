"use client";

import { useCallback, useState } from "react";
import {
  Assignment,
  ShuffleMode,
  ShufflerResultMeta,
  ShuffleStrategyType,
} from "../types";
import { getShuffleStrategy } from "../utils/get-shuffle-strategy";
import { shuffleWith } from "../utils/shuffle-with";
import { useAssignees } from "./use-assignee";
import { useAssignments } from "./use-assignment";

export const useShuffler = ({
  mode,
  strategyType,
}: {
  mode: ShuffleMode;
  strategyType: ShuffleStrategyType;
}) => {
  const [assignees] = useAssignees();
  const [assignments] = useAssignments();

  const [result, setResult] = useState<Assignment>(new Map());
  const [meta, setMeta] = useState<ShufflerResultMeta | null>(null);

  const items = mode === "by-assignee" ? assignees : assignments;
  const recipients = mode === "by-assignee" ? assignments : assignees;

  const shuffle = useCallback(() => {
    const strategy = getShuffleStrategy(strategyType);
    const result = shuffleWith(strategy, items, recipients);
    setResult(result);
    if (result.size > 0) {
      setMeta({ mode, strategy: strategyType });
    }
  }, [strategyType, items, recipients, mode]);

  const reset = useCallback(() => {
    setResult(new Map());
    setMeta(null);
  }, []);

  return { result, shuffle, reset, meta };
};
