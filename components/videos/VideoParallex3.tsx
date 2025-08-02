"use client";

import { useRef, useState } from "react";
import { Play, Pause, ArrowUpIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Arrow } from "@radix-ui/react-tooltip";

const VideoParallax3 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="mt-20 min-h-screen w-full flex flex-col">
      {" "}
      <div className="relative flex flex-row h-[calc(100vh-85px)] w-full">
        {" "}
        {/* Left Content Section */}{" "}
        <div className="w-[40%] bg-black relative">
          {" "}
          <div className="absolute top-[20%] left-[10%] text-white space-y-6">
            {" "}
            <div className="text-sm font-medium tracking-wider uppercase opacity-80">
              {" "}
              RICHARD GONZALEZ{" "}
            </div>
            <h1 className="text-4xl captilize lg:text-5xl xl:text-6xl font-bold leading-tight">
              CULPABLE
            </h1>
            <p className="text-lg opacity-80 max-w-[90%]  leading-relaxed">
              Culpable by Richard Gonzalez is an official music video featuring
              a heartfelt song about regret and taking responsibility for past
              mistakes.
            </p>
            <Link
              href="https://youtu.be/NxP2kdlFeas?si=gT5AMRT4Rm6dAtFC"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-64 hover:w-72 items-center gap-0 hover:gap-2 mt-8 text-sm font-medium tracking-wider uppercase hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 bg-black border-black hover:border-white group-hover:bg-white group-hover:text-purple-900 transition-all duration-300">
                <ArrowRight className="w-5 h-5 ml-0.5" />
              </div>
              <span>Watch now on Youtube</span>
            </Link>
          </div>
        </div>
        {/* Right Video Section */}
        <div className="w-[60%] h-[96%] relative">
          {/* Cover Image as overlay */}
          {!isPlaying && (
            <img
              src="/32a73fdc-88af-49c9-a617-13a6a680a650.JPG"
              alt="Video cover"
              className="absolute inset-0 w-full h-full object-top object-cover z-10"
            />
          )}

          {/* Play / Pause Button */}
          <button
            onClick={toggleVideo}
            className="absolute top-[65%] z-50 -left-[138px] group flex items-center gap-3 mt-8 text-sm font-medium tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            <span className="flex items-start flex-col">
              {isPlaying ? "PAUSE NOW" : "WATCH NOW"}
              <br />
              <span className="text-xs opacity-60">
                {isPlaying ? "Click to Pause" : "Click to Play"}
              </span>
            </span>
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 bg-black border-black hover:border-white group-hover:bg-white group-hover:text-purple-900 transition-all duration-300">
              {isPlaying ? (
                <Pause className="w-8 h-8 ml-0.5" />
              ) : (
                <Play className="w-8 h-8 ml-0.5" />
              )}
            </div>
          </button>

          {/* Video */}
          <video
            ref={videoRef}
            loop
            muted={false}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/senti.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-purple-900/20 z-0" />
        </div>
      </div>
    </div>
  );
};

export default VideoParallax3;
