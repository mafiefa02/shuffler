import type { Metadata } from "next";
import "@/lib/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import { fontMono, fontSans } from "@/lib/styles/fonts";

export const metadata: Metadata = {
  title: "shuffler;",
  description: "an app to shuffle or distribute stuff...",
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
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
