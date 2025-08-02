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
};

export default BIOPage;
