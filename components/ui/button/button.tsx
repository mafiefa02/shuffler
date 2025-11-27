import { cn } from "@/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui-components/react/button";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

export type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    ref?: React.RefObject<HTMLButtonElement | null>;
  };

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
