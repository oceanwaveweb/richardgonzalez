"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
        <video
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
