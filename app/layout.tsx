import type { Metadata } from "next";
import "@/lib/styles/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme";
import { fontMono, fontSans } from "@/lib/styles/fonts";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: { default: "shuffler;", template: "%s | shuffler;" },
  description:
    "an app to shuffle or distribute stuff..., randomly shuffle and assign items to people or groups. Perfect for distributing tasks, chores, or topics fairly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${fontSans.className} ${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <div className="flex h-dvh flex-col overflow-hidden bg-muted/10">
              <Header />
              {children}
              <Footer />
            </div>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
