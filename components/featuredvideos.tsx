"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

// Types
interface MusicVideo {
  link: string;
  title: string;
  thumbnail: string;
}

// Your YouTube videos
const videosData: MusicVideo[] = [
  {
    link: "https://youtu.be/uO-7ubGvOIw?si=urgU1EmdyWdOkifz", // Imagine Dragons - Radioactive
    title: "Sin Saber A Qué Sabías",
    thumbnail: "/sinsaber.jpg",
  },
  {
    link: "https://youtu.be/0anSVzx89Io?si=HHghRjdBNUl64aoY", // Ed Sheeran - Shape of You
    title: "Mentira",
    thumbnail: "/mentira.png",
  },
  {
    link: "https://youtu.be/tO1ZCyPl1gk?si=WZ3GQixZcwiTxzPq", // Wiz Khalifa - See You Again
    title: "Sin ti no hay fiesta",
    thumbnail: "/sinti.png",
  },
];

export default function LatestMusicVideos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {videosData.map((video, index) => (
        <motion.a
          key={video.link}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative block"
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={300}
              loading="lazy"
              height={300}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="p-3 bg-orange-500 rounded-full">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-light tracking-wider group-hover:text-orange-500 transition-colors">
              {video.title}
            </h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
