import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siboria",
  description: "World’s Biggest Anitque Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-gray-100">
      <Nav />
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          
          {children}
        </main>
      
    </body>
  </html>

  );
}
