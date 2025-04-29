import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${lato.variable} ${merriweather.variable} font-lato text-white min-h-screen`}
      >
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
