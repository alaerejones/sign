import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "../components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sinocle Nigeria Limited",
  description: "Welcome to Sinocle Nigeria Limited, a leading name in construction and real estate development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
