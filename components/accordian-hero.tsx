"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AlbumHero() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [marqueeWidth, setMarqueeWidth] = useState(0)

  // Calculate the width of the marquee container on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <section className="relative w-full h-screen max-h-[800px] overflow-hidden bg-[#e8a0a0]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#e8a0a0]" />
      </div>

      {/* Album artwork and artist */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="max-w-6xl w-full relative">
          {/* Album title */}
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
            LYRICALLY
            <br />
            CHARGED
          </h1>

          {/* Artist image - positioned absolutely */}
          <div className="absolute right-0 bottom-0 md:right-10 md:bottom-10 w-full max-w-[300px] md:max-w-[400px] aspect-[3/4] hidden md:block">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Album artist"
              width={450}
              height={600}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Diagonal marquee banner */}
      <div
        ref={marqueeRef}
        className="absolute top-1/2 right-0 w-[150%] h-[80px] bg-[#c1ff00] transform rotate-[20deg] translate-y-[30%] translate-x-[10%] z-20 overflow-hidden"
      >
        <MarqueeBanner width={marqueeWidth} />
      </div>
    </section>
  )
}

interface MarqueeBannerProps {
  width: number
}

function MarqueeBanner({ width }: MarqueeBannerProps) {
  const [position, setPosition] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  // Calculate the width of a single content item
  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth)
    }
  }, [])

  // Animate the marquee
  useEffect(() => {
    if (!contentWidth) return

    const animate = () => {
      setPosition((prevPos) => {
        // Reset position when it's moved one full content width
        if (Math.abs(prevPos) >= contentWidth) {
          return 0
        }
        return prevPos - 1 // Move 1px per frame
      })
    }

    const animationId = requestAnimationFrame(animate)
    const interval = setInterval(animate, 16) // ~60fps

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(interval)
    }
  }, [contentWidth])

  // Create enough copies to fill the banner
  const copies = Math.ceil(width / 200) + 2 // 200px is approximate width of "NEW ALBUM"

  return (
    <div className="flex items-center h-full whitespace-nowrap" style={{ transform: `translateX(${position}px)` }}>
      <div ref={contentRef} className="flex">
        {Array.from({ length: copies }).map((_, i) => (
          <span key={i} className="text-black text-3xl font-bold px-4">
            NEW ALBUM
          </span>
        ))}
      </div>
      {/* Duplicate the content to create a seamless loop */}
      <div className="flex">
        {Array.from({ length: copies }).map((_, i) => (
          <span key={i} className="text-black text-3xl font-bold px-4">
            NEW ALBUM
          </span>
        ))}
      </div>
    </div>
  )
}
