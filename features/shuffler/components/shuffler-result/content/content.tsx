"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useShufflerResult } from "../context";
import { ShufflerResultContentEmpty } from "./empty";

export const ShufflerResultContent = () => {
  const { result } = useShufflerResult();

  if (result.size === 0) return <ShufflerResultContentEmpty />;

  return (
    <Card className="border-none bg-muted/40">
      <CardContent className="font-mono text-sm leading-relaxed">
        {Array.from(result.entries()).map(([key, values]) => (
          <p key={key}>
            {key}: {values.length > 0 ? values.join(", ") : "-"}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};
