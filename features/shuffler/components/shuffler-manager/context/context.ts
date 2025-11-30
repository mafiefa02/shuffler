"use client";

import { ShufflerItem } from "@/features/shuffler/types";
import { UseQueryStateReturn } from "nuqs";
import { createContext } from "react";

type ShufflerManagerContextType = UseQueryStateReturn<
  ShufflerItem[],
  ShufflerItem[]
>;

export const ShufflerManagerContext = createContext<
  ShufflerManagerContextType | undefined
>(undefined);
