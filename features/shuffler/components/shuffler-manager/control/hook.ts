"use client";

import { useContext } from "react";
import { ShufflerManagerControlContext } from "./context";

export const useShufflerManagerControl = () => {
  const context = useContext(ShufflerManagerControlContext);

  if (!context) {
    throw new Error(
      "useShufflerManagerControl must be used within a ShufflerManagerControlProvider",
    );
  }

  return context;
};
