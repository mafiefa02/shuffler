import { cn } from "@/lib/utils";

export const Container = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-400 px-4 py-6 xs:px-8", className)}
      {...props}
    />
  );
};
