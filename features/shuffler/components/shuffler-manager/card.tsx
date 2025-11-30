import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ShufflerManagerCardProps extends React.ComponentProps<"div"> {
  name: React.ReactNode;
  description: React.ReactNode;
}

export const ShufflerManagerCard = ({
  name,
  description,
  className,
  children,
  ...props
}: ShufflerManagerCardProps) => {
  return (
    <Card
      className={cn("size-full pt-0", className)}
      {...props}
    >
      <CardHeader className="sticky -top-6 z-1 border-b bg-card/75 py-6 shadow-md shadow-foreground/5 backdrop-blur-sm dark:shadow-xl dark:shadow-background/35 dark:backdrop-blur-xs">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-6">
        {children}
      </CardContent>
    </Card>
  );
};
