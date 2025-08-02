import React from "react";
import { motion } from "framer-motion";
import { bioSections } from "@/data/biodata";
import Image from "next/image";

interface BioSection {
  id: number;
  text: string;
  image: string;
}

interface BIOSectionProps {
  section: BioSection;
  isEven: boolean;
  index: number;
}

export const BIOSection: React.FC<BIOSectionProps> = ({
  section,
  isEven,
  index,
}) => {
  const animationDelay = 0.001 + index * 0.001;

  // Split text into paragraphs
  const paragraphs = section.text.split("\n\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`w-full flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } mb-16 md:mb-24`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="h-full overflow-hidden rounded-lg shadow-2xl"
        >
          <Image
            width={100}
            height={100}
            src={`${section.image}`}
            loading="lazy"
            alt={`Richard González - Section ${section.id}`}
            className="w-full h-[300px] md:h-[500px] object-cover object-top transition-all duration-500 hover:brightness-110"
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
        <div className="space-y-4">
          {paragraphs.map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: animationDelay + pIndex * 0.1,
              }}
              viewport={{ once: true }}
              className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-200"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: animationDelay + 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-800 text-xs font-semibold text-white/80">
            {`${section.id}/${bioSections.length}`}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};
