"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useCallback } from "react";
import { useShufflerManager } from "./context";
import { useShufflerManagerControl } from "./control";

export const ShufflerManagerAddButton = () => {
  const [query, setQuery] = useShufflerManager();
  const { value, setValue } = useShufflerManagerControl();

  const handleAdd = useCallback(() => {
    const newList = new Set(query);
    if (value !== "") newList.add(value);
    setQuery(Array.from(newList));
    return setValue("");
  }, [query, setQuery, value, setValue]);

  return (
    <Button
      onClick={handleAdd}
      size="icon-sm"
    >
      <PlusIcon />
    </Button>
  );
};
