import type React from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL('https://akshdeep.in'),
  title: "Akshdeep Singh | Full Stack Developer",
  description: "The portfolio of Akshdeep Singh: developer, builder, and hackathon winner.",
  keywords: ["Akshdeep Singh", "Portfolio", "Full Stack Developer", "React", "Next.js", "Web Development", "Frontend", "Backend"],
  authors: [{ name: "Akshdeep Singh" }],
  creator: "Akshdeep Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshdeep.in",
    title: "Akshdeep Singh | Full Stack Developer",
    description: "The portfolio of Akshdeep Singh: developer, builder, and hackathon winner.",
    siteName: "Akshdeep Singh Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260325-WA0017-mOlEkWvR9JMI07TVJGau4pq3tGqTk6.jpg",
        width: 1200,
        height: 630,
        alt: "Akshdeep Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshdeep Singh | Full Stack Developer",
    description: "The portfolio of Akshdeep Singh: developer, builder, and hackathon winner.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260325-WA0017-mOlEkWvR9JMI07TVJGau4pq3tGqTk6.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
