"use client";

import { useShuffler } from "@/features/shuffler/hooks/use-shuffler";
import { ShuffleMode, ShuffleStrategyType } from "@/features/shuffler/types";
import { useCopyToClipboard } from "@/lib/hooks";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/utils";
import { ReactNode, useCallback, useState } from "react";
import { ShufflerResultContext } from "./context";

const STRATEGY_STORAGE_KEY = "shuffler-strategy";
const DEFAULT_STRATEGY = "round-robin" as ShuffleStrategyType;

const MODE_STORAGE_KEY = "shuffler-mode";
const DEFAULT_MODE: ShuffleMode = getLocalStorageItem(
  MODE_STORAGE_KEY,
  "by-assignee",
) as ShuffleMode;

export const ShufflerResultProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setShuffleMode] = useState<ShuffleMode>(DEFAULT_MODE);
  const [strategy, setShuffleStrategy] =
    useState<ShuffleStrategyType>(DEFAULT_STRATEGY);

  const setMode = useCallback((value: ShuffleMode) => {
    setShuffleMode(value);
    setLocalStorageItem(MODE_STORAGE_KEY, value);
  }, []);

  const setStrategy = useCallback((value: ShuffleStrategyType) => {
    setShuffleStrategy(value);
    setLocalStorageItem(STRATEGY_STORAGE_KEY, value);
  }, []);

  const [, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const { result, shuffle, reset, meta } = useShuffler({
    mode,
    strategyType: strategy,
  });

  const stringifyResult = useCallback(() => {
    let text = "";
    result.forEach((assignments, assignee) => {
      text += `${assignee}: ${assignments.length > 0 ? assignments.join(", ") : "-"}\n`;
    });
    return text;
  }, [result]);

  const copy = useCallback(() => {
    const textToCopy = stringifyResult();
    copyToClipboard(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => setIsCopied(false));
  }, [copyToClipboard, stringifyResult]);

  return (
    <ShufflerResultContext.Provider
      value={{
        result,
        shuffle,
        reset,
        copy,
        isCopied,
        mode,
        setMode,
        strategy,
        setStrategy,
        meta,
      }}
    >
      {children}
    </ShufflerResultContext.Provider>
  );
};
