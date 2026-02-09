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
    default: "Jagan Reddy | Full Stack Developer",
    template: "%s | Jagan Reddy",
  },
  description:
    "Full Stack Developer building production-ready web apps, auth systems & APIs with React, Next.js, FastAPI, Node.js, AWS. View my projects & experience.",

  authors: [{ name: "Jagan Reddy" }],
  creator: "Jagan Reddy",

  metadataBase: new URL("https://jaganreddy.vercel.app"),

  openGraph: {
    title: "Jagan Reddy | Full Stack Developer",
    description:
      "Building production-ready authentication systems, data pipelines & scalable APIs. React • Next.js • FastAPI • Node.js • AWS. Check out my work.",
    url: "https://jaganreddy.vercel.app",
    siteName: "Jagan Reddy Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jaganreddy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jagan Reddy – Full Stack Developer specializing in web applications and APIs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jagan Reddy | Full Stack Developer",
    description:
      "Building auth systems, data pipelines & APIs that scale. React • FastAPI • Node.js • AWS. Full Stack Developer ready to ship.",
    images: ["https://jaganreddy.vercel.app/og-image.png"],
    creator: "@jaganreddy", // Add your Twitter handle if you have one
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

  alternates: {
    canonical: "https://jaganreddy.vercel.app",
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
