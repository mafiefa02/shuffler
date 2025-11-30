import { cn } from "@/lib/utils";
import { useRender } from "@base-ui-components/react";
import { VariantProps } from "class-variance-authority";
import { badgeVariants } from "./variants";

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { render?: useRender.RenderProp };

export function Badge({
  className,
  variant,
  render = <span />,
  ...props
}: BadgeProps) {
  return useRender({
    render,
    props: {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props,
    },
  });
}
