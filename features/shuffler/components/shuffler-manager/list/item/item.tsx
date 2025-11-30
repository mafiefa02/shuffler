import { Card, CardContent } from "@/components/ui/card";
import { ItemDelete } from "./delete";

export const ShufflerManagerItem = ({ item }: { item: string }) => {
  return (
    <Card className="rounded-md border-border/50 py-2 shadow-none hover:border-border">
      <CardContent className="flex items-center justify-between px-3 py-0 text-sm">
        <p>{item}</p>
        <ItemDelete item={item} />
      </CardContent>
    </Card>
  );
};
