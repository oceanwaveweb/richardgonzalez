"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface CardsProps {
  i: number;
  title: string;
  description: string;
  src: string;
  videoSrc: string;
  link: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const Cards = ({
  i,
  title,
  description,
  src,
  videoSrc,
  link,
  color,
  progress,
  range,
  targetScale,
}: CardsProps) => {
  const container = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)", // transparent white
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // for Safari support
          border: "1px solid rgba(255, 255, 255, 0.2)", // optional, gives frosted border
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <span>
              <a href={link} target="_blank" rel="noopener noreferrer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div
            className={styles.imageContainer}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {!isPlaying ? (
              <>
                <motion.div
                  className={styles.inner}
                  style={{ scale: imageScale }}
                >
                  <Image fill src={`${src}`} alt={title} />

                  <div
                    className={styles.playButtonOverlay}
                    onClick={handlePlayClick}
                  >
                    <div className={styles.playButton}>
                      <Play size={40} />
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <div className={styles.videoContainer}>
                <video
                  controls
                  autoPlay
                  className={styles.video}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
