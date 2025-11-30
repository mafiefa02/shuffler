import { Card, CardContent } from "@/components/ui/card";

export const ShufflerResultContentEmpty = () => {
  return (
    <Card className="border-none bg-muted/40">
      <CardContent className="font-mono text-sm leading-relaxed">
        <p>click `shuffle` to get the result!</p>
      </CardContent>
    </Card>
  );
};
