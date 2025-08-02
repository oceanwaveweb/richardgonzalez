import styles from "./styles.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);

  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/IMG_7726.JPG",

      scale: scale4,
    },

    {
      src: "/4622F71E-607D-4974-9564-1E00D4832BA2.JPEG",

      scale: scale1,
    },

    {
      src: "/IMG_7728.JPG",

      scale: scale4,
    },
    {
      src: "/32a73fdc-88af-49c9-a617-13a6a680a650.JPG",

      scale: scale5,
    },

    {
      src: "/17438D37-4E9B-415E-B36E-B6AF9E8EFAA7.JPEG",

      scale: scale6,
    },

    {
      src: "/IMG_5527.jpg",

      scale: scale8,
    },
    {
      src: "/image6.png",

      scale: scale9,
    },
  ];
  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  alt="Descriptive alt text"
                  loading="lazy"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
