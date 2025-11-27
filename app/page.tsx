import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <p>Hello, world!</p>
        <Button className="w-full">Hello!</Button>
      </div>
    </div>
  );
}
