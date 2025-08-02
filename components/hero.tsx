"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaItunesNote,
  FaSpotify,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function HeroAll() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/28224439-1F08-425A-8B0F-1034245262D9.JPEG"
              alt="Richard Gonzalez - Musician"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
                Richard <br />
                <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Gonzalez
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl">
                Without Music, Life Would Be Useless.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4 items-center mb-12">
                <Link
                  href="https://x.com/RichardMusicPTY"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <FaXTwitter className="text-white text-xl" />
                </Link>

                <Link
                  href="https://music.apple.com/us/artist/richard-gonzalez/1373460172"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <FaItunesNote className="text-white text-xl" />
                </Link>

                <Link
                  href="https://www.facebook.com/richardgonzalezmusic"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF className="text-white text-xl" />
                </Link>

                <Link
                  href="https://open.spotify.com/artist/6AYhdkvAxAsl1cAQc59sxH?si=W26u5XGpRMyFcr4f0uXY-w&nd=1&dlsi=79a2efff49c64e0c"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <FaSpotify className="text-white text-xl" />
                </Link>

                <Link
                  href="https://www.instagram.com/richardgonzalezmusic"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="text-white text-xl" />
                </Link>

                <Link
                  href="https://www.tiktok.com/@richardgonzalezmusic"
                  target="_blank"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <SiTiktok className="text-white text-xl" />
                </Link>
              </div>

              {/* CTA Button */}
              <div className="flex items-center">
                <Link
                  href="/contact"
                  className="relative inline-block px-8 py-4 text-white rounded-xl overflow-hidden group backdrop-blur-md bg-white/10 border border-orange-500 transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-400 hover:scale-105"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 blur-md opacity-20 group-hover:opacity-40 transition duration-300"></span>
                  <span className="relative z-10 font-semibold text-lg">
                    Book A Private Event
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
