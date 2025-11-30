import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ShufflerTabList } from "./_components/shuffler-tab-list";

export default function LoadingHome() {
  return (
    <Container className="flex w-full flex-1 flex-col overflow-y-auto">
      <div className="flex flex-1 flex-col gap-4">
        <div className="hidden flex-1 items-center gap-4 xl:flex">
          <Skeleton className="size-full" />
          <Skeleton className="size-full" />
        </div>

        <Tabs
          className="flex-1 xl:hidden"
          defaultValue="assignee"
        >
          <ShufflerTabList />
          <TabsContent value="assignee">
            <Skeleton className="size-full" />
          </TabsContent>
          <TabsContent value="assignment">
            <Skeleton className="size-full" />
          </TabsContent>
        </Tabs>

        <Skeleton className="h-56" />
      </div>
    </Container>
  );
}
