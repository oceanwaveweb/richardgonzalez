import { Apple, Facebook, Instagram, AirplayIcon as Spotify, Twitter, Youtube, Mail } from "lucide-react"
import Link from "next/link"

interface SocialIconProps {
  type: "apple" | "facebook" | "instagram" | "spotify" | "twitter" | "youtube" | "email"
}

export function SocialIcon({ type }: SocialIconProps) {
  const getIcon = () => {
    switch (type) {
      case "apple":
        return <Apple className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "spotify":
        return <Spotify className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "email":
        return <Mail className="h-5 w-5" />
    }
  }

  const getUrl = () => {
    switch (type) {
      case "apple":
        return "https://music.apple.com"
      case "facebook":
        return "https://facebook.com"
      case "instagram":
        return "https://instagram.com"
      case "spotify":
        return "https://spotify.com"
      case "twitter":
        return "https://twitter.com"
      case "youtube":
        return "https://youtube.com"
      case "email":
        return "mailto:contact@rockstar.com"
    }
  }

  return (
    <Link
      href={getUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-orange-500 transition-colors"
    >
      {getIcon()}
    </Link>
  )
}
