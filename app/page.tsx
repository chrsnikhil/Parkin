import Hero from "./components/Hero"
import BentoGrid from "./components/BentoGrid"
import LocationBar from "./components/LocationBar"
import TeamSection from "./components/TeamSection"
import ContactUs from "./components/ContactUs"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BentoGrid />
      <LocationBar />
      <TeamSection />
      <ContactUs />
    </div>
  )
}
