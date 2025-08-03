"use client";
import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Section() {
  const container = useRef<HTMLDivElement | null>(null);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  // Force video playback on component mount
  useEffect(() => {
    const playVideo = (video: HTMLVideoElement | null) => {
      if (!video) return;
      
      const playAttempt = () => {
        video.play().catch(error => {
          console.warn("Autoplay prevented:", error);
        });
      };
      
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA
        playAttempt();
      } else {
        video.addEventListener("loadeddata", playAttempt, { once: true });
      }
    };

    // Play both videos to ensure one works regardless of device
    playVideo(desktopVideoRef.current);
    playVideo(mobileVideoRef.current);
  }, []);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          {/* Desktop video */}
          <video
            ref={desktopVideoRef}
            src="/video2.mp4"
            className="absolute inset-0 h-full w-full hidden md:block object-cover"
            muted
            loop
            playsInline
            preload="auto"
            poster="/sinsaber.jpg"
          />
          {/* Mobile video */}
          <video
            ref={mobileVideoRef}
            src="/video2.mp4"
            className="absolute inset-0 h-full w-full md:hidden object-cover"
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