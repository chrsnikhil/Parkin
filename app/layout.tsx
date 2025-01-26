import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/Sidebar"
import { AuroraBackground } from "./components/AuroraBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ParkEase - Find Your Perfect Parking Spot",
  description: "Check real-time availability and book your parking space in seconds",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <div className="relative min-h-screen overflow-hidden">
          <AuroraBackground>
            <div className="relative z-10">
              <div className="flex">
                <Sidebar />
                <main className="flex-1 pl-16">{children}</main>
              </div>
            </div>
          </AuroraBackground>
        </div>
      </body>
    </html>
  )
}

