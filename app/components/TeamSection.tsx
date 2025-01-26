import { AnimatedTooltip } from "./AnimatedTooltip"

const people = [
  {
    id: 1,
    name: "John Smith",
    designation: "CEO & Founder",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "Operations Manager",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    designation: "Tech Lead",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Emma Davis",
    designation: "Customer Relations",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Alex Thompson",
    designation: "Marketing Director",
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
            Our dedicated team of parking professionals is committed to providing you with the best parking experience
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

