"use client";

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ShufflerType } from "../types";

export const assignmentParser = parseAsArrayOf(parseAsString)
  .withDefault([])
  .withOptions({ history: "replace" });

const key = "assignments" as ShufflerType;
export const useAssignments = () => useQueryState(key, assignmentParser);
