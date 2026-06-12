import Link from "next/link"
import { ArrowRight, CalendarCheck, Layers, FolderLock } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { BELLA_WHATSAPP_URL } from "./urls"

type QuickLink = { href: string; icon: LucideIcon; label: string }

const quickLinks: QuickLink[] = [
  { href: "/demo/confirmacao", icon: CalendarCheck, label: "Confirmação e sinal Pix" },
  { href: "/demo/pacotes", icon: Layers, label: "Controle de pacotes" },
  { href: "/demo/prontuario", icon: FolderLock, label: "Ficha da cliente" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-6 pt-10 pb-16 md:pt-20 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-[-12%] h-[24rem] w-[24rem] md:h-[34rem] md:w-[34rem] rounded-full bg-[#FF6F61]/[0.17] blur-[110px]" />
        <div className="absolute top-[18%] right-[14%] h-[16rem] w-[16rem] md:h-[22rem] md:w-[22rem] rounded-full bg-[#FFB347]/[0.22] blur-[90px]" />
        <div className="absolute bottom-[-7rem] left-[-10%] h-[20rem] w-[20rem] rounded-full bg-[#FF6F61]/[0.09] blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl lg:max-w-4xl">
          <p className="rise inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            <span aria-hidden className="size-1.5 rounded-full bg-[#FF6F61]" />
            Especializada em clínicas de estética cariocas
          </p>

          <h1
            className="rise mt-5 font-serif-display font-medium text-[44px] leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.25rem] sm:leading-[1.02] lg:leading-[0.99] tracking-[-0.03em] text-[#0F0F0F]"
            style={{ animationDelay: "90ms" }}
          >
            Sua clínica não <em className="italic text-[#FF6F61]">perde</em>{" "}
            mais a cliente que chama no{" "}WhatsApp.
          </h1>

          <p
            className="rise mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-[#404040]"
            style={{ animationDelay: "180ms" }}
          >
            A Bella responde na hora, agenda direto na sua agenda e confirma o
            horário. De dia, de noite, no domingo.
          </p>

          <div
            className="rise mt-8 flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: "270ms" }}
          >
            <a
              href={BELLA_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#25D366] hover:bg-[#1EA952] text-white font-medium text-base shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-[1px] motion-reduce:transform-none"
            >
              Testar a Bella agora
            </a>
            <a
              href="#preco"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#D9CCC4] hover:border-[#0F0F0F] bg-white/70 text-[#0F0F0F] font-medium text-base transition-all duration-200 hover:-translate-y-[1px] motion-reduce:transform-none"
            >
              Ver o preço
            </a>
          </div>
        </div>

        <div className="rise mt-12 md:mt-16" style={{ animationDelay: "360ms" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Veja a Bella por dentro
          </p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-3 max-w-3xl">
            {quickLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-2xl border border-[#EFE3DC] bg-white/80 px-4 py-3.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#FF6F61] hover:shadow-[0_14px_32px_-16px_rgba(255,111,97,0.4)] motion-reduce:transform-none"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FF6F61]/10 text-[#FF6F61]">
                  <Icon className="size-4.5" strokeWidth={1.5} />
                </span>
                <span className="flex-1 text-sm font-medium text-[#0F0F0F]">
                  {label}
                </span>
                <ArrowRight className="size-4 shrink-0 text-[#FF6F61] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
