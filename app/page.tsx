import { Container } from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShufflerCount } from "@/features/shuffler/components/shuffler-count";
import { ShufflerResult } from "@/features/shuffler/components/shuffler-result";
import { ListIcon, UsersIcon } from "lucide-react";
import { Suspense } from "react";
import { ShufflerCard } from "./_components/shuffler-card";

export default function Home() {
  return (
    <Container className="flex w-full flex-1 flex-col overflow-y-auto">
      <div className="flex flex-1 flex-col gap-4">
        <Suspense>
          <div className="hidden flex-1 items-center gap-4 xl:flex">
            <ShufflerCard
              name="assignees"
              title="people or groups;"
              description="who will receive the items?"
              placeholder="e.g., tim kotak, zahra, wicaksono..."
            />
            <ShufflerCard
              name="assignments"
              title="items to assign;"
              description="what do you want to shuffle and distribute?"
              placeholder="e.g., clean kitchen, buy groceries..."
            />
          </div>
        </Suspense>

        <Suspense>
          <Tabs
            className="flex-1 xl:hidden"
            defaultValue="assignee"
          >
            <TabsList className="w-full">
              <TabsTrigger
                className="group"
                value="assignee"
              >
                <UsersIcon /> groups; <ShufflerCount type="assignees" />
              </TabsTrigger>
              <TabsTrigger
                className="group"
                value="assignment"
              >
                <ListIcon /> items; <ShufflerCount type="assignments" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="assignee">
              <ShufflerCard
                name="assignees"
                title="people or groups;"
                description="who will receive the items?"
                placeholder="e.g., tim kotak, zahra, wicaksono..."
              />
            </TabsContent>
            <TabsContent value="assignment">
              <ShufflerCard
                name="assignments"
                title="items to assign;"
                description="what do you want to shuffle and distribute?"
                placeholder="e.g., clean kitchen, buy groceries..."
              />
            </TabsContent>
          </Tabs>
        </Suspense>

        <Card>
          <Suspense>
            <ShufflerResult.Provider>
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <ShufflerResult.Header>
                    <CardTitle>shuffler&apos;s result;</CardTitle>
                    <CardDescription>
                      the result is as shown below
                    </CardDescription>
                  </ShufflerResult.Header>
                  <ShufflerResult.Actions className="hidden lg:flex" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ShufflerResult.Meta className="hidden flex-wrap overflow-x-auto xxs:flex lg:hidden" />
                <ShufflerResult.Content />
                <ShufflerResult.Meta className="hidden lg:flex" />
                <ShufflerResult.Actions className="lg:hidden" />
              </CardContent>
            </ShufflerResult.Provider>
          </Suspense>
        </Card>
      </div>
    </Container>
  );
}
