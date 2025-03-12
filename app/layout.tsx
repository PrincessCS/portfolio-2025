import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "./components/AOSProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AOSProvider>
        <ThemeProvider>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        </ThemeProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
