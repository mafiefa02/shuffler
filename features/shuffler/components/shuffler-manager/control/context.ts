"use client";

import { createContext, Dispatch, SetStateAction } from "react";

interface ShufflerManagerControlContextType {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const ShufflerManagerControlContext = createContext<
  ShufflerManagerControlContextType | undefined
>(undefined);
