"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { useCallback } from "react";
import { useShufflerManager } from "./context";
import { useShufflerManagerControl } from "./control";

type ShufflerManagerNewInputProps = InputPrimitive.Props &
  React.RefAttributes<HTMLInputElement>;

export const ShufflerManagerNewInput = ({
  className,
  ...props
}: ShufflerManagerNewInputProps) => {
  const [, setQuery] = useShufflerManager();
  const { value, setValue } = useShufflerManagerControl();

  const handleChange = useCallback(
    (value: string) => setValue(value),
    [setValue],
  );

  const handleKeyDown = useCallback(
    (value: string) => {
      setQuery((old) => {
        const curr = new Set(old);
        if (value !== "") curr.add(value);
        return Array.from(curr);
      });
      setValue("");
    },
    [setQuery, setValue],
  );

  return (
    <Input
      type="text"
      className={cn("flex-1", className)}
      value={value}
      onChange={(e) => handleChange(e.currentTarget.value)}
      onKeyDown={(e) =>
        e.key === "Enter" && handleKeyDown(e.currentTarget.value)
      }
      {...props}
    />
  );
};
