"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { DemoShell } from "@/components/demo/DemoShell"

const TOAST_MS = 2500

type Slug = "mariana" | "carla" | "julia"
type View = "lista" | Slug

type Badge = { tone: "ambar" | "verde"; label: string }

type Pacote = {
  slug: Slug
  nome: string
  primeiroNome: string
  procedimento: string
  usadas: number
  total: number
  validadeCard: string
  validadeDetalhe: string
  badge?: Badge
  notaCard?: string
  historico: string[]
}

const PACOTES: Pacote[] = [
  {
    slug: "mariana",
    nome: "Mariana Souza",
    primeiroNome: "Mariana",
    procedimento: "Drenagem linfática",
    usadas: 6,
    total: 10,
    validadeCard: "comprado em 02/05 · vence 02/08",
    validadeDetalhe: "Comprado em 02/05 · vence 02/08",
    historico: ["05/05", "12/05", "19/05", "26/05", "02/06", "09/06"],
  },
  {
    slug: "carla",
    nome: "Carla Mendes",
    primeiroNome: "Carla",
    procedimento: "Limpeza de pele",
    usadas: 9,
    total: 10,
    validadeCard: "vence em 12 dias",
    validadeDetalhe: "Vence em 12 dias",
    badge: { tone: "ambar", label: "última sessão vence em 12 dias" },
    historico: [
      "07/04",
      "14/04",
      "21/04",
      "28/04",
      "05/05",
      "12/05",
      "19/05",
      "26/05",
      "02/06",
    ],
  },
  {
    slug: "julia",
    nome: "Júlia Castro",
    primeiroNome: "Júlia",
    procedimento: "Peeling de diamante",
    usadas: 10,
    total: 10,
    validadeCard: "concluído em 19/05",
    validadeDetalhe: "Pacote concluído em 19/05",
    badge: { tone: "verde", label: "concluído" },
    notaCard: "Bella já sugeriu renovação no WhatsApp",
    historico: [
      "17/03",
      "24/03",
      "31/03",
      "07/04",
      "14/04",
      "21/04",
      "28/04",
      "05/05",
      "12/05",
      "19/05",
    ],
  },
]

function saldoLabel(p: Pacote): string {
  const restantes = p.total - p.usadas
  if (restantes === 0) return "Pacote concluído"
  if (restantes === 1) return "1 sessão restante"
  return `${restantes} sessões restantes`
}

function BadgePill({ badge }: { badge: Badge }) {
  const tone =
    badge.tone === "ambar"
      ? "border-[#FFB347]/50 bg-[#FFB347]/15 text-[#8C5A12]"
      : "border-[#25D366]/30 bg-[#25D366]/10 text-[#1E7F4F]"
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tone}`}
    >
      {badge.label}
    </span>
  )
}

function ProgressBar({ usadas, total }: { usadas: number; total: number }) {
  return (
    <div
      className="h-1.5 w-full overflow-hidden rounded-full bg-[#ECECEC]"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-full bg-[#FF6F61]"
        style={{ width: `${(usadas / total) * 100}%` }}
      />
    </div>
  )
}

/** Barra de progresso + contagem + validade — usada no card e no detalhe */
function SaldoRow({
  pacote,
  validade,
}: {
  pacote: Pacote
  validade: string
}) {
  return (
    <>
      <div className="mt-3.5">
        <ProgressBar usadas={pacote.usadas} total={pacote.total} />
      </div>
      <div className="mt-2 flex items-baseline justify-between gap-2 text-[12px]">
        <span className="whitespace-nowrap font-medium text-[#0F0F0F]">
          {pacote.usadas} de {pacote.total} sessões
        </span>
        <span className="text-right text-[#737373]">{validade}</span>
      </div>
    </>
  )
}

function PacoteCard({
  pacote,
  onOpen,
  cardRef,
}: {
  pacote: Pacote
  onOpen: (slug: Slug) => void
  cardRef?: (el: HTMLButtonElement | null) => void
}) {
  return (
    <button
      ref={cardRef}
      type="button"
      data-slug={pacote.slug}
      onClick={() => onOpen(pacote.slug)}
      className="w-full cursor-pointer rounded-3xl border border-[#ECECEC] bg-white p-5 text-left transition hover:border-[#FF6F61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF6F3]"
    >
      <span className="flex items-start justify-between gap-3">
        <span className="min-w-0">
          <span className="block text-base font-semibold text-[#0F0F0F]">
            {pacote.nome}
          </span>
          <span className="mt-0.5 block text-sm text-[#404040]">
            {pacote.procedimento}
          </span>
        </span>
        <ChevronRight className="mt-1 size-4 shrink-0 text-[#737373]" />
      </span>

      {pacote.badge && (
        <span className="mt-2.5 block">
          <BadgePill badge={pacote.badge} />
        </span>
      )}

      <SaldoRow pacote={pacote} validade={pacote.validadeCard} />

      {pacote.notaCard && (
        <span className="mt-2.5 block border-t border-[#ECECEC] pt-2.5 text-[12px] text-[#737373]">
          {pacote.notaCard}
        </span>
      )}
    </button>
  )
}

function PacoteDetalhe({
  pacote,
  onBack,
  onLembrar,
  headingRef,
}: {
  pacote: Pacote
  onBack: () => void
  onLembrar: () => void
  headingRef: React.RefObject<HTMLHeadingElement | null>
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-[#525252] transition hover:text-[#0F0F0F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF6F3]"
      >
        <ArrowLeft className="size-4" /> voltar
      </button>

      <div className="mt-4 rounded-3xl border border-[#ECECEC] bg-white p-5">
        {/* heading focável programaticamente ao abrir o detalhe */}
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="text-base font-semibold text-[#0F0F0F] focus-visible:outline-none"
        >
          {pacote.nome}
        </h2>
        <p className="mt-0.5 text-sm text-[#404040]">{pacote.procedimento}</p>
        <p className="mt-3 font-serif text-3xl font-semibold text-[#FF6F61]">
          {saldoLabel(pacote)}
        </p>

        <SaldoRow pacote={pacote} validade={pacote.validadeDetalhe} />
      </div>

      <div className="mt-4 rounded-3xl border border-[#ECECEC] bg-white p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
          Histórico de sessões
        </p>
        <ul className="mt-3 divide-y divide-[#ECECEC]">
          {pacote.historico.map((data, i) => (
            <li
              key={data}
              className="flex items-baseline justify-between gap-2 py-2 text-sm"
            >
              <span className="text-[#0F0F0F]">
                <span className="mr-2 text-[11px] text-[#737373]">
                  {i + 1}ª
                </span>
                {data}
              </span>
              <span className="text-[12px] text-[#737373]">
                feita com Paula
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onLembrar}
        className="mt-5 w-full cursor-pointer rounded-full bg-[#FF6F61] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#F25B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF6F3]"
      >
        Bella lembra a {pacote.primeiroNome} no WhatsApp
      </button>
    </div>
  )
}

export function PacotesDemo() {
  const [view, setView] = useState<View>("lista")
  const [toastMsg, setToastMsg] = useState("")
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Ref para o heading do detalhe — foco ao abrir
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Refs dos cards indexadas por slug — foco ao voltar
  const cardRefs = useRef<Record<Slug, HTMLButtonElement | null>>({
    mariana: null,
    carla: null,
    julia: null,
  })

  // Slug que estava aberto antes de voltar (para focar o card correto)
  const prevSlug = useRef<Slug | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  // Foco ao abrir detalhe
  useEffect(() => {
    if (view !== "lista") {
      headingRef.current?.focus({ preventScroll: false })
    }
  }, [view])

  function showToast() {
    setToastMsg("Mensagem entraria na fila da Bella (demonstração)")
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMsg(""), TOAST_MS)
  }

  function openPacote(slug: Slug) {
    prevSlug.current = slug
    setView(slug)
  }

  function goBack() {
    const slug = prevSlug.current
    setView("lista")
    // Aguarda o próximo frame para o card estar montado
    requestAnimationFrame(() => {
      if (slug) {
        cardRefs.current[slug]?.focus({ preventScroll: false })
      }
    })
  }

  const pacoteAberto =
    view === "lista" ? null : PACOTES.find((p) => p.slug === view) ?? null

  return (
    <DemoShell
      title="Controle de pacotes"
      subtitle="Cada pacote com saldo, validade e aviso automático. Toque num pacote pra abrir."
    >
      {pacoteAberto ? (
        <div key={pacoteAberto.slug} className="bubble-enter">
          <PacoteDetalhe
            pacote={pacoteAberto}
            onBack={goBack}
            onLembrar={showToast}
            headingRef={headingRef}
          />
        </div>
      ) : (
        <div key="lista" className="bubble-enter space-y-4">
          {PACOTES.map((p) => (
            <PacoteCard
              key={p.slug}
              pacote={p}
              onOpen={openPacote}
              cardRef={(el) => { cardRefs.current[p.slug] = el }}
            />
          ))}
        </div>
      )}

      {/* Toast live region sempre no DOM — só o conteúdo e visibilidade mudam */}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-5"
      >
        <span
          className={`rounded-full bg-[#0F0F0F] px-4 py-2.5 text-center text-[13px] text-white shadow-lg transition-all duration-300 ${
            toastMsg
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
        >
          {toastMsg || " "}
        </span>
      </div>
    </DemoShell>
  )
}
