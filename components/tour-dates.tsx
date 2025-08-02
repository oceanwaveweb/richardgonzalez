"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Ticket } from "lucide-react"

interface EventDate {
  id: number
  date: string
  venue: string
  location: string
  status: "available" | "limited" | "sold out"
}

export function EventDates() {
  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    // Fetch a random concert venue image from Unsplash
    setBackgroundImage("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2074&auto=format&fit=crop")
  }, [])

  const EventDates: EventDate[] = [
    {
      id: 1,
      date: "May 15, 2025",
      venue: "Madison Square Garden",
      location: "New York, NY",
      status: "limited",
    },
    {
      id: 2,
      date: "May 22, 2025",
      venue: "The Forum",
      location: "Los Angeles, CA",
      status: "available",
    },
    {
      id: 3,
      date: "June 5, 2025",
      venue: "United Center",
      location: "Chicago, IL",
      status: "available",
    },
    {
      id: 4,
      date: "June 12, 2025",
      venue: "O2 Arena",
      location: "London, UK",
      status: "sold out",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Dates</h2>
          <p className="text-gray-400 max-w-2xl">Catch Rock Star live in concert at these upcoming shows.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 md:gap-6"
        >
          {EventDates.map((Event) => (
            <motion.div
              key={Event.id}
              variants={item}
              className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-5 w-5 text-red-500" />
                    <span>{Event.date}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{Event.venue}</h3>
                    <div className="flex items-center gap-1 text-gray-400 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{Event.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    disabled={Event.status === "sold out"}
                    variant={Event.status === "sold out" ? "outline" : "default"}
                    className={
                      Event.status === "sold out"
                        ? "bg-transparent border-gray-700 text-gray-400"
                        : Event.status === "limited"
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-red-600 hover:bg-red-700"
                    }
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    {Event.status === "sold out"
                      ? "Sold Out"
                      : Event.status === "limited"
                        ? "Limited Tickets"
                        : "Get Tickets"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
