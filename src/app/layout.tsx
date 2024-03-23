import "../styles/globals.css";
import type { Metadata } from "next";
import { lexend } from "@/lib/font";
import { cn } from "@/lib/utils";
import NavBar from "@/components/my-ui/navbar";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.className}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          lexend.variable
        )}
      >
        <Toaster/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
