import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/SideBar"

// import { BoxesCore } from "./components/ui/background-boxes" // Commenting out the boxes

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
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="relative min-h-screen bg-slate-900">
          {/* Background effect */}
          
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 pl-16">
                <div className="relative w-full">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

