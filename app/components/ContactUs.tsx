import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactUs() {
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/1234567890", // Replace with actual WhatsApp number
      icon: Phone,
      className: "hover:text-green-400",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      className: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      className: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      className: "hover:text-purple-400",
    },
    {
      name: "Email",
      href: "mailto:contact@parkease.com",
      icon: Mail,
      className: "hover:text-red-400",
    },
  ]

  return (
    <section className="bg-gray-900/50 backdrop-blur-sm py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-100 md:text-4xl">Get in Touch</h2>
          <p className="mb-12 max-w-2xl text-center text-gray-400">
            Have questions about our parking services? Reach out to us through any of these platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-full bg-gray-800/50 p-4 transition-all hover:bg-gray-700/50 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className={`h-6 w-6 text-gray-400 transition-colors ${link.className}`} />
                <span className="sr-only">{link.name}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

