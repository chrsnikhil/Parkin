"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { PinContainer } from "./PinContainer"

export default function LocationBar() {
  return (
    <section className="relative w-full bg-gray-800/30 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 flex items-center gap-2">
            <MapPin className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-100">Our Location</h2>
          </div>

          {/* Map Container */}
          <div className="relative h-[450px] w-full overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50">
            <PinContainer
              title="ParkEase Location"
              href="#"
              containerClassName="w-full h-full"
              className="w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/map.png"
                  alt="ParkEase Location Map"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <MapPin className="h-16 w-16 text-blue-400" />
                    <div className="rounded-lg bg-gray-800/80 px-6 py-3 text-lg text-gray-100">
                      Loyola ICAM College of Engineering and Technology
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Contact Information */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Loyola Campus, Nungambakkam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">Details</span>
              <span>•</span>
              <span>Contact:+91 93426 53549</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

