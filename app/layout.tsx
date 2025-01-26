import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/SideBar"
import { BackgroundBeams } from "./components/ui/background-beams"

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
      <body className={`${inter.className}`}>
        <div className="relative min-h-screen bg-neutral-950">
          <BackgroundBeams className="absolute inset-0" />
          <div className="relative z-10">
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 pl-16">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

