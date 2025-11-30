"use client";

import { assigneeParser, assignmentParser } from "@/features/shuffler/hooks";
import { ShufflerType } from "@/features/shuffler/types";
import { useQueryState } from "nuqs";
import { ShufflerManagerContext } from "./context";

const PARSER = {
  assignees: assigneeParser,
  assignments: assignmentParser,
} satisfies Record<ShufflerType, unknown>;

export const ShufflerManagerProvider = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: ShufflerType;
}) => {
  const [query, setQuery] = useQueryState(type, PARSER[type]);
  return (
    <ShufflerManagerContext.Provider value={[query, setQuery]}>
      {children}
    </ShufflerManagerContext.Provider>
  );
};
