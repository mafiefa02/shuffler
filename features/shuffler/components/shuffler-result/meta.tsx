"use client";

import { cn } from "@/lib/utils";
import { useShufflerResult } from "./context";

export const ShufflerResultMeta = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { meta } = useShufflerResult();

  if (!meta) return null;

  return (
    <div
      className={cn(
        "flex gap-2 px-0 text-xs text-muted-foreground xs:flex-row",
        className,
      )}
      {...props}
    >
      {Array.from(Object.entries(meta)).map(([key, values]) => (
        <p
          className="inline gap-1"
          key={key}
        >
          {key}:{" "}
          <span className="rounded bg-muted px-1.5 font-mono">{values}</span>
        </p>
      ))}
    </div>
  );
};
