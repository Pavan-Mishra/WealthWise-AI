import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"

// FIXED: Added `display: "swap"` so Vercel doesn't break if Google Fonts fail
const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "WealthWise AI - Future-Proof Money Management",
  description:
    "AI-powered financial management for freelancers and irregular income earners. Predict income patterns, stabilize budgets, and take control of your finances.",
  generator: "v0.app",
  keywords: ["finance", "AI", "budgeting", "freelancer", "money management", "income prediction"],
  authors: [{ name: "WealthWise AI Team" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  )
}
