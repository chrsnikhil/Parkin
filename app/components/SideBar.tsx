"use client"

import { useState } from "react"
import { Home, Car, Map, Phone, Info, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  const menuItems = [
    { name: "Home", icon: Home, link: "/" },
    { name: "Parking Spots", icon: Car, link: "/spots" },
    { name: "Locations", icon: Map, link: "/locations" },
    { name: "Contact", icon: Phone, link: "/contact" },
    { name: "About", icon: Info, link: "/about" },
  ]

  const bottomMenuItems = [
    { name: "Settings", icon: Settings, link: "/settings" },
    { name: "Logout", icon: LogOut, link: "/logout" },
  ]

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col justify-between border-r border-gray-800 bg-gray-900/80 px-3 py-4 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <div>
        <div className="mb-8 flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-2 rounded-lg transition-all ${isExpanded ? "p-2" : "justify-center p-2"}`}
          >
            <Car className="h-6 w-6 text-blue-400" />
            <span
              className={`overflow-hidden text-gray-100 transition-all duration-300 ${
                isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
              }`}
            >
              ParkEase
            </span>
          </Link>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`flex items-center gap-2 rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-blue-400 ${
                isExpanded ? "justify-start" : "justify-center"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <nav className="space-y-2">
        {bottomMenuItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={`flex items-center gap-2 rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-blue-400 ${
              isExpanded ? "justify-start" : "justify-center"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

