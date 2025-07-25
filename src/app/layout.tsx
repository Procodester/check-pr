import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devansh Saini | Developer Portfolio",
  description: "The personal portfolio of Devansh Saini, a full-stack web developer showcasing projects and skills.",
  authors: [{ name: "Devansh Saini" }],
  keywords: [
    "Devansh Saini",
    "Portfolio",
    "Frontend Developer",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
  ],
  creator: "Devansh Saini",
};

import { Header } from "@/components/sections";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="robots" href="/robots.txt" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-background text-foreground min-h-dvh grid grid-rows-[auto_1fr_auto]`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1rem_2rem]"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
