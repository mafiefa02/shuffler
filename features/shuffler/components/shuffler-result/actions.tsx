"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ClipboardIcon,
  RotateCcwIcon,
  ShuffleIcon,
} from "lucide-react";
import { useShufflerResult } from "./context";
import { ShufflerResultSettings } from "./settings";

export const ShufflerResultActions = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { result, shuffle, reset, copy, isCopied } = useShufflerResult();

  const hasResult = result.size > 0;

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-x-2 gap-y-4 xs:flex-row lg:w-auto",
        className,
      )}
      {...props}
    >
      <div className="flex w-full flex-1 items-center gap-2">
        <ShufflerResultSettings />
        {hasResult && (
          <>
            <Button
              size="sm"
              variant="secondary"
              className="hidden flex-1 md:inline-flex"
              onClick={reset}
            >
              <RotateCcwIcon /> reset
            </Button>
            <Button
              size="icon-sm"
              variant="secondary"
              className="flex-1 md:hidden"
              onClick={reset}
            >
              <RotateCcwIcon />
            </Button>
          </>
        )}
        {hasResult && (
          <>
            <Button
              size="sm"
              variant="secondary"
              className="hidden flex-1 md:inline-flex"
              onClick={copy}
            >
              {isCopied ? <CheckIcon /> : <ClipboardIcon />} copy
            </Button>
            <Button
              size="icon-sm"
              variant="secondary"
              className="flex-1 md:hidden"
              onClick={copy}
            >
              {isCopied ? <CheckIcon /> : <ClipboardIcon />}
            </Button>
          </>
        )}
      </div>
      <>
        <Button
          variant="default"
          className="w-full flex-1 sm:hidden"
          onClick={() => shuffle("round-robin")}
        >
          <ShuffleIcon /> {hasResult ? "again" : "shuffle"}
        </Button>
        <Button
          size="sm"
          variant="default"
          className="hidden flex-1 sm:inline-flex"
          onClick={() => shuffle("round-robin")}
        >
          <ShuffleIcon /> {hasResult ? "again" : "shuffle"}
        </Button>
      </>
    </div>
  );
};
