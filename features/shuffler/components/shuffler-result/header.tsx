import { cn } from "@/lib/utils";

export const ShufflerResultHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] gap-2",
        className,
      )}
      {...props}
    />
  );
};
