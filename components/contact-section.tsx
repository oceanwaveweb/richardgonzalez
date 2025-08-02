"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Twitter, Youtube, Facebook, Send } from "lucide-react"

export function ContactSection() {
  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    // Fetch a random music studio image from Unsplash
    setBackgroundImage("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop")
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-6">
              Have questions about upcoming shows, merchandise, or just want to say hello? Drop us a message and we'll
              get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" className="bg-black/50 border-gray-800 focus-visible:ring-red-500" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/50 border-gray-800 focus-visible:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" className="bg-black/50 border-gray-800 focus-visible:ring-red-500" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-black/50 border-gray-800 focus-visible:ring-red-500 min-h-[120px]"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Follow On Social Media</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, color: "#E1306C" }}
                    className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, color: "#1DA1F2" }}
                    className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, color: "#FF0000" }}
                    className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <Youtube className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, color: "#4267B2" }}
                    className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Management</h4>
                <p className="text-gray-400">
                  For booking inquiries and press:
                  <br />
                  <a href="mailto:management@rockstar.com" className="text-red-500 hover:underline">
                    management@rockstar.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Fan Club</h4>
                <p className="text-gray-400">
                  Join the official fan club for exclusive content, early access to tickets, and more.
                </p>
                <Button variant="outline" className="mt-2 border-red-500 text-red-500 hover:bg-red-500/10">
                  Join Fan Club
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
