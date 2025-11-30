"use client";

import { CardDescription } from "@/components/ui/card";
import { useShufflerResult } from "./context";

export const ShufflerResultDescription = () => {
  const { strategy } = useShufflerResult();
  return <CardDescription>generated with {strategy} strategy</CardDescription>;
};
