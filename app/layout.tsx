import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Awais | Native Android Developer & Mobile Engineer",
  description:
    "Portfolio of Muhammad Awais — Native Android Developer specializing in Kotlin, Jetpack Compose, MVVM Clean Architecture, and high-performance server-side Node.js development.",
  keywords: [
    "Muhammad Awais",
    "Android Developer",
    "Native Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "MVVM",
    "Hilt",
    "JsonLauncher",
    "Signstream",
    "JsonClock",
    "Mobile Engineer",
    "Islamabad Pakistan",
  ],
  authors: [{ name: "Muhammad Awais", url: "https://github.com/sandhu02" }],
  openGraph: {
    title: "Muhammad Awais | Native Android Developer",
    description:
      "Native Android applications using Kotlin, Jetpack Compose, and scalable backend infrastructure.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-[#169458] selection:text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-white">
        {children}
      </body>
    </html>
  );
}
