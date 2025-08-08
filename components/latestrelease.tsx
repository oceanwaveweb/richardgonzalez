"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define types
interface Release {
  link: string;
  type: string;
  title: string;
  image: string;
}

const latestReleases: Release[] = [
  {
    link: "https://open.spotify.com/track/0xZ8rDwveRAwKcSaPuyIgE?si=e414535860054694",
    type: "SINGLE",
    title: "EL JUEGO",
    image: "https://static.found.ee/user/292289/res-bc9151d3-e682-4d49-86b0-298473af159e-El-Juego3.jpg",
  },
  {
    link: "https://open.spotify.com/track/4Oskr6ugD83CDetiO14oFv?si=06b44452036c4845",
    type: "SINGLE",
    title: "MENTIRA",
    image: "/AF939BB3-F116-4319-A0E8-02D3FB9AE031.JPG",
  },
  {
    link: "https://open.spotify.com/track/6Dfb99B87yD2B0UCVzqYG7?si=c0814621bfbf4e87",
    type: "SINGLE",
    title: "SIN TI NO HAY FIESTA",
    image: "/sinti.png",
  },
];

export default function LatestReleases() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Function to extract the Spotify ID
  function getSpotifyEmbedLink(url: string) {
    const parts = url.split("/");
    const type = parts[parts.length - 2]; // track or album
    const id = parts[parts.length - 1].split("?")[0];
    return `https://open.spotify.com/embed/${type}/${id}`;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestReleases.map((release, index) => (
        <motion.div
          key={release.link}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-lg">
            {playingIndex === index ? (
              <iframe
                src={getSpotifyEmbedLink(release.link)}
                width="100%"
                height="380"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            ) : (
              <>
                <Image
                  src={release.image}
                  alt={release.title}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  onClick={() => setPlayingIndex(index)}
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  <div className="p-3 bg-orange-500 rounded-full">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs uppercase text-white tracking-wide rounded-md">
                  {release.type}
                </div>
              </>
            )}
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-light tracking-wider group-hover:text-orange-500 transition-colors">
              {release.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
