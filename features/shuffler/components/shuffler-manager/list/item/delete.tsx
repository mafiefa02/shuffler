"use client";

import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { useCallback } from "react";
import { useShufflerManager } from "../../context";

export const ItemDelete = ({ item }: { item: string }) => {
  const [, setQuery] = useShufflerManager();

  const removeItem = useCallback(
    () =>
      setQuery((old) => {
        const newItems = new Set(old);
        newItems.delete(item);
        return Array.from(newItems);
      }),
    [item, setQuery],
  );

  return (
    <Button
      variant="secondary"
      className="rounded-sm hover:bg-destructive hover:text-destructive-foreground"
      size="icon-sm"
      onClick={removeItem}
    >
      <TrashIcon />
    </Button>
  );
};
