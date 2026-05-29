"use client"

import { useEffect, useState } from "react"

const WHATSAPP_URL =
  "https://wa.me/5528999301848?text=Oi%20Lucas%2C%20vi%20a%20Bella%20no%20site%20e%20quero%20saber%20mais%20pra%20minha%20cl%C3%ADnica"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF6F3]/80 backdrop-blur-md border-b border-[#F2D9CF]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-2xl tracking-tight text-[#0F0F0F]">
          Bella
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#25D366] hover:bg-[#1EA952] text-white text-sm font-medium transition-colors"
        >
          Falar com a gente
        </a>
      </div>
    </header>
  )
}
