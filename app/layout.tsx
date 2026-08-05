import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wasi Shah | React Native Developer & AI Enthusiast",
  description:
    "Building modern cross-platform mobile applications with clean architecture, real-time features, and beautiful user experiences. React Native, Firebase, AI Solutions.",
  keywords: [
    "React Native Developer",
    "Mobile App Developer",
    "Firebase",
    "Cross Platform",
    "Expo",
    "AI Solutions",
    "Syed Wasi Ul Hassan",
  ],
  authors: [{ name: "Syed Wasi Ul Hassan" }],
  openGraph: {
    type: "website",
    title: "Syed Wasi Ul Hassan | React Native Developer",
    description:
      "Building modern cross-platform mobile applications with clean architecture, real-time features, and beautiful user experiences.",
    siteName: "Syed Wasi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Wasi Ul Hassan | React Native Developer",
    description:
      "Building modern cross-platform mobile applications with clean architecture, real-time features, and beautiful user experiences.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-dark-900 text-white/80 antialiased font-sans noise"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
