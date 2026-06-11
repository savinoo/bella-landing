"use client"

import { useEffect, useRef, useState } from "react"
import { RotateCcw } from "lucide-react"
import { ChatBubble } from "@/components/ChatBubble"
import { TypingIndicator } from "@/components/TypingIndicator"
import { DemoShell } from "@/components/demo/DemoShell"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

type Item =
  | { kind: "bella"; text: string }
  | { kind: "cliente"; text: string }
  | { kind: "pix" }
  | { kind: "sistema"; text: string }

const ITEMS: Item[] = [
  {
    kind: "bella",
    text: "Oi Mariana! Amanhã às 14h tem seu peeling de diamante com a Paula. Posso confirmar?",
  },
  { kind: "cliente", text: "Confirma sim!" },
  {
    kind: "bella",
    text: "Confirmado! Pra segurar seu horário, o sinal é de R$50 no Pix. Esse valor já desconta do procedimento, tá?",
  },
  { kind: "pix" },
  { kind: "cliente", text: "Paguei!" },
  {
    kind: "bella",
    text: "Recebido, Mariana! Te espero amanhã às 14h. Qualquer coisa é só me chamar.",
  },
  {
    kind: "sistema",
    text: "No dia seguinte, 13h. Lembrete enviado automaticamente",
  },
]

// +1: passo extra que revela o painel de resultado
const TOTAL_STEPS = ITEMS.length + 1
const TICK_MS = 1600

// Padrão FIXO 11x11 do QR fake ("1" = célula preta). Cantos imitam os
// finder patterns de um QR real. Nunca gerado em runtime.
const QR_PATTERN = [
  "11101010111",
  "10100100101",
  "11101101111",
  "00110101100",
  "10110010110",
  "01001101011",
  "11010110010",
  "00110101101",
  "11101101010",
  "10110010101",
  "11101011011",
] as const

function FakeQr() {
  return (
    <div className="relative mx-auto w-[148px]">
      <div
        className="grid gap-px rounded-sm border border-[#ECECEC] bg-white p-1.5"
        style={{ gridTemplateColumns: "repeat(11, 1fr)" }}
        aria-hidden="true"
      >
        {QR_PATTERN.flatMap((row, y) =>
          row.split("").map((cell, x) => (
            <span
              key={`${y}-${x}`}
              className={
                cell === "1" ? "aspect-square bg-[#0F0F0F]" : "aspect-square bg-white"
              }
            />
          ))
        )}
      </div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-sm border border-[#ECECEC] bg-white/95 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#737373] shadow-sm">
        QR de exemplo
      </span>
    </div>
  )
}

function PixCardBubble() {
  return (
    <div className="flex justify-start bubble-enter">
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-2 shadow-sm">
        <div className="rounded-xl border border-[#ECECEC] bg-white p-3">
          <p className="text-[13px] font-semibold text-[#0F0F0F]">
            Sinal de R$50
          </p>
          <div className="mt-2">
            <FakeQr />
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#F4F4F4] px-2.5 py-1.5">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[#737373]">Pix copia e cola</p>
              <p className="truncate font-mono text-[10px] text-[#404040]">
                00020126580014br.gov.bcb.pix01...
              </p>
            </div>
            <button
              type="button"
              disabled
              className="shrink-0 rounded-md border border-[#ECECEC] bg-white px-2 py-1 text-[10px] font-medium text-[#737373]"
            >
              copiar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SystemLine({ text }: { text: string }) {
  return (
    <div className="flex justify-center bubble-enter py-1">
      <span className="rounded-full bg-[#0F0F0F]/5 px-3 py-1 text-center text-[11px] text-[#737373]">
        {text}
      </span>
    </div>
  )
}

function ResultPanel() {
  const stats = [
    { numero: "14", label: "confirmações automáticas" },
    { numero: "3", label: "faltas evitadas" },
    { numero: "R$580", label: "em sinais retidos" },
  ]
  return (
    <div className="bubble-enter mt-5 rounded-3xl border border-[#ECECEC] bg-white p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
        O que isso vira no fim do mês
      </p>
      <ul className="mt-3 space-y-2.5">
        {stats.map((s) => (
          <li key={s.label} className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-semibold text-[#FF6F61]">
              {s.numero}
            </span>
            <span className="text-sm text-[#404040]">{s.label}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] text-[#A3A3A3]">números de exemplo</p>
    </div>
  )
}

export default function DemoConfirmacaoPage() {
  const [step, setStep] = useState(0)
  const reduced = usePrefersReducedMotion()
  const endRef = useRef<HTMLDivElement>(null)

  const effectiveStep = reduced ? TOTAL_STEPS : step
  const visibleItems = ITEMS.slice(0, Math.min(effectiveStep, ITEMS.length))
  const nextItem = effectiveStep < ITEMS.length ? ITEMS[effectiveStep] : null
  const showTyping =
    !reduced && (nextItem?.kind === "bella" || nextItem?.kind === "pix")
  const finished = effectiveStep >= TOTAL_STEPS

  useEffect(() => {
    if (reduced || step >= TOTAL_STEPS) return
    const id = setTimeout(() => setStep((s) => s + 1), TICK_MS)
    return () => clearTimeout(id)
  }, [step, reduced])

  useEffect(() => {
    if (reduced || step === 0) return
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [step, reduced])

  return (
    <DemoShell
      title="Confirmação e sinal Pix"
      subtitle="A Bella confirma o horário um dia antes e segura o compromisso com sinal por Pix. Assista à conversa."
    >
      <div className="overflow-hidden rounded-3xl border border-[#ECECEC] bg-white shadow-[0_24px_64px_-16px_rgba(15,15,15,0.12)]">
        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
          <div className="flex size-10 items-center justify-center rounded-full bg-white/20 font-serif text-base">
            B
          </div>
          <div className="flex-1 leading-tight">
            <div className="text-[14px] font-semibold">Bella</div>
            <div className="flex items-center gap-1 text-[11px] text-white/75">
              <span className="size-1.5 rounded-full bg-[#25D366]" />
              online
            </div>
          </div>
        </div>

        {/* Conversa */}
        <div className="min-h-72 space-y-2 bg-[#ECE5DD]/40 px-3 py-4">
          {visibleItems.map((item, i) => {
            if (item.kind === "pix") return <PixCardBubble key={i} />
            if (item.kind === "sistema")
              return <SystemLine key={i} text={item.text} />
            return (
              <ChatBubble
                key={i}
                from={item.kind === "cliente" ? "client" : "bella"}
                text={item.text}
              />
            )
          })}
          {showTyping && <TypingIndicator />}
        </div>

        {/* Barra de input decorativa */}
        <div className="flex items-center gap-2 border-t border-[#ECECEC] bg-white px-3 py-2">
          <div className="h-8 flex-1 rounded-full bg-[#F4F4F4]" />
          <div className="size-8 rounded-full bg-[#25D366]" />
        </div>
      </div>

      {finished && <ResultPanel />}

      {finished && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setStep(0)}
            className="inline-flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-5 py-2.5 text-sm font-medium text-[#0F0F0F] transition hover:border-[#FF6F61] hover:text-[#FF6F61]"
          >
            <RotateCcw className="size-4" />
            Ver de novo
          </button>
        </div>
      )}

      <div ref={endRef} />
    </DemoShell>
  )
}
