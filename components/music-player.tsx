"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Maximize2,
  Minimize2,
  ListMusic,
} from "lucide-react"

interface Track {
  id: number
  title: string
  artist: string
  duration: number
  file: string
  image: string
}

export function MusicPlayer() {
  const [expanded, setExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const intervalRef = useRef<NodeJS.Timeout>()

  const tracks: Track[] = [
    {
      id: 1,
      title: "Electric Dreams",
      artist: "Rock Star",
      duration: 225, // 3:45
      file: "/electric-dreams.mp3", // This would be a real MP3 file in the public folder
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Midnight Rider",
      artist: "Rock Star",
      duration: 252, // 4:12
      file: "/midnight-rider.mp3", // This would be a real MP3 file in the public folder
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "Echoes of Tomorrow",
      artist: "Rock Star",
      duration: 330, // 5:30
      file: "/echoes-of-tomorrow.mp3", // This would be a real MP3 file in the public folder
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const currentTrackData = tracks[currentTrack]

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle track change
  const changeTrack = (direction: "next" | "prev") => {
    let newTrack = currentTrack

    if (direction === "next") {
      newTrack = (currentTrack + 1) % tracks.length
    } else {
      newTrack = (currentTrack - 1 + tracks.length) % tracks.length
    }

    setCurrentTrack(newTrack)
    setCurrentTime(0)

    // Play the new track automatically
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 100)
    }
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }

    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume / 100
      } else {
        audioRef.current.volume = 0
      }
      setIsMuted(!isMuted)
    }
  }

  // Handle seek
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      const newTime = value[0]
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  // Update progress bar
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  // Handle track end
  const handleTrackEnd = () => {
    changeTrack("next")
  }

  // Select track from playlist
  const selectTrack = (index: number) => {
    setCurrentTrack(index)
    setCurrentTime(0)
    setShowPlaylist(false)

    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 100)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrackData.file}
        onEnded={handleTrackEnd}
        onTimeUpdate={() => audioRef.current && setCurrentTime(audioRef.current.currentTime)}
      />

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`${expanded ? "h-[calc(100vh-80px)]" : "h-20"} bg-black/90 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="container mx-auto h-full">
          {/* Compact Player */}
          <div className="h-20 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <img
                src={currentTrackData.image || "/placeholder.svg"}
                alt={currentTrackData.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="hidden sm:block">
                <div className="font-medium">{currentTrackData.title}</div>
                <div className="text-sm text-gray-400">{currentTrackData.artist}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-1">
                <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
                <Slider
                  value={[currentTime]}
                  min={0}
                  max={currentTrackData.duration}
                  step={1}
                  onValueChange={handleSeek}
                  className="w-32 lg:w-64"
                />
                <span className="text-xs text-gray-400">{formatTime(currentTrackData.duration)}</span>
              </div>

              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={() => changeTrack("prev")}>
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full h-10 w-10"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => changeTrack("next")}>
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              <div className="hidden lg:flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="w-24"
                />
              </div>

              <Button variant="ghost" size="icon" onClick={() => setShowPlaylist(!showPlaylist)}>
                <ListMusic className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)}>
                {expanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Expanded Player */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[calc(100%-80px)] flex flex-col md:flex-row gap-8 p-6"
              >
                <div className="flex-1 flex flex-col items-center justify-center">
                  <motion.img
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1, rotate: isPlaying ? 360 : 0 }}
                    transition={{
                      scale: { duration: 0.5 },
                      rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    }}
                    src={currentTrackData.image}
                    alt={currentTrackData.title}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
                  />

                  <div className="mt-8 text-center">
                    <h2 className="text-2xl font-bold">{currentTrackData.title}</h2>
                    <p className="text-gray-400">{currentTrackData.artist}</p>
                  </div>

                  <div className="w-full max-w-md mt-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
                      <span className="text-sm text-gray-400">{formatTime(currentTrackData.duration)}</span>
                    </div>
                    <Slider
                      value={[currentTime]}
                      min={0}
                      max={currentTrackData.duration}
                      step={1}
                      onValueChange={handleSeek}
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <Button variant="ghost" size="icon">
                      <Shuffle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => changeTrack("prev")}>
                      <SkipBack className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full h-16 w-16"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => changeTrack("next")}>
                      <SkipForward className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Repeat className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 mt-8">
                    <Button variant="ghost" size="icon" onClick={toggleMute}>
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                    <Slider
                      value={[isMuted ? 0 : volume]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={handleVolumeChange}
                      className="w-32"
                    />
                  </div>
                </div>

                <div className="md:w-80 flex-shrink-0 hidden md:block">
                  <h3 className="text-xl font-bold mb-4">Playlist</h3>
                  <div className="space-y-2">
                    {tracks.map((track, index) => (
                      <motion.div
                        key={track.id}
                        whileHover={{ x: 5 }}
                        className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                          currentTrack === index ? "bg-red-600/20 text-red-500" : "hover:bg-gray-800"
                        }`}
                        onClick={() => selectTrack(index)}
                      >
                        <div className="relative">
                          <img
                            src={track.image || "/placeholder.svg"}
                            alt={track.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                          {currentTrack === index && isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded">
                              <div className="flex gap-0.5">
                                <motion.div
                                  animate={{ height: [4, 12, 4] }}
                                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                                  className="w-1 bg-red-500 rounded-full"
                                />
                                <motion.div
                                  animate={{ height: [4, 16, 4] }}
                                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                                  className="w-1 bg-red-500 rounded-full"
                                />
                                <motion.div
                                  animate={{ height: [4, 8, 4] }}
                                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                                  className="w-1 bg-red-500 rounded-full"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{track.title}</div>
                          <div className="text-sm text-gray-400">{formatTime(track.duration)}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Playlist */}
          <AnimatePresence>
            {showPlaylist && !expanded && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-x-0 bottom-20 bg-black/90 backdrop-blur-md border-t border-gray-800 max-h-[50vh] overflow-y-auto z-50"
              >
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-4">Playlist</h3>
                  <div className="space-y-2">
                    {tracks.map((track, index) => (
                      <div
                        key={track.id}
                        className={`flex items-center gap-3 p-2 rounded-md ${
                          currentTrack === index ? "bg-red-600/20 text-red-500" : ""
                        }`}
                        onClick={() => selectTrack(index)}
                      >
                        <img
                          src={track.image || "/placeholder.svg"}
                          alt={track.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <div className="font-medium">{track.title}</div>
                          <div className="text-sm text-gray-400">{formatTime(track.duration)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
