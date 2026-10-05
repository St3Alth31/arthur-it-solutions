import type { Metadata, Viewport } from "next"
import { Big_Shoulders, Hanken_Grotesk } from "next/font/google"

import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const display = Big_Shoulders({ subsets: ["latin"], axes: ["opsz"], variable: "--ff-display" })
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--ff-body" })

export const metadata: Metadata = {
  title: "Arthur I.T Solutions | Security systems and backup power | Blantyre & Lilongwe",
  description:
    "CCTV and IP cameras, access control, gate motors, fire alarms, electric fencing, power backup and solar. Installed in Blantyre and Lilongwe, 7 days a week. Prices from K500,000.",
}

export const viewport: Viewport = {
  themeColor: "#0d1730",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
