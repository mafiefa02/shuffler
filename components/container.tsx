import { cn } from "@/lib/utils";

export const Container = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-400 px-8 py-6", className)}
      {...props}
    />
  );
};
