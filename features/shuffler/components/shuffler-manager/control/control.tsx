import { cn } from "@/lib/utils";
import { ShufflerManagerControlProvider } from "./provider";

export const ShufflerManagerControl = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <ShufflerManagerControlProvider>
      <div
        className={cn("flex items-center gap-2", className)}
        {...props}
      />
    </ShufflerManagerControlProvider>
  );
};
