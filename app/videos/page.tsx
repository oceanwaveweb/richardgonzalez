"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialIcon } from "@/components/social-icon";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { projects } from "@/components/data";
import Cards from "@/components/cards";
import DeskCards from "@/components/mobilecards.tsx";
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
import VideoParallex from "@/components/videos/VideoParallex";
import VideoParallax2 from "@/components/videos/VideoParallex2";
import VideoParallax3 from "@/components/videos/VideoParallex3";
import CTASection from "@/components/Cta";
import CTASection2 from "@/components/cta_videos";
import Image from "next/image";
import VideoParallax0 from "@/components/videos/VideoParallex0";

export default function VideosPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup if needed
    };
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full bg-black text-white"
      ref={container}
    >
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
      <div className="md:hidden container mx-auto px-6 py-20">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Cards
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="hidden md:block">
        <VideoParallax0 />
        <VideoParallex />
        <VideoParallax2 />
        <VideoParallax3 />
      </div>

      <CTASection2 />

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
}
