"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
import {
  SiTiktok,
  SiApplemusic,
  SiX,
  SiSpotify,
  SiYoutube,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
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
import MobLanding from "@/components/mobilelanding";
import HeroAll from "@/components/hero";
import CTASection from "@/components/Cta";
import Presave from "@/components/presave";

export default function Home() {
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
      date: "June 15, 2025",
      title: "Live at Echo Stage, Florida",
      description:
        "An unforgettable night of sound and soul at Berlin's iconic venue.",
    },
    {
      date: "July 3, 2025",
      title: "Sunset Music Fest, Barcelona",
      description: "Open air performance during the golden hour by the beach.",
    },
    {
      date: "June 20, 2025",
      title: "Live at Echo Stage, Berlin",
      description:
        "An unforgettable night of sound and soul at Berlin's iconic venue.",
    },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full bg-black">
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
            <h1 className="flex space-x-1 text-xl md:text-2xl tracking-[6px] md:tracking-[15px] md:space-x-4">
              RICHARD GONZALEZ
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

      <div className="md:hidden">
        <MobLanding />
      </div>
      <div className="hidden md:block">
        <HeroAll />
      </div>

      {/* Latest Releases Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light tracking-widest mb-2">
              LATEST RELEASES
            </h2>
            <div className="h-0.5 w-20 bg-orange-500"></div>
          </motion.div>
          <LatestReleases />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/music"
              className="inline-flex items-center text-sm tracking-wider hover:text-orange-500 transition-colors"
            >
              VIEW ALL MUSIC
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <div className="w-full relative ">
        <Presave />
      </div>

      <Section />
      <Description />
      <Section />

      {/* Featured Video Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light tracking-widest mb-2">
              FEATURED VIDEOS
            </h2>
            <div className="h-0.5 w-20 bg-orange-500"></div>
          </motion.div>
          <LatestMusicVideos />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/videos"
              className="inline-flex items-center text-sm tracking-wider hover:text-orange-500 transition-colors"
            >
              VIEW ALL VIDEOS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Index />
      {/* Event Dates Preview 
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light tracking-widest mb-2">
              UPCOMING SHOWS
            </h2>
            <div className="h-0.5 w-20 bg-orange-500"></div>
          </motion.div>

          <div className="space-y-10">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.date + item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-800 pb-6 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <p className="text-sm font-light">{item.date}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.description}</p>

                    <Link href="/contact">
                      <button className="mt-4 inline-flex items-center gap-2 text-sm text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition-colors">
                        Contact for Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Merchandise Preview
      <section className="py-20 px-6 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light tracking-widest mb-2">
              MERCHANDISE
            </h2>
            <div className="h-0.5 w-20 bg-orange-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchandise.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={item.link}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={400}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-light tracking-wider group-hover:text-orange-500 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400">{item.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-2 border border-white text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm tracking-wider"
            >
              <ShoppingBag className="h-4 w-4" />
              SHOP ALL MERCHANDISE
            </Link>
          </motion.div>
        </div>
      </section>
 */}
      {/* Newsletter Section */}

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

interface MarqueeBannerProps {
  width: number;
}

function MarqueeBanner({ width }: MarqueeBannerProps) {
  const [position, setPosition] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Calculate the width of a single content item
  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, []);

  // Animate the marquee
  useEffect(() => {
    if (!contentWidth) return;

    const animate = () => {
      setPosition((prevPos) => {
        // Reset position when it's moved one full content width
        if (Math.abs(prevPos) >= contentWidth) {
          return 0;
        }
        return prevPos - 1; // Move 1px per frame
      });
    };

    const animationId = requestAnimationFrame(animate);
    const interval = setInterval(animate, 16); // ~60fps

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(interval);
    };
  }, [contentWidth]);

  // Create enough copies to fill the banner
  const copies = Math.ceil(width / 200) + 2; // 200px is approximate width of "NEW ALBUM"

  return (
    <div
      className="flex items-center h-full whitespace-nowrap"
      style={{ transform: `translateX(${position}px)` }}
    >
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
  );
}
