"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {TypewriterEffect} from "./TypewriterEffect"

export default function Hero() {
  const words = ["Find Your Perfect Parking Spot", "Book in Seconds", "Park with Confidence", "Save Time and Money"]

  return (
    <section className="relative py-24 md:py-32 bg-gray-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-100 md:text-6xl">
            <TypewriterEffect 
              words={words}
              className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={1000}
            />
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Check real-time availability and book your space in seconds with our mobile app.
          </p>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}