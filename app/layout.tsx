import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Russell Walton",
  description: "computer science student. sailor. manager on duty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-porcelain text-ink font-body antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
