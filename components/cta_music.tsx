"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection1() {
  return (
    <section className="py-20 px-6 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-6">EXPERIENCE THE MUSIC LIVE</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Don't miss the chance to see Richard Gonzalez perform live. Check upcoming event dates or book a private
            event for your special occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/videos"
              className="text-sm tracking-wider py-3 px-8 border border-white hover:bg-orange-500 hover:border-orange-500 transition-colors group"
            >
              VIEW VIDEOS
              <span className="inline-block ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wider py-3 px-8 bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600 transition-colors"
            >
              BOOK A PRIVATE EVENT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
