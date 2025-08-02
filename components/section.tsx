"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef<HTMLDivElement | null>(null); // ✅ Add type for useRef
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
          <video
            src="/video2.mp4" // ✅ Update this path
            className="absolute inset-0 h-full w-full hidden md:block object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/sinsaber.jpg"
          />
          <video
            src="/video2.mp4" // ✅ Update this path
            className="absolute inset-0 h-full w-full md:hidden object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/sinsaber.jpg"
          />
        </motion.div>
      </div>
    </div>
  );
}
