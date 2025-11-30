import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShufflerCount } from "@/features/shuffler/components/shuffler-count";
import { cn } from "@/lib/utils";
import { Tabs } from "@base-ui-components/react";
import { ListIcon, UsersIcon } from "lucide-react";
import { Suspense } from "react";

export const ShufflerTabList = ({ className, ...props }: Tabs.List.Props) => {
  return (
    <TabsList
      className={cn("w-full", className)}
      {...props}
    >
      <TabsTrigger
        className="group"
        value="assignee"
      >
        <UsersIcon /> groups;{" "}
        <Suspense>
          <ShufflerCount type="assignees" />
        </Suspense>
      </TabsTrigger>
      <TabsTrigger
        className="group"
        value="assignment"
      >
        <ListIcon /> items;{" "}
        <Suspense>
          <ShufflerCount type="assignments" />
        </Suspense>
      </TabsTrigger>
    </TabsList>
  );
};
