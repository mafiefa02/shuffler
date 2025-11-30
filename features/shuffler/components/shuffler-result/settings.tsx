"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SettingsIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { ShuffleMode, ShuffleStrategyType } from "../../types";
import { useShufflerResult } from "./context";

type Items<T> = { value: T; label: string };

const STRATEGIES: Items<ShuffleStrategyType>[] = [
  { value: "round-robin", label: "round-robin" },
  { value: "greedy", label: "greedy" },
  { value: "random", label: "pure random" },
  { value: "sequential", label: "sequential" },
];

const MODES: Items<ShuffleMode>[] = [
  { value: "by-task", label: "tasks" },
  { value: "by-assignee", label: "assignees" },
];

export const ShufflerResultSettings = ({
  className,
  ...props
}: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, setMode, strategy, setStrategy } = useShufflerResult();

  const [localMode, setLocalMode] = useState<ShuffleMode>(mode);
  const [localStrategy, setLocalStrategy] =
    useState<ShuffleStrategyType>(strategy);

  const handleSave = useCallback(() => {
    setMode(localMode);
    setStrategy(localStrategy);
    setIsOpen(false);
  }, [localMode, localStrategy, setMode, setStrategy]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger
        render={
          <Button
            size="icon-sm"
            variant="secondary"
            className={cn("shrink-0", className)}
            {...props}
          />
        }
      >
        <SettingsIcon />
        <span className="sr-only">Settings</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>shuffler; settings</DialogTitle>
          <DialogDescription>
            tune your shuffler to your likings
          </DialogDescription>
        </DialogHeader>

        <FieldSet>
          <Field>
            <FieldLabel>strategy</FieldLabel>
            <Select
              value={localStrategy}
              onValueChange={(val) =>
                setLocalStrategy(val as ShuffleStrategyType)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="select shuffle strategies..." />
              </SelectTrigger>
              <SelectPositioner>
                <SelectContent>
                  {STRATEGIES.map((s) => (
                    <SelectItem
                      key={s.value}
                      value={s.value}
                    >
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Select>
          </Field>

          <Field>
            <FieldLabel>shuffle by</FieldLabel>
            <Select
              value={localMode}
              onValueChange={(val) => setLocalMode(val as ShuffleMode)}
            >
              <SelectTrigger>
                <SelectValue placeholder="select shuffle mode..." />
              </SelectTrigger>
              <SelectPositioner>
                <SelectContent>
                  {MODES.map((m) => (
                    <SelectItem
                      key={m.value}
                      value={m.value}
                    >
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Select>
            <FieldDescription>
              distribute by tasks or assignees
            </FieldDescription>
          </Field>
        </FieldSet>

        <DialogFooter>
          <DialogClose render={<Button variant="secondary" />}>
            cancel
          </DialogClose>
          <Button
            onClick={handleSave}
            size="sm"
          >
            save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
