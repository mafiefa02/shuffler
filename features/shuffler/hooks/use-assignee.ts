"use client";

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { ShufflerType } from "../types";

export const assigneeParser = parseAsArrayOf(parseAsString).withDefault([]);

const key = "assignees" as ShufflerType;
export const useAssignees = () => useQueryState(key, assigneeParser);
