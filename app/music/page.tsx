"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "@/components/social-icon";
import { Play, ExternalLink } from "lucide-react";
import { AirplayIcon as Spotify, Apple, Youtube } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";
import {
  SiApplemusic,
  SiFacebook,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";
import CTASection from "@/components/Cta";
import CTASection1 from "@/components/cta_music";

export default function MusicPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const albums = [
    {
      link: "https://open.spotify.com/track/0xZ8rDwveRAwKcSaPuyIgE?si=e414535860054694",
      type: "SINGLE",
      year: "2025",
      title: "EL JUEGO",
      image:
        "https://static.found.ee/user/292289/res-bc9151d3-e682-4d49-86b0-298473af159e-El-Juego3.jpg",
    },
    {
      link: "https://open.spotify.com/track/4Oskr6ugD83CDetiO14oFv?si=06b44452036c4845",
      type: "SINGLE",
      title: "MENTIRA",
      year: "2025",
      image: "/mentira.png",
    },
    {
      link: "https://open.spotify.com/track/70Xx30Y8cooQsZ9vfDivbh?si=9854fbcb292b4747",
      type: "SINGLE",
      title: "TENERTE TODA",
      year: "2024",
      image: "tenerte.png",
    },
    {
      link: "https://open.spotify.com/track/59NDW6PTBPxQEEsEDyQDx4?si=c19ca19a929443b0",
      type: "SINGLE",
      title: "INACCESIBLE",
      year: "2023",
      image: "/inaccesible.png",
    },
    {
      link: "https://open.spotify.com/track/6Dfb99B87yD2B0UCVzqYG7?si=c0814621bfbf4e87",
      type: "SINGLE",
      title: "SIN TI NO HAY FIESTA",
      year: "2022",
      image: "/sinti.png",
    },
    {
      link: "https://open.spotify.com/track/17JFoDfP0WStPiw7VhvDVj?si=0bfdcdb06d6e43b4",
      type: "SINGLE",
      title: "CULPABLE",
      year: "2021",
      image: "/image4.png",
    },
  ];

  const singles = [
    {
      link: "https://open.spotify.com/track/4Oskr6ugD83CDetiO14oFv?si=06b44452036c4845",
      type: "SINGLE",
      featuring: "",
      title: "MENTIRA",
      year: "2023",
      image: "/mentira.png",
    },
    {
      link: "https://open.spotify.com/track/59NDW6PTBPxQEEsEDyQDx4?si=c19ca19a929443b0",
      type: "SINGLE",
      title: "INACCESIBLE",
      featuring: "feat. Metal Queen",
      year: "2023",
      image: "/inaccesible.png",
    },
    {
      link: "https://open.spotify.com/track/6Dfb99B87yD2B0UCVzqYG7?si=c0814621bfbf4e87",
      type: "SINGLE",
      featuring: "",
      title: "SIN TI NO HAY FIESTA",
      year: "2023",
      image: "/sinti.png",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Header */}
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
          className="hidden md:flex space-x-6"
        >
          <Link
            href="https://www.tiktok.com/@richardgonzalezmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="https://music.apple.com/us/artist/richard-gonzalez/1373460172" // <-- Replace with your Apple Music URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiApplemusic
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="https://x.com/RichardMusicPTY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiX
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="https://open.spotify.com/artist/6AYhdkvAxAsl1cAQc59sxH?si=W26u5XGpRMyFcr4f0uXY-w&nd=1&dlsi=79a2efff49c64e0c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSpotify
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@richardgonzalezmusica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiYoutube
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="https://www.facebook.com/richardgonzalezmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFacebook
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="https://www.instagram.com/richardgonzalezmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>

          <Link
            href="mailto:info@richardgonzalezmusic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail
              size={24}
              className="text-white hover:text-pink-600 transition"
            />
          </Link>
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
          <li className="vertical-nav-item">
            <Link
              href="/contact"
              className="writing-mode-vertical text-md md:text-lg tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              CONTACT
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
          <h2 className="text-3xl font-light tracking-widest mb-12">SINGLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={album.image || "/placeholder.svg"}
                    alt={album.title}
                    width={300}
                    loading="lazy"
                    height={300}
                    className="w-[300px] h-[300px] md:w-[450px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      href={album.link}
                      className="p-3 bg-orange-500 rounded-full"
                    >
                      <Play className="h-8 w-8" />
                    </Link>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-light tracking-wider">
                    {album.title}
                  </h3>
                  <p className="text-sm text-gray-400">{album.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex flex-wrap gap-6"
        >
          <a
            href="https://open.spotify.com/artist/6AYhdkvAxAsl1cAQc59sxH?si=W26u5XGpRMyFcr4f0uXY-w&nd=1&dlsi=79a2efff49c64e0c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-wider hover:text-orange-500 transition-colors"
          >
            <Spotify className="h-5 w-5" />
            SPOTIFY
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://music.apple.com/us/artist/richard-gonzalez/1373460172"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-wider hover:text-orange-500 transition-colors"
          >
            <Apple className="h-5 w-5" />
            APPLE MUSIC
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com/@richardgonzalezmusica"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-wider hover:text-orange-500 transition-colors"
          >
            <Youtube className="h-5 w-5" />
            YOUTUBE
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <CTASection1 />

      <footer className="bg-black text-gray-400 border-t border-gray-800 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
          {/* Left Section: Copyright */}
          <div className="text-center md:text-left text-sm">
            © {new Date().getFullYear()}. All rights reserved.
          </div>

          {/* Middle Section: Designed by - Desktop Only */}
          <div className="hidden md:flex items-center justify-center relative min-w-[300px] h-[80px]">
            <Link
              href="https://oceanwaveweb.com/"
              className="absolute -top-15 right-0"
            >
              <Image
                src="/logodark.png"
                alt="OceanwaveWeb Logo"
                width={200}
                height={100}
              />
            </Link>
          </div>

          {/* Right Section: Contact Info */}
          <div className="flex flex-col md:flex-row gap-3 text-center md:text-left text-sm items-center">
            <Link
              href="mailto:info@richardgonzalezmusic.com"
              className="hover:text-white transition underline italic"
            >
              Mail: info@richardgonzalezmusic.com
            </Link>
            <Link
              href="tel:+19678971234"
              className="hover:text-white transition underline italic z-20"
            >
              Phone: +1 (967) 897-1234
            </Link>
            <Link href="https://oceanwaveweb.com/" className="md:hidden">
              <div className="w-[350px] h-[50px] z-0 relative">
                <Image
                  src="/logodark.png"
                  alt="OceanwaveWeb Logo"
                  width={200}
                  height={100}
                  className="absolute -top-[75px] left-[80px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
