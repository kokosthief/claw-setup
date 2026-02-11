import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClawSetup - Professional OpenClaw AI Agent Setup & Configuration",
  description: "Henry Willmott sets up OpenClaw AI agents for non-technical clients. Virtual setup sessions and premium on-site installations for business automation. Email management, project tracking, messaging integration, and more.",
  keywords: "OpenClaw, AI automation, business automation, AI agent setup, OpenClaw installation, Amsterdam, AI consultant, automation service",
  authors: [{ name: "Henry Willmott" }],
  openGraph: {
    title: "ClawSetup - Professional OpenClaw AI Agent Setup",
    description: "I run OpenClaw for my own business 24/7. Let me set it up for yours.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
