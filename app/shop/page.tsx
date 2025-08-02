"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SocialIcon } from "@/components/social-icon"

export default function ShopPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const products = [
    {
      name: "ELEVATE Event T-SHIRT",
      price: "$35.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "ROCK STAR HOODIE",
      price: "$65.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "Event POSTER",
      price: "$25.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "VINYL - ELEVATE",
      price: "$45.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "BEANIE",
      price: "$28.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
    {
      name: "PHONE CASE",
      price: "$22.00",
      image: "/placeholder.svg?height=400&width=300",
      link: "#",
    },
  ]

  const categories = ["ALL", "APPAREL", "MUSIC", "ACCESSORIES", "POSTERS", "BUNDLES"]

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center w-full p-6">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="tracking-widest text-white text-xl font-light"
          >
            <h1 className="flex space-x-4">
              <span>R</span>
              <span>O</span>
              <span>C</span>
              <span>K</span>
              <span className="mx-4"></span>
              <span>S</span>
              <span>T</span>
              <span>A</span>
              <span>R</span>
            </h1>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex space-x-4"
        >
          <SocialIcon type="apple" />
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="spotify" />
          <SocialIcon type="twitter" />
          <SocialIcon type="youtube" />
          <SocialIcon type="email" />
        </motion.div>
      </header>

      {/* Vertical Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="fixed z-10 right-6 top-1/2 transform -translate-y-1/2 text-white"
      >
        <ul className="flex flex-col space-y-6 items-center">
          <li className="vertical-nav-item">
            <Link
              href="/music"
              className="writing-mode-vertical text-sm tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              MUSIC
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/Event"
              className="writing-mode-vertical text-sm tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              Event
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/shop"
              className="writing-mode-vertical text-sm tracking-widest font-light text-orange-500 transition-colors"
            >
              SHOP
            </Link>
          </li>
          <li className="vertical-nav-item">
            <Link
              href="/videos"
              className="writing-mode-vertical text-sm tracking-widest font-light hover:text-orange-500 transition-colors"
            >
              VIDEOS
            </Link>
          </li>
        </ul>
      </motion.nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-light tracking-widest mb-12">SHOP</h2>

          <div className="flex flex-wrap gap-6 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`text-sm tracking-wider ${index === 0 ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Link href={product.link}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-light tracking-wider group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-400">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
