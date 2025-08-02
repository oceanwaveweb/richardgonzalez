"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import { Play, Pause, ChevronRight, Music, Award, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { slideUp } from "../landing/animation";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaSpotify, FaInstagram } from "react-icons/fa";
import { FaItunesNote } from "react-icons/fa6"; // Apple Music
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6"; // X.com
export default function MobLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const achievements = [
    { icon: Music, label: "10M+ Streams", value: "Across all platforms" },
    { icon: Award, label: "5 Awards", value: "Music industry recognition" },
    { icon: Users, label: "500K+ Fans", value: "Global community" },
  ];

  const featuredLogos = [
    { name: "Spotify", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Apple Music", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Billboard", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Rolling Stone", logo: "/placeholder.svg?height=40&width=120" },
  ];

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div className={styles.container}>
        {/* Hero Text Section */}
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>
            Richard <br /> <span className={styles.gradient}>Gonzalez</span>
          </h1>
          <p className={styles.subtitle}>
            Without Music, Life Would Be Useless.
          </p>

          <div className="flex ml-4 gap-4 items-center">
            <Link
              href="https://x.com/RichardMusicPTY"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition"
            >
              <FaXTwitter className="text-white text-xl" />
            </Link>

            {/* Apple Music */}
            <Link
              href="https://music.apple.com/us/artist/richard-gonzalez/1373460172"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition"
            >
              <FaItunesNote className="text-white  text-xl" />
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/richardgonzalezmusic"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition"
            >
              <FaFacebookF className="text-white text-xl" />
            </Link>

            {/* Spotify */}
            <Link
              href="https://open.spotify.com/artist/6AYhdkvAxAsl1cAQc59sxH?si=W26u5XGpRMyFcr4f0uXY-w&nd=1&dlsi=79a2efff49c64e0c"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition"
            >
              <FaSpotify className="text-white  text-xl" />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/richardgonzalezmusic"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition"
            >
              <FaInstagram className="text-white  text-xl" />
            </Link>

            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@richardgonzalezmusic"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition"
            >
              <SiTiktok className="text-white  text-xl" />
            </Link>
          </div>

          <div className="flex ml-16 mt-12  gap-4 items-center">
            <Link
              href="/contact"
              className="relative inline-block px-6 py-3 text-white rounded-xl overflow-hidden group backdrop-blur-md bg-white/10 border border-orange-700 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 blur-md opacity-20 group-hover:opacity-30 transition duration-300"></span>
              <span className="relative z-10 font-semibold">
                Book A Private Event
              </span>
            </Link>
          </div>
          {/* Achievement Stats
          <div className={styles.achievements}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <achievement.icon className={styles.achievementIcon} />
                <div>
                  <div className={styles.achievementLabel}>{achievement.label}</div>
                  <div className={styles.achievementValue}>{achievement.value}</div>
                </div>
              </div>
            ))}
          </div>
           */}
        </div>

        <div></div>

        {/* Featured Section
        <div className={styles.featuredSection}>
          <h3 className={styles.featuredTitle}>Featured on:</h3>
          <div className={styles.logoGrid}>
            {featuredLogos.map((platform, index) => (
              <div key={index} className={styles.logoItem}>
                <Image
                  src={platform.logo || "/placeholder.svg"}
                  alt={platform.name}
                  width={120}
                  height={40}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>
            Explore My Music
            <ChevronRight className={styles.ctaIcon} />
          </button>
        </div>

         */}
      </div>
    </motion.main>
  );
}
