"use client";

import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ClipboardIcon,
  RotateCcwIcon,
  ShuffleIcon,
} from "lucide-react";
import { ResponsiveAction } from "./actions/responsive";
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
        hasResult && "flex-col sm:flex-row",
        "flex gap-2 sm:items-center",
        className,
      )}
      {...props}
    >
      <div className={cn(hasResult && "flex-1", "flex items-center gap-2")}>
        <ShufflerResultSettings className={cn(hasResult && "flex-1")} />

        {hasResult && (
          <>
            <ResponsiveAction
              icon={RotateCcwIcon}
              label="reset"
              onClick={reset}
              className="flex-1"
              variant="secondary"
            />
            <ResponsiveAction
              icon={isCopied ? CheckIcon : ClipboardIcon}
              label="copy"
              onClick={copy}
              className="flex-1"
              variant="secondary"
            />
          </>
        )}
      </div>

      <ResponsiveAction
        variant="default"
        icon={ShuffleIcon}
        label={hasResult ? "again" : "shuffle"}
        hideLabelOnMobile={false}
        onClick={() => shuffle("round-robin")}
        className={cn(
          hasResult ? "sm:flex-1" : "flex-1",
          "w-full justify-center font-medium sm:w-auto",
        )}
      />
    </div>
  );
};
