import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import GlobalParticles from "./components/GlobalParticles"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: {
    default: "Jagan Reddy Portfolio",
    template: "%s | Jagan Reddy Portfolio",
  },
  description:
    "Full-stack software engineer passionate about building reliable, scalable web applications and solving real-world problems. Check out my work here.",

  authors: [{ name: "Jagan Reddy" }],
  creator: "Jagan Reddy",

  metadataBase: new URL("https://jaganreddy.vercel.app"),

  generator: "Next.js",
  applicationName: "Jagan Reddy Portfolio",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "Jagan Reddy",
    description:
      "Full-stack software engineer passionate about building reliable, scalable web applications and solving real-world problems. Check out my work here.",
    url: "https://jaganreddy.vercel.app",
    siteName: "Jagan Reddy Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Website.png",
        width: 1200,
        height: 630,
        alt: "Image of Website homepage showing Jagan Reddy's portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jagan Reddy | Full Stack Developer",
    description:
      "Full-stack software engineer passionate about building reliable, scalable web applications and solving real-world problems. Check out my work here.",
    images: ["/Website.png"],
    creator: "@jaganreddy",
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
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {/* Single persistent particle canvas for the whole app — mounted
            once here so it never restarts as sections scroll past. */}
        <GlobalParticles />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
