"use client";

import {
  Assignment,
  ShuffleMode,
  ShufflerResultMeta,
  ShuffleStrategyType,
} from "@/features/shuffler/types";
import { createContext } from "react";

export type ShufflerResultContextType = {
  result: Assignment;
  shuffle: (type: ShuffleStrategyType) => void;
  reset: () => void;
  copy: () => void;
  mode: ShuffleMode;
  setMode: (mode: ShuffleMode) => void;
  strategy: ShuffleStrategyType;
  setStrategy: (strategy: ShuffleStrategyType) => void;
  meta: ShufflerResultMeta | null;
  isCopied: boolean;
};

export const ShufflerResultContext = createContext<
  ShufflerResultContextType | undefined
>(undefined);
