import Sidebar from "@/components/content/Sidebar";
import { Navbar } from "@repo/ui_patterns/Navbar";
import type { Metadata } from "next";

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
    <aside suppressHydrationWarning>
      {/* <Navbar /> */}
      <div className="fixed -z-10 w-full h-screen bg-slate-900/50 "></div>
      <Sidebar />
      {children}
    </aside>
  );
}
