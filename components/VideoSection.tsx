"use client"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { Eyebrow } from "@/components/Eyebrow"

const VIDEO_ID = process.env.NEXT_PUBLIC_VIDEO_ID || "PLACEHOLDER_VIDEO_ID"

export function VideoSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Demo</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
          Veja a Bella rodando. 90 segundos.
        </h2>
      </div>
      <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_24px_64px_-16px_rgba(15,15,15,0.18)] border border-[#ECECEC]">
        <LiteYouTubeEmbed
          id={VIDEO_ID}
          title="Demo da Bella, atendente IA pra clínica de estética"
          poster="maxresdefault"
          noCookie
        />
      </div>
    </section>
  )
}
