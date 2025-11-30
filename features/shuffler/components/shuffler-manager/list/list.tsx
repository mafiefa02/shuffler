"use client";

import { useShufflerManager } from "../context";
import { ShufflerManagerItemListEmpty } from "./empty";
import { ShufflerManagerItem } from "./item";

export const ShufflerManagerItemList = () => {
  const [query] = useShufflerManager();

  if (query.length === 0) return <ShufflerManagerItemListEmpty />;

  return (
    <div className="flex flex-col gap-2">
      {query.map((item) => (
        <ShufflerManagerItem
          key={item}
          item={item}
        />
      ))}
    </div>
  );
};
