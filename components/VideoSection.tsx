"use client"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { Eyebrow } from "@/components/Eyebrow"

const VIDEO_ID = process.env.NEXT_PUBLIC_VIDEO_ID

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
        {VIDEO_ID ? (
          <LiteYouTubeEmbed
            id={VIDEO_ID}
            title="Demo da Bella, atendente IA pra clínica de estética"
            poster="maxresdefault"
            noCookie
          />
        ) : (
          <div className="aspect-video bg-[#FAFAFA] flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-lg text-[#404040]">
              O vídeo da demo está chegando. Enquanto isso, fale com a Bella ao
              vivo no WhatsApp.
            </p>
            <a
              href="https://wa.me/5521983962982"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#25D366] font-medium underline-offset-4 hover:underline"
            >
              Conversar com a Bella agora
              <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
