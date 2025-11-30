import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResponsiveActionProps = ButtonProps & {
  icon: React.ElementType;
  label: string;
  hideLabelOnMobile?: boolean;
};

export const ResponsiveAction = ({
  icon: Icon,
  label,
  hideLabelOnMobile = true,
  className,
  children,
  ...props
}: ResponsiveActionProps) => {
  return (
    <Button
      size="sm"
      className={cn(
        "flex items-center gap-2",
        hideLabelOnMobile && "px-2 md:px-3",
        className,
      )}
      {...props}
    >
      <Icon />
      <span
        className={cn(
          hideLabelOnMobile ? "hidden md:inline-block" : "inline-block",
        )}
      >
        {label}
      </span>
      {children}
    </Button>
  );
};
