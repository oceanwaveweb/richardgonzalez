"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Play, Pause, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CurvedVideoHero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  return (
    <section className="relative w-full h-[100vh] bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mentira.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

        {/* Curved Video Container */}
        <div className="absolute z-50 -bottom-32 right-0 md:right-16 w-[600px] h-[600px]">
          <div className="bg-white rounded-tl-[100px] rounded-br-[100px] p-4 shadow-2xl overflow-hidden">
            <div className="relative aspect-video rounded-tl-[80px] rounded-br-[80px] overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="mentira.png"
                muted
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
              </button>
            </div>
          </div>
        </div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Discover Something Amazing</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Experience the future today with our innovative solutions designed to transform your world.
          </p>
        </div>



        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
