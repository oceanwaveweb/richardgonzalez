"use client"

import { useState } from "react"
import { Menu, X, Home, Disc, Calendar, User, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Disc, label: "Music", href: "/music" },
    { icon: Calendar, label: "Event", href: "/Event" },
    { icon: User, label: "About", href: "/about" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-40 rounded-full bg-black/80 backdrop-blur-sm border border-gray-800 p-2 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-16 left-4 z-30 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl p-4 w-64"
          >
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
