import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuxeCart",
  description: "Modern e-commerce storefront",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f5f0] text-slate-900">
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
