"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Sparkles, Music, Users, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SiApplemusic,
  SiFacebook,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import CTASection1 from "@/components/cta_music";
import Image from "next/image";

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      icon: SiInstagram,
      url: "https://www.instagram.com/richardgonzalezmusic",
      description:
        "Latest updates, behind-the-scenes content, and live performance clips",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      url: "https://www.tiktok.com/@richardgonzalezmusic",
      description: "Short music videos, covers, and creative content",
      color: "from-black to-red-600",
    },
    {
      name: "YouTube",
      icon: SiYoutube,
      url: "https://www.youtube.com/@richardgonzalezmusica",
      description:
        "Full music videos, live performances, and acoustic sessions",
      color: "from-red-500 to-red-700",
    },
    {
      name: "Spotify",
      icon: SiSpotify,
      url: "https://open.spotify.com/artist/6AYhdkvAxAsl1cAQc59sxH?si=W26u5XGpRMyFcr4f0uXY-w&nd=1&dlsi=79a2efff49c64e0c",
      description: "Stream all released tracks and discover new music",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Apple Music",
      icon: SiApplemusic,
      url: "https://music.apple.com/us/artist/richard-gonzalez/1373460172",
      description: "High-quality streaming and exclusive content",
      color: "from-gray-600 to-black",
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      url: "https://www.facebook.com/richardgonzalezmusic",
      description:
        "Event announcements, fan community, and longer-form updates",
      color: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
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

      <div className="relative mx-auto pt-24 md:pt-12 w-[300px] md:w-full max-w-[1400px] pr-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.div variants={fadeIn} className="inline-block">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 ring-1 ring-orange-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Let's Connect
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="mt-8 text-2xl sm:text-5xl lg:text-7xl font-bold text-white"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-md w-64 md:w-full md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to collaborate, book a performance, or just want to connect?
            Reach out through your preferred platform and let's create something
            amazing together.
          </motion.p>
        </motion.div>

        {/* Social Media Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              className="group bg-gradient-to-br from-white/[0.08] to-white/[0.03] hover:from-white/[0.12] hover:to-white/[0.06] backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-start">
                <div
                  className={`p-3 bg-gradient-to-br ${social.color} bg-opacity-20 rounded-xl group-hover:bg-opacity-30 transition-all duration-300 ring-1 ring-white/20`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {social.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {social.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Direct Contact Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid w-full md:grid-cols-2 gap-8 mb-12"
        >
          {/* Email Contact */}
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl p-4 md:p-8 ring-1 ring-orange-500/30 border border-orange-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Mail className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-white">
                Direct Email
              </h3>
            </div>
            <p className="text-white/80 mb-4">
              For booking inquiries, collaborations, or business matters
            </p>
            <a
              href="mailto:info@richardgonzalezmusic.com"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              info@richardgonzalezmusic.com
            </a>
          </motion.div>

          {/* Phone Contact */}
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-8 ring-1 ring-purple-500/30 border border-purple-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-white">Phone</h3>
            </div>
            <p className="text-white/80 mb-4">
              Call for urgent bookings or immediate assistance
            </p>
            <a
              href="tel:+19678971234"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              +1 (967) 897-1234
            </a>
          </motion.div>
        </motion.div>

        {/* Services & Info Cards
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 border border-white/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Music className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="ml-3 text-white font-semibold">
                Live Performances
              </h4>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Weddings, private events, corporate functions, and intimate
              concerts
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 border border-white/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Users className="w-5 h-5 text-green-400" />
              </div>
              <h4 className="ml-3 text-white font-semibold">Collaborations</h4>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Studio sessions, songwriting partnerships, and creative projects
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 border border-white/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-400" />
              </div>
              <h4 className="ml-3 text-white font-semibold">Response Time</h4>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Typically respond within 24-48 hours on all platforms
            </p>
          </motion.div>
        </motion.div>  */}
      </div>
      <CTASection1 />

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
}
