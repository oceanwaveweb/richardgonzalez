"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Presave = () => {
  const musicPlatforms = [
    {
      name: "SPOTIFY",
      url: "https://lnk.mhmusik.com/MUB1",
      color: "text-green-400",
    },
    {
      name: "APPLE MUSIC",
      url: "https://lnk.mhmusik.com/MUB1",
      color: "text-white",
    },
    {
      name: "TIDAL",
      url: "https://lnk.mhmusik.com/MUB1",
      color: "text-blue-400",
    },
    {
      name: "DEEZER",
      url: "https://lnk.mhmusik.com/MUB1",
      color: "text-orange-400",
    },
    {
      name: "AMAZON MUSIC",
      url: "https://lnk.mhmusik.com/MUB1",
      color: "text-blue-300",
    },
  ];

  const PreSaveCard = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      className={`backdrop-blur-2xl bg-black/40 border border-white/20 shadow-2xl ${
        isMobile ? "p-6 rounded-lg mx-4" : "p-8 w-80 mx-auto lg:mx-16"
      }`}
    >
      <h2
        className={`text-white font-bold tracking-wider mb-6 text-center ${
          isMobile ? "text-lg" : "text-xl"
        }`}
      >
        NEW MUSIC OUT - LISTEN NOW!
      </h2>

      <div className="space-y-3">
        {musicPlatforms.map((platform) => (
          <Link
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded"
          >
            <span
              className={`font-mono tracking-wider ${
                platform.color
              } group-hover:text-white transition-colors ${
                isMobile ? "text-xs" : "text-sm"
              }`}
            >
              {platform.name}
            </span>
            <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
          </Link>
        ))}
      </div>

      {isMobile && (
        <div className="mt-6 pt-4 border-t border-white/20">
          <p className="text-white/80 text-xs text-center tracking-wider">
            Available on all major streaming platforms
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section className="w-full bg-black isolate">
      {/* Desktop Layout */}
      <div className="hidden lg:block w-full bg-black relative">
        {/* Sticky Image Container - Full Height and Width */}
        <div className="sticky top-0 w-full h-screen z-0 bg-black flex items-center justify-center">
          <Image
            src="https://static.found.ee/user/292289/res-bc9151d3-e682-4d49-86b0-298473af159e-El-Juego3.jpg"
            alt="El Juego Album Cover"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            priority
            className="bg-black"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        {/* Scrollable Content Area */}
        <div className="relative z-10 -mt-[150px]">
          {/* Spacer to push card down initially */}
          <div className="h-[150px]"></div>

          {/* Card that scrolls over the image */}
          <div className="relative bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-16">
            <div className="flex justify-start">
              <PreSaveCard />
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse z-20" />
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse z-20" />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full bg-black relative">
        {/* Sticky Image Container */}
        <div className="sticky top-0 w-full h-96 md:h-screen z-0 bg-black">
          <Image
            src="https://static.found.ee/user/292289/res-bc9151d3-e682-4d49-86b0-298473af159e-El-Juego3.jpg"
            alt="El Juego Album Cover"
            fill
            style={{
              objectFit: "cover",
            }}
            priority
            className="bg-black"
          />
        </div>

        {/* Scrollable Content Area */}
        <div className="relative z-10 -mt-96 md:-mt-screen">
          {/* Spacer to push card down initially */}
          <div className="h-96 md:h-screen"></div>

          {/* Card that scrolls over the image */}
          <div className="relative bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-8">
            <PreSaveCard isMobile={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presave;
