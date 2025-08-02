"use client"

import { Home, Disc, Calendar, User, Mail, Heart, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function MusicSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Disc, label: "Music", href: "/music" },
    { icon: Calendar, label: "Event", href: "/Event" },
    { icon: User, label: "About", href: "/about" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ]

  return (
    <Sidebar className="border-r border-gray-800">
      <SidebarHeader className="p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gradient-to-br from-red-500 to-purple-600">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 opacity-80"
            />
          </div>
          <div className="font-bold text-xl">ROCK STAR</div>
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <SidebarMenuButton asChild isActive={pathname === item.href} className="hover:bg-gray-800">
                  <a href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
              <SidebarMenuButton className="hover:bg-gray-800">
                <Heart className="h-5 w-5" />
                <span>Favorites</span>
              </SidebarMenuButton>
            </motion.div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
              <SidebarMenuButton className="hover:bg-gray-800">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </SidebarMenuButton>
            </motion.div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
