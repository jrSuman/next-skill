import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheNavbar from "@/components/TheNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Skills Academy",
  description: "Next Skill Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-slate-50">
        {/* <TheNavbar /> */}
        {children}
        </main>
       
      </body>
    </html>
  );
}
