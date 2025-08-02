"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SocialIcon } from "@/components/social-icon"
import { ExternalLink } from "lucide-react"

export default function EventPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const EventDates = [
    {
      date: "MAY 15, 2025",
      venue: "MADISON SQUARE GARDEN",
      location: "NEW YORK, NY",
      ticketLink: "#",
      vipLink: "#",
    },
    {
      date: "MAY 22, 2025",
      venue: "THE FORUM",
      location: "LOS ANGELES, CA",
      ticketLink: "#",
      vipLink: "#",
    },
    {
      date: "JUNE 5, 2025",
      venue: "UNITED CENTER",
      location: "CHICAGO, IL",
      ticketLink: "#",
      vipLink: "#",
    },
    {
      date: "JUNE 12, 2025",
      venue: "O2 ARENA",
      location: "LONDON, UK",
      ticketLink: "#",
      vipLink: "#",
    },
    {
      date: "JUNE 20, 2025",
      venue: "ACCOR ARENA",
      location: "PARIS, FR",
      ticketLink: "#",
      vipLink: "#",
    },
    {
      date: "JUNE 28, 2025",
      venue: "MERCEDES-BENZ ARENA",
      location: "BERLIN, DE",
      ticketLink: "#",
      vipLink: "#",
    },
  ]

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center w-full p-6">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="tracking-widest text-white text-xl font-light"
          >
            <h1 className="flex space-x-4">
              <span>R</span>
              <span>O</span>
              <span>C</span>
              <span>K</span>
              <span className="mx-4"></span>
              <span>S</span>
              <span>T</span>
              <span>A</span>
              <span>R</span>
            </h1>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex space-x-4"
        >
          <SocialIcon type="apple" />
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="spotify" />
          <SocialIcon type="twitter" />
          <SocialIcon type="youtube" />
          <SocialIcon type="email" />
        </motion.div>
      </header>

      {/* Vertical Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="fixed z-10 right-6 top-1/2 transform -translate-y-1/2 text-white"
      >
        <ul className="flex flex-col space-y-6 items-center">
          <li className="vertical-nav-item">
            <Link
              href="/music"
              className="writing-mode-vertical text-sm tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              MUSIC
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/Event"
              className="writing-mode-vertical text-sm tracking-widest font-light text-orange-500 transition-colors"
            >
              Event
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/shop"
              className="writing-mode-vertical text-sm tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              SHOP
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/videos"
              className="writing-mode-vertical text-sm tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              VIDEOS
            </Link>
          </li>
        </ul>
      </motion.nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-light tracking-widest mb-12">Event DATES</h2>

          <div className="space-y-8">
            {EventDates.map((Event, index) => (
              <motion.div
                key={Event.date + Event.venue}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="border-b border-gray-800 pb-8 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
                  <div>
                    <p className="text-sm font-light">{Event.date}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wider group-hover:text-orange-500 transition-colors">
                      {Event.venue}
                    </h3>
                    <p className="text-sm text-gray-400">{Event.location}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                    <a
                      href={Event.ticketLink}
                      className="inline-flex items-center text-sm tracking-wider hover:text-orange-500 transition-colors"
                    >
                      TICKETS
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                    <a
                      href={Event.vipLink}
                      className="inline-flex items-center text-sm tracking-wider hover:text-orange-500 transition-colors"
                    >
                      VIP
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-xl font-light tracking-widest mb-6">VIP PACKAGES</h3>
          <p className="text-sm text-gray-400 max-w-2xl">
            Enhance your concert experience with exclusive VIP packages including premium seating, merchandise bundles,
            early entry, and meet & greet opportunities with Rock Star. merchandise bundles, early entry, and meet &
            greet opportunities with Rock Star.
          </p>
          <a href="#" className="inline-flex items-center text-sm tracking-wider text-orange-500 hover:underline mt-4">
            LEARN MORE ABOUT VIP PACKAGES
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-xl font-light tracking-widest mb-6">Event NEWSLETTER</h3>
          <p className="text-sm text-gray-400 max-w-2xl mb-6">
            Sign up to receive Event announcements and exclusive pre-sale access.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent border-b border-gray-700 py-2 px-0 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button
              type="submit"
              className="text-sm tracking-wider py-2 px-6 border border-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
