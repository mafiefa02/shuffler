import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex-1 place-content-center overflow-y-auto">
      {children}
    </div>
  );
}
