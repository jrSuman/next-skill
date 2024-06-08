import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

// const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <main className="bg-white">
        <TheNavbar />
        <div className="min-h-[50vh]">
        {children}
        </div>
        <TheFooter />
        </main>
       
      </body>
    </html>
  );
}
