"use client"

import { useEffect, useState } from "react"
import { ChatBubble } from "@/components/ChatBubble"
import { TypingIndicator } from "@/components/TypingIndicator"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

type Step =
  | { kind: "client"; text: string; t: number }
  | { kind: "bella"; text: string; t: number }
  | { kind: "typing"; t: number }

const SEQUENCE: Step[] = [
  { kind: "client", text: "Oi, vcs atendem amanhã?", t: 0 },
  { kind: "typing", t: 2 },
  {
    kind: "bella",
    text: "Oi! Atendemos sim. Qual procedimento te interessa?",
    t: 3,
  },
  { kind: "client", text: "Drenagem linfática", t: 5 },
  { kind: "typing", t: 6 },
  {
    kind: "bella",
    text: "Drenagem R$ 150 · 60 min. Tenho 9h, 10h30 ou 14h. Qual prefere?",
    t: 7,
  },
  { kind: "client", text: "14h", t: 9 },
  { kind: "typing", t: 10 },
  {
    kind: "bella",
    text: "Agendado ✓ Terça 28/05 14h. Calendar atualizado.",
    t: 11,
  },
]

const CYCLE_SECONDS = 14

export function ChatMockup() {
  const [tick, setTick] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setTick((t) => (t + 1) % CYCLE_SECONDS)
    }, 1000)
    return () => clearInterval(id)
  }, [reduced])

  const visible = reduced
    ? SEQUENCE.filter((s) => s.kind !== "typing")
    : SEQUENCE.filter((s) => s.t <= tick)

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="relative rounded-[2.5rem] border border-[#ECECEC] bg-white shadow-[0_24px_64px_-16px_rgba(15,15,15,0.18)] overflow-hidden"
        style={{ aspectRatio: "9 / 16" }}
      >
        <div className="absolute inset-0 flex flex-col">
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54] text-white">
            <div className="size-10 rounded-full bg-white/20 flex items-center justify-center font-serif text-base">
              B
            </div>
            <div className="flex-1 leading-tight">
              <div className="text-[14px] font-semibold">Bella</div>
              <div className="text-[11px] text-white/75 flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#25D366]" />
                online
              </div>
            </div>
          </div>

          {/* Conversation body */}
          <div className="flex-1 px-3 py-4 space-y-2 overflow-hidden bg-[#ECE5DD]/40">
            {visible.map((step, i) =>
              step.kind === "typing" ? (
                <TypingIndicator key={i} />
              ) : (
                <ChatBubble key={i} from={step.kind} text={step.text} />
              )
            )}
          </div>

          {/* Bottom input bar (decorativo) */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white border-t border-[#ECECEC]">
            <div className="flex-1 h-8 rounded-full bg-[#F4F4F4]" />
            <div className="size-8 rounded-full bg-[#25D366]" />
          </div>
        </div>
      </div>
    </div>
  )
}
