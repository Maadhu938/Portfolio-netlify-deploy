import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maadhu Avati | Full-Stack Developer",
  description:
    "Full-stack developer building web and mobile applications. React, Capacitor, Flask, PostgreSQL.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Capacitor",
    "Python",
    "Flask",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: "Maadhu Avati" }],
  openGraph: {
    title: "Maadhu Avati | Full-Stack Developer",
    description:
      "Full-stack developer building web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
