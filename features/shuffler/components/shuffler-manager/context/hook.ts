"use client";

import { useContext } from "react";
import { ShufflerManagerContext } from "./context";

export const useShufflerManager = () => {
  const context = useContext(ShufflerManagerContext);

  if (!context) {
    throw new Error(
      "useShufflerManager must be used within a ShufflerManagerProvider",
    );
  }

  return context;
};
