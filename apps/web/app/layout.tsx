import { Navbar } from "@repo/layouts/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Absolute_footer from "@/components/Landing/Footer/absolute_footer";

export const metadata: Metadata = {
  title: "Apotza Ui Kit",
  description: "Apotza Ui Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Absolute_footer />
      </body>
    </html>
  );
}
