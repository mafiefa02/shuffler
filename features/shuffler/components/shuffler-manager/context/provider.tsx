"use client";

import { ShufflerType } from "@/features/shuffler/types";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ShufflerManagerContext } from "./context";

export const ShufflerManagerProvider = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: ShufflerType;
}) => {
  const [query, setQuery] = useQueryState(
    type,
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  return (
    <ShufflerManagerContext.Provider value={[query, setQuery]}>
      {children}
    </ShufflerManagerContext.Provider>
  );
};
