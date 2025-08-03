"use client";

import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  // Force video playback on component mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playAttempt = () => {
      video.play()
        .catch(error => {
          console.warn("Autoplay prevented:", error);
          // Fallback: Show play button if needed
        });
    };

    if (video.readyState >= 3) { // HAVE_FUTURE_DATA
      playAttempt();
    } else {
      video.addEventListener("loadeddata", playAttempt);
      return () => video.removeEventListener("loadeddata", playAttempt);
    }
  }, []);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
        <video
          ref={videoRef}
          src="/video1.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/sinsaber.jpg"
        />
      </motion.div>
    </div>
  );
}