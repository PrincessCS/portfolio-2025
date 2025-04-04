import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "./components/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-2025-9648.vercel.app"),
  title: "Chidera Odo | Web Developer",
  description:
    "Explore the portfolio of Chidera Odo, a skilled frontend web developer. See projects, skills, and get in touch!",
  icons: {
    icon: "/code.png",
  },
  openGraph: {
    title: "Chidera Odo | Web Developer",
    description:
      "Explore the portfolio of Chidera Odo, a skilled frontend web developer. See projects, skills, and get in touch!",
    images: [
      {
        url: "/code.png",
        width: 1200,
        height: 630,
        alt: "Chidera Odo Portfolio Image",
      },
    ],
    siteName: "Chidera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidera Odo | Web Developer",
    description:
      "Explore the portfolio of Chidera Odo, a skilled frontend web developer.",
    images: [
      {
        url: "/code.png",
        width: 1200,
        height: 630,
        alt: "Chidera Odo Portfolio Image",
      },
    ],
  },
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
