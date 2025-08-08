"use client";

import React, { useEffect, useState, useRef } from "react";
import { BIOHeader } from "./biographyheader";
import { bioSections } from "@/data/biodata";
import { BIOSection } from "./biographysection";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialIcon } from "@/components/social-icon";
import {
  Play,
  ArrowRight,
  Calendar,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import AlbumHero from "@/components/accordian-hero";
import LatestReleases from "@/components/latestrelease";
import LatestMusicVideos from "@/components/featuredvideos";
import Index from "@/components/ZoomParallex";
import Lenis from "lenis";
import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import CurvedVideoHero from "@/components/curvedhero";
import Landing from "@/components/landing";
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
import CTASection from "./Cta";
import Image from "next/image";
interface BioSection {
  id: number;
  text: string;
  image: string;
}
const BIOPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      // ✅ Explicit type
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  // Calculate the width of the marquee container on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  interface ScheduleItem {
    date: string;
    title: string;
    description: string;
  }

  const scheduleItems: ScheduleItem[] = [
    {
      date: "May 5, 2025",
      title: "Team Meeting",
      description: "Monthly team sync at regional HQ.",
    },
    {
      date: "May 10, 2025",
      title: "Product Review",
      description: "Internal product performance and feedback session.",
    },
    {
      date: "May 15, 2025",
      title: "Training Session",
      description: "Leadership workshop for junior managers.",
    },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const latestReleases = [
    {
      title: "ELEVATE",
      type: "SINGLE",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      title: "COSMIC JOURNEY",
      type: "ALBUM",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      title: "MIDNIGHT RIDER",
      type: "SINGLE",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
  ];

  const EventDates = [
    {
      date: "MAY 15, 2025",
      venue: "MADISON SQUARE GARDEN",
      location: "NEW YORK, NY",
      ticketLink: "#",
    },
    {
      date: "MAY 22, 2025",
      venue: "THE FORUM",
      location: "LOS ANGELES, CA",
      ticketLink: "#",
    },
    {
      date: "JUNE 5, 2025",
      venue: "UNITED CENTER",
      location: "CHICAGO, IL",
      ticketLink: "#",
    },
  ];

  const featuredVideos = [
    {
      title: "ELEVATE (Official Music Video)",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      link: "#",
    },
    {
      title: "BEHIND THE SCENES - ELEVATE Event",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      link: "#",
    },
  ];

  const merchandise = [
    {
      name: "ELEVATE Event T-SHIRT",
      price: "$35.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "ROCK STAR HOODIE",
      price: "$65.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "VINYL - ELEVATE",
      price: "$45.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
  ];

  return (
    <div className="bg-black relative text-white min-h-screen">
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
      <div className="w-[90%] mt-4">
        <BIOHeader />
      </div>

      <div className="container w-[90%] mx-auto px-4 pb-20">
        {bioSections.map((section, index) => (
          <BIOSection
            key={section.id}
            section={section}
            isEven={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
      
      <CTASection />

      {/* Footer */}
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
};

export default BIOPage;
