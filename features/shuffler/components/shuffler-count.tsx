"use client";

import { Badge } from "@/components/ui/badge";
import { useQueryStates } from "nuqs";
import { assigneeParser, assignmentParser } from "../hooks";
import { ShufflerType } from "../types";

export const ShufflerCount = ({ type }: { type: ShufflerType }) => {
  const [variables] = useQueryStates({
    assignees: assigneeParser,
    assignments: assignmentParser,
  });

  const itemsCount = variables[type].length;

  return (
    <Badge className="hidden scale-75 rounded-full bg-muted-foreground/75 font-semibold text-muted xs:block">
      {itemsCount}
    </Badge>
  );
};
