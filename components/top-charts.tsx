"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Song {
  id: number
  title: string
  album: string
  duration: string
  plays: string
  image: string
}

export function TopCharts() {
  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    // Fetch a random music studio image from Unsplash
    setBackgroundImage("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop")
  }, [])

  const songs: Song[] = [
    {
      id: 1,
      title: "Electric Dreams",
      album: "Neon Nights",
      duration: "3:45",
      plays: "2.4M",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "Midnight Rider",
      album: "Neon Nights",
      duration: "4:12",
      plays: "1.8M",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "Echoes of Tomorrow",
      album: "Cosmic Journey",
      duration: "5:30",
      plays: "1.2M",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      title: "Neon Lights",
      album: "Neon Nights",
      duration: "3:22",
      plays: "950K",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      title: "Stellar Voyage",
      album: "Cosmic Journey",
      duration: "4:55",
      plays: "820K",
      image: "/placeholder.svg?height=80&width=80",
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
        <div className="absolute inset-0 bg-black/80" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Charts</h2>
          <p className="text-gray-400 max-w-2xl">
            The most popular tracks that have been dominating the charts worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
        >
          <div className="grid grid-cols-[auto_1fr_auto_auto] md:grid-cols-[auto_1fr_auto_auto_auto] gap-4 p-4 font-medium text-gray-400 border-b border-gray-800">
            <div className="w-10">#</div>
            <div>Title</div>
            <div className="hidden md:block">Album</div>
            <div>Duration</div>
            <div className="w-10"></div>
          </div>

          {songs.map((song) => (
            <motion.div
              key={song.id}
              variants={item}
              className="grid grid-cols-[auto_1fr_auto_auto] md:grid-cols-[auto_1fr_auto_auto_auto] gap-4 p-4 items-center hover:bg-white/5 transition-colors group"
            >
              <div className="w-10 text-gray-500">{song.id}</div>
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={song.image || "/placeholder.svg"}
                  alt={song.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="truncate">
                  <div className="font-medium truncate">{song.title}</div>
                  <div className="text-sm text-gray-500 md:hidden">{song.album}</div>
                </div>
              </div>
              <div className="hidden md:block text-gray-500">{song.album}</div>
              <div className="text-gray-500">{song.duration}</div>
              <div className="w-10 flex justify-end">
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
