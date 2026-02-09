import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Jagan Reddy | Software Engineer",
    template: "%s | Jagan Reddy",
  },
  description:
    "Sofware Engineer building scalable web applications with React, Python, Node.js and AWS.",

  metadataBase: new URL("https://jaganreddy.vercel.app/"),

  openGraph: {
    title: "Jagan Reddy | Software Engineer",
    description:
      "Software Engineer specializing in end-to-end web applications, APIs, and system design.",
    url: "https://jaganreddy.vercel.app/",
    siteName: "Jagan Reddy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jagan Reddy – Software Engineer",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
