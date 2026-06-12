"use client"

import { useEffect, useState } from "react"
import { LUCAS_WHATSAPP_URL } from "./urls"

const anchors = [
  { href: "#features", label: "O que ela faz" },
  { href: "#preco", label: "Preço" },
  { href: "#perguntas", label: "Perguntas" },
]

export function Header() {
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
          ? "bg-[#FBF6F3]/85 backdrop-blur-md border-b border-[#F2D9CF]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#" aria-label="Voltar ao topo" className="select-none">
          <span className="font-serif text-2xl tracking-tight text-[#0F0F0F]">
            bella<span className="text-[#FF6F61]">.</span>
          </span>
        </a>

        <nav
          aria-label="Seções da página"
          className="hidden md:flex items-center gap-8"
        >
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-sm font-medium text-[#5C5350] hover:text-[#0F0F0F] transition-colors"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <a
          href={LUCAS_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center h-9 px-4 rounded-full bg-[#25D366] hover:bg-[#1EA952] text-white text-sm font-medium transition-colors"
        >
          Falar com a gente
        </a>
      </div>

      <nav aria-label="Seções da página" className="md:hidden">
        <div className="flex gap-2 overflow-x-auto px-5 pb-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="shrink-0 whitespace-nowrap rounded-full border border-[#EADFD8] bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-[#5C5350]"
            >
              {a.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
