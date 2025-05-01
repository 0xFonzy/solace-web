import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Solace Advocates",
  description: "Find the right advocate for you",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${lato.variable} ${merriweather.variable} font-lato text-white min-h-screen flex flex-col`}
      >
        <HeroUIProvider>
          <ToastProvider />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
