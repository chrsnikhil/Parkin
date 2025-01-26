import { Car, Clock, CreditCard, MapPin } from "lucide-react"

export default function BentoGrid() {
  const features = [
    {
      title: "Real-time Availability",
      description: "Check parking space availability instantly on your mobile device.",
      icon: Clock,
    },
    {
      title: "Easy Booking with NFC Cards",
      description: "Reserve your spot with just a few taps on our user-friendly app and contactless NFC Cards.",
      icon: CreditCard,
    },
    {
      title: "Multiple Locations",
      description: "Find parking spots across various locations in the city.",
      icon: MapPin,
    },
    {
      title: "Secure Parking",
      description: "Rest easy knowing your vehicle is safe in our monitored parking areas.",
      icon: Car,
    },
  ]

  return (
    <section className="bg-gray-900/50 backdrop-blur-sm py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-100 md:text-4xl">
          Why Choose Our Parking Service?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
            >
              <feature.icon className="mb-4 h-12 w-12 text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-100">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

