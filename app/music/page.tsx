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
      link: "https://open.spotify.com/track/4Oskr6ugD83CDetiO14oFv?si=06b44452036c4845",
      type: "SINGLE",
      title: "MENTIRA",
      year: "2023",
      image: "/mentira.png",
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
      year: "2023",
      image: "/sinti.png",
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
          <h2 className="text-3xl font-light tracking-widest mb-12">ALBUMS</h2>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-light tracking-widest mb-12">SINGLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {singles.map((single, index) => (
              <motion.div
                key={single.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group flex gap-4"
              >
                <div className="relative overflow-hidden flex-shrink-0">
                  <Image
                    src={single.image || "/placeholder.svg"}
                    alt={single.title}
                    width={80}
                    loading="lazy"
                    height={80}
                    className="w-20 h-20 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      href={single.link}
                      className="p-1 bg-orange-500 rounded-full"
                    >
                      <Play className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-light tracking-wider">
                    {single.title}
                  </h3>
                  {single.featuring && (
                    <p className="text-xs text-gray-400">{single.featuring}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{single.year}</p>
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

      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
            </div>

            {/* Designed by with logo instead of text */}
            <div className="text-sm relative z-50 min-w-[800px] py-4 hidden text-gray-500 italic md:flex flex-row items-start justify-start md:pl-[200px] space-x-2">
              <p className="relative">
                Designed & Developed by
                <Link
                  href="https://oceanwaveweb.com/"
                  className="absolute -top-[90px] -right-[200px] text-blue flex items-center space-x-2"
                >
                  <Image
                    src="/logodark.png" // Replace with your logo path
                    alt="OceanwaveWeb Logo"
                    width={200}
                    height={100}
                  />
                </Link>
              </p>
            </div>

            {/* Social Icons (mobile only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:hidden flex flex-row flex-wrap justify-center space-x-6"
            >
              {/* ...social icons unchanged... */}
            </motion.div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-400 items-center">
              <Link
                href="mailto:info@richardgonzalezmusic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline italic"
              >
                Mail
              </Link>
              <Link
                href="tel:+19678971234"
                className="hover:text-white transition-colors underline italic"
              >
                Phone
              </Link>
            </div>

            {/* Designed by (mobile only) */}
            <div className="text-sm py-4 md:hidden w-screen text-gray-500 italic flex flex-row items-center justify-center space-x-2">
              <p>Designed & Developed by</p>
              <Link
                href="https://oceanwaveweb.com/"
                className="text-blue flex items-center space-x-2"
              >
                <Image
                  src="/logodark.png"
                  alt="OceanwaveWeb Logo"
                  width={100}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
