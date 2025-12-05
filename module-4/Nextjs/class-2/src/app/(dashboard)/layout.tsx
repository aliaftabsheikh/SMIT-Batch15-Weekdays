import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Dashboard",
  description: "A beautiful dashboard built with Next.js and Tailwind CSS",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-64">
            <Header />
            <main className="p-8 mt-16 min-h-[calc(100vh-4rem)]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
