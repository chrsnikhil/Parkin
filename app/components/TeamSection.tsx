import { AnimatedTooltip } from "./AnimatedTooltip"

const people = [
  {
    id: 1,
    name: "Therlaye",
    designation: "THerla",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Blank",
    designation: "THerla",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Devinson",
    designation: "Marketing and Business Outreach",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Chris Nikhil",
    designation: "Development and R&D",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Zenith Joshua",
    designation: "R&D",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TeamSection() {
  return (
    <section className="relative w-full bg-gray-900/50 backdrop-blur-sm py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-100 md:text-4xl">Meet Our Team</h2>
          <p className="mb-12 max-w-2xl text-gray-400">
            Our team of enthusiastic students are committed to providing you with the best parking experience
            possible.
          </p>
          <div className="w-full max-w-3xl mx-auto">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
    </section>
  )
}

