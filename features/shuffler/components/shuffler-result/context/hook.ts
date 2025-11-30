"use client";

import { useContext } from "react";
import { ShufflerResultContext } from "./context";

export const useShufflerResult = () => {
  const context = useContext(ShufflerResultContext);

  if (!context) {
    throw new Error(
      "useShufflerResult must be used within a ShufflerResultProvider",
    );
  }

  return context;
};
