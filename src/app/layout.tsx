import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "../components/static/main-nav";
import Footer from "@/components/static/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Cahaya Mercusuar Indonesia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
