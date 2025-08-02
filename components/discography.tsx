"use client";

import type React from "react";

import Link from "next/link";
import { SocialIcon } from "@/components/social-icon";
import { AirplayIcon as Spotify, Apple, Youtube } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ExternalLink,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Sample artist data with Spotify preview URLs
const artistData = {
  name: "Richard Gonzalez",
  background:
    "https://images.unsplash.com/photo-1743485029392-36ffd7621f22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  albums: [
    {
      id: "mentira",
      title: "Mentira",
      year: 2025,
      cover: "/mentira.png",
      spotifyId: "6AYhdkvAxAsl1cAQc59sxH",
      tracks: [
        {
          title: "Mentira",
          duration: "4:00",
          previewUrl:
            "https://open.spotify.com/embed/track/4Oskr6ugD83CDetiO14oFv?utm_source=generator",
          spotifyId: "4Oskr6ugD83CDetiO14oFv",
        },
        {
          title: "Charlie Brown",
          duration: "4:45",
          previewUrl:
            "https://p.scdn.co/mp3-preview/9108d30b5fe2c9690e4d1ed13c47c4b854b3a670",
          spotifyId: "5d6Mjuu2uCGLrX5Gz3H6Eu",
        },
        {
          title: "Every Teardrop Is a Waterfall",
          duration: "4:00",
          previewUrl:
            "https://p.scdn.co/mp3-preview/7a5b4ebb202156df30c7670b5f4ee59a9dd38be8",
          spotifyId: "2FbO5xKlH8U11RA9JZ1PJr",
        },
      ],
    },
    {
      id: "sin-ti-no-hay-fiesta",
      title: "Sin Ti No Hay Fiesta",
      year: 2023,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6AYhdkvAxAsl1cAQc59sxH",
      tracks: [
        {
          title: "Sin Ti No Hay Fiesta",
          duration: "3:50",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder1",
          spotifyId: "placeholder1",
        },
        {
          title: "Track 2",
          duration: "4:10",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder2",
          spotifyId: "placeholder2",
        },
        {
          title: "Track 3",
          duration: "3:45",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder3",
          spotifyId: "placeholder3",
        },
      ],
    },
    {
      id: "tenerte-toda",
      title: "Tenerte Toda",
      year: 2024,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6AYhdkvAxAsl1cAQc59sxH",
      tracks: [
        {
          title: "Tenerte Toda",
          duration: "4:05",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder4",
          spotifyId: "placeholder4",
        },
        {
          title: "Track 2",
          duration: "4:20",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder5",
          spotifyId: "placeholder5",
        },
        {
          title: "Track 3",
          duration: "3:55",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder6",
          spotifyId: "placeholder6",
        },
      ],
    },
    {
      id: "culpable",
      title: "Culpable",
      year: 2021,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6AYhdkvAxAsl1cAQc59sxH",
      tracks: [
        {
          title: "Culpable",
          duration: "4:15",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder7",
          spotifyId: "placeholder7",
        },
        {
          title: "Track 2",
          duration: "4:00",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder8",
          spotifyId: "placeholder8",
        },
        {
          title: "Track 3",
          duration: "3:50",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder9",
          spotifyId: "placeholder9",
        },
      ],
    },
    {
      id: "en-esta-navidad",
      title: "En Esta Navidad",
      year: 2021,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "1RSy4LSJetZdyAkroqd3CI",
      tracks: [
        {
          title: "En Esta Navidad",
          duration: "4:30",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder10",
          spotifyId: "placeholder10",
        },
        {
          title: "De Colores Navidad",
          duration: "4:25",
          previewUrl:
            "https://p.scdn.co/mp3-preview/placeholder11",
          spotifyId: "placeholder11",
        },
      ],
    },
  ],
};

// Sample data for appearances (collaborations, features, etc.)
const appearsOnData = {
  name: "Coldplay",
  background:
    "https://images.unsplash.com/photo-1743485029392-36ffd7621f22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  albums: [
    {
      id: "chainsmokers-collab",
      title: "Memories...Do Not Open",
      artist: "The Chainsmokers",
      year: 2017,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6ZG5lRT77aJ3btmArcykra",
      tracks: [
        {
          title: "Something Just Like This",
          duration: "4:07",
          previewUrl:
            "https://p.scdn.co/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6",
          spotifyId: "6RUKPb4LETWmmr3iAEQktW",
        },
      ],
    },
    {
      id: "jay-z-collab",
      title: "Kingdom Come",
      artist: "Jay-Z",
      year: 2006,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6ZG5lRT77aJ3btmArcykra",
      tracks: [
        {
          title: "Beach Chair",
          duration: "4:28",
          previewUrl:
            "https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e",
          spotifyId: "1lMTmKIbRiQkF4bqhR9QQx",
        },
      ],
    },
    {
      id: "big-sean-collab",
      title: "Detroit 2",
      artist: "Big Sean",
      year: 2020,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6ZG5lRT77aJ3btmArcykra",
      tracks: [
        {
          title: "Lucky Me",
          duration: "5:14",
          previewUrl:
            "https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e",
          spotifyId: "1lMTmKIbRiQkF4bqhR9QQx",
        },
      ],
    },
    {
      id: "fuse-odg-collab",
      title: "New Africa Nation",
      artist: "Fuse ODG",
      year: 2019,
      cover: "/placeholder.svg?height=300&width=300",
      spotifyId: "6ZG5lRT77aJ3btmArcykra",
      tracks: [
        {
          title: "Boa Me (feat. Ed Sheeran & Mugeez)",
          duration: "3:49",
          previewUrl:
            "https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e",
          spotifyId: "1lMTmKIbRiQkF4bqhR9QQx",
        },
      ],
    },
  ],
};

// Types for our data
type Track = {
  title: string;
  duration: string;
  previewUrl: string;
  spotifyId: string;
};

type Album = {
  id: string;
  title: string;
  year: number;
  artist?: string;
  cover: string;
  spotifyId: string;
  tracks: Track[];
};

export default function EnhancedDiscography() {
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(null);
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeTab, setActiveTab] = useState("discography");
  const [isLoaded, setIsLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Get the current data based on active tab
  const currentData = activeTab === "discography" ? artistData : appearsOnData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const albumVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Reset expanded album when switching tabs
  useEffect(() => {
    setExpandedAlbum(null);
  }, [activeTab]);

  // Handle page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle audio playback
  useEffect(() => {
    if (!audioRef.current) return;

    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 30); // Default to 30s for Spotify previews
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [playingTrack]);

  // Toggle album expansion
  const toggleAlbum = (albumId: string) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId);
  };

  // Play or pause a track
  const togglePlay = (track: Track, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    if (playingTrack?.spotifyId === track.spotifyId) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      setPlayingTrack(track);

      // Create new audio element
      audioRef.current = new Audio(track.previewUrl);
      audioRef.current.volume = isMuted ? 0 : 1;

      // Play after a small delay to ensure the new audio is loaded
      setTimeout(() => {
        audioRef.current?.play();
        setIsPlaying(true);
      }, 100);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Format time for display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Update progress bar
  const updateProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;

    // Set the current time based on click position
    audioRef.current.currentTime = pos * duration;
    setCurrentTime(audioRef.current.currentTime);
  };

  // Find the album containing the currently playing track
  const findAlbumForTrack = (track: Track | null) => {
    if (!track) return null;

    // Search in both data sources
    const discographyAlbum = artistData.albums.find((album) =>
      album.tracks.some((t) => t.spotifyId === track.spotifyId)
    );

    if (discographyAlbum) return discographyAlbum;

    const appearsAlbum = appearsOnData.albums.find((album) =>
      album.tracks.some((t) => t.spotifyId === track.spotifyId)
    );

    return appearsAlbum;
  };

  const currentAlbum = findAlbumForTrack(playingTrack);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Fixed Header */}
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center w-full p-6 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tracking-widest text-white text-xl font-light"
        >
          <Link href="/">
            <h1 className="flex space-x-1 md:space-x-4">
              <span>R</span>
              <span>I</span>
              <span>C</span>
              <span>H</span>
              <span>A</span>
              <span>R</span>
              <span>D</span>

              <span className="mx-4"></span>
              <span>G</span>
              <span>O</span>
              <span>N</span>
              <span>Z</span>
              <span>A</span>
              <span>L</span>
              <span>E</span>
              <span>Z</span>
            </h1>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex space-x-4"
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
        className="fixed z-30 right-6 top-[16dvh] transform -translate-y-1/2 text-white"
      >
        <ul className="flex flex-col space-y-6 items-center">
          <li className="vertical-nav-item">
            <Link
              href="/"
              className="writing-mode-vertical text-md md:text-lg tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              HOME
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/music"
              className="writing-mode-vertical text-md md:text-lg tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              MUSIC
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/discography"
              className="writing-mode-vertical text-md md:text-lg tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              DISCOGRAPHY
            </Link>
          </li>

          <li className="vertical-nav-item">
            <Link
              href="/videos"
              className="writing-mode-vertical text-md md:text-lg tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              VIDEOS
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/bio"
              className="writing-mode-vertical text-md md:text-lg tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              BIO
            </Link>
          </li>
        </ul>
      </motion.nav>
      {/* Background with parallax effect */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: isLoaded ? 1 : 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0" />
        <Image
          src={
            currentData.background ||
            "https://images.unsplash.com/photo-1743485029392-36ffd7621f22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={currentData.name}
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative mt-[60px] z-10 container mx-auto px-4 py-8 max-w-[90vw]">
        <motion.div
          className="mb-8 border-b border-white/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-8 mb-2">
            <button
              className={cn(
                "text-white font-medium pb-2 relative",
                activeTab === "discography"
                  ? "border-b-2 border-orange-400"
                  : "text-white/60"
              )}
              onClick={() => setActiveTab("discography")}
            >
              DISCOGRAPHY
              {activeTab === "discography" && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                  layoutId="activeTab"
                />
              )}
            </button>
            <button
              className={cn(
                "font-medium pb-2 relative",
                activeTab === "appears"
                  ? "border-b-2 border-orange-400"
                  : "text-white/60"
              )}
              onClick={() => setActiveTab("appears")}
            >
              APPEARS ON
              {activeTab === "appears" && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                  layoutId="activeTab"
                />
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="space-y-px"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {currentData.albums.map((album) => (
              <motion.div
                key={album.id}
                className="border-b border-white/10 overflow-hidden"
                variants={albumVariants}
              >
                <motion.div
                  className="flex items-center gap-4 py-4 px-2 cursor-pointer relative"
                  onClick={() => toggleAlbum(album.id)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={album.cover || "/placeholder.svg"}
                      alt={album.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold">{album.title}</h2>
                    <div className="flex items-center gap-2">
                      <p className="text-white/60">{artistData.name}</p>
                      <span className="text-white/40">•</span>
                      <p className="text-orange-400/80">{album.year}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedAlbum === album.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-white/60" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedAlbum === album.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden bg-white/5 rounded-md mb-4 mx-2"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-white/60" />
                            <h3 className="font-medium">Tracks</h3>
                          </div>
                          <a
                            href={`https://open.spotify.com/album/${album.spotifyId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            <span>Open in Spotify</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                        <motion.div
                          className="space-y-1"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.05,
                              },
                            },
                            hidden: {},
                          }}
                        >
                          {album.tracks.map((track, index) => {
                            const isCurrentTrack =
                              playingTrack?.spotifyId === track.spotifyId;

                            return (
                              <motion.div
                                key={track.spotifyId}
                                className={cn(
                                  "flex items-center justify-between p-3 rounded-md group",
                                  isCurrentTrack
                                    ? "bg-orange-500/20"
                                    : "hover:bg-white/10"
                                )}
                                onClick={(e) => togglePlay(track, e)}
                                variants={{
                                  hidden: { opacity: 0, x: -10 },
                                  visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.3 },
                                  },
                                }}
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center gap-3">
                                  <motion.button
                                    className={cn(
                                      "w-8 h-8 flex items-center justify-center rounded-full",
                                      isCurrentTrack
                                        ? "bg-orange-500"
                                        : "bg-white/10 group-hover:bg-orange-500/80"
                                    )}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    {isCurrentTrack && isPlaying ? (
                                      <Pause size={14} className="text-white" />
                                    ) : (
                                      <Play
                                        size={14}
                                        className="text-white ml-0.5"
                                      />
                                    )}
                                  </motion.button>
                                  <span
                                    className={
                                      isCurrentTrack ? "font-medium" : ""
                                    }
                                  >
                                    {track.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="text-white/60 text-sm">
                                    {track.duration}
                                  </span>
                                  <a
                                    href={`https://open.spotify.com/track/${track.spotifyId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <ExternalLink
                                      size={14}
                                      className="text-white/60 hover:text-white"
                                    />
                                  </a>
                                </div>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mini Player */}
      <AnimatePresence>
        {playingTrack && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-md border-t border-white/10 p-3 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 flex-grow">
                  {currentAlbum && (
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={currentAlbum.cover || "/placeholder.svg"}
                        alt={currentAlbum.title}
                        width={48}
                        height={48}
                        className="object-cover rounded-sm"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100"
                        whileHover={{ opacity: 1 }}
                      >
                        {isPlaying ? (
                          <Pause
                            size={16}
                            className="text-white"
                            onClick={() => togglePlay(playingTrack)}
                          />
                        ) : (
                          <Play
                            size={16}
                            className="text-white ml-0.5"
                            onClick={() => togglePlay(playingTrack)}
                          />
                        )}
                      </motion.div>
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-sm">{playingTrack.title}</p>
                    <p className="text-white/60 text-xs">{artistData.name}</p>
                  </div>
                </div>

                <div className="flex-grow hidden md:block max-w-md">
                  <div
                    className="h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                    onClick={updateProgress}
                    ref={progressRef}
                  >
                    <motion.div
                      className="h-full bg-orange-500"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="p-2 rounded-full hover:bg-white/10"
                    onClick={toggleMute}
                  >
                    {isMuted ? (
                      <VolumeX size={18} className="text-white/60" />
                    ) : (
                      <Volume2 size={18} className="text-white/60" />
                    )}
                  </button>
                  <a
                    href={`https://open.spotify.com/track/${playingTrack.spotifyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span className="hidden sm:inline">Listen on Spotify</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio element for playback */}
      <audio ref={audioRef} />
    </div>
  );
}
