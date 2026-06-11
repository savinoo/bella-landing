"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, ShieldCheck } from "lucide-react"

type ModalId = null | "termo" | "exportar" | "apagar"

const PARES_FOTOS = [
  {
    id: "sessao-0206",
    legenda: "Sessão de 02/06",
    antes: "from-[#E8DCD5] to-[#D5C2B8]",
    depois: "from-[#FFE3D9] to-[#FFC9B8]",
  },
  {
    id: "sessao-0906",
    legenda: "Sessão de 09/06",
    antes: "from-[#E3DAD9] to-[#CFC0BD]",
    depois: "from-[#FFE9D2] to-[#FFD3A8]",
  },
]

const TRILHA_LGPD = [
  { id: "acesso", texto: "Acessado pela dona em 09/06" },
  { id: "exportacao", texto: "Exportado em 28/05 a pedido da cliente" },
  { id: "consentimento", texto: "Consentimento registrado em 02/06" },
]

function Modal({
  titleId,
  onClose,
  children,
}: {
  titleId: string
  onClose: () => void
  children: React.ReactNode
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-5 sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className="bubble-enter w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl"
      >
        {children}
      </div>
    </div>
  )
}

function BotaoFechar({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="mt-4 w-full cursor-pointer rounded-full border border-[#ECECEC] px-5 py-3 text-sm font-semibold text-[#0F0F0F] transition hover:border-[#FF6F61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 motion-reduce:transition-none"
    >
      Fechar
    </button>
  )
}

export function ProntuarioDemo() {
  const [modal, setModal] = useState<ModalId>(null)
  const closeModal = useCallback(() => setModal(null), [])

  return (
    <div className="space-y-4">
      <section className="rounded-3xl border border-[#ECECEC] bg-white p-5">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF6F61]/12 font-serif text-base font-semibold text-[#FF6F61]"
          >
            MS
          </span>
          <div className="min-w-0">
            <p className="font-serif text-xl font-semibold text-[#0F0F0F]">
              Mariana Souza
            </p>
            <p className="mt-0.5 text-sm text-[#404040]">
              cliente desde março de 2026
            </p>
          </div>
        </div>
        <div className="mt-4 border-t border-[#ECECEC] pt-3.5">
          <p className="text-sm text-[#0F0F0F]">(21) 9•••• ••48</p>
          <p className="mt-1 text-[11px] text-[#737373]">
            dado mascarado na demonstração
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-[#ECECEC] bg-white p-5">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12 text-[#1E7F4F]"
          >
            <Check className="size-4" />
          </span>
          <div className="min-w-0">
            <p className="text-sm leading-relaxed text-[#0F0F0F]">
              Termo de peeling aceito em 02/06 pelo WhatsApp
            </p>
            <button
              type="button"
              onClick={() => setModal("termo")}
              className="mt-1.5 cursor-pointer text-sm font-medium text-[#FF6F61] underline underline-offset-4 transition hover:text-[#F25B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
            >
              ver termo
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#ECECEC] bg-white p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-[#737373]">
          Fotos de antes e depois
        </p>
        <div className="mt-3 space-y-4">
          {PARES_FOTOS.map((par) => (
            <div key={par.id}>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br ${par.antes}`}
                >
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-medium text-[#404040]">
                    antes
                  </span>
                </div>
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br ${par.depois}`}
                >
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-medium text-[#404040]">
                    depois
                  </span>
                </div>
              </div>
              <p className="mt-1.5 text-[12px] text-[#737373]">{par.legenda}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 border-t border-[#ECECEC] pt-3 text-[12px] text-[#737373]">
          fotos guardadas com acesso restrito, nunca públicas
        </p>
      </section>

      <section className="rounded-3xl border border-[#ECECEC] bg-white p-5">
        <div className="flex items-center gap-2">
          <ShieldCheck aria-hidden="true" className="size-4 shrink-0 text-[#1E7F4F]" />
          <p className="text-sm font-semibold text-[#0F0F0F]">
            Dados da cliente, nas regras da LGPD
          </p>
        </div>
        <ul className="mt-3 divide-y divide-[#ECECEC]">
          {TRILHA_LGPD.map((item) => (
            <li key={item.id} className="py-2 text-[13px] text-[#404040]">
              {item.texto}
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setModal("exportar")}
            className="cursor-pointer rounded-full border border-[#ECECEC] px-4 py-2.5 text-sm font-semibold text-[#0F0F0F] transition hover:border-[#FF6F61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
          >
            Exportar dados
          </button>
          <button
            type="button"
            onClick={() => setModal("apagar")}
            className="cursor-pointer rounded-full border border-[#F2C6C0] px-4 py-2.5 text-sm font-semibold text-[#B42318] transition hover:bg-[#B42318]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
          >
            Apagar tudo
          </button>
        </div>
      </section>

      {modal === "termo" && (
        <Modal titleId="modal-termo-titulo" onClose={closeModal}>
          <h2
            id="modal-termo-titulo"
            className="font-serif text-lg font-semibold text-[#0F0F0F]"
          >
            Termo de consentimento, peeling de diamante
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#404040]">
            Eu, Mariana Souza, autorizo a realização do peeling de diamante na
            clínica. Entendi como o procedimento funciona, fui informada dos
            cuidados antes e depois de cada sessão e tirei minhas dúvidas com a
            equipe.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#404040]">
            Sei que a pele pode ficar levemente avermelhada nos primeiros dias
            e que o resultado varia de pessoa pra pessoa. Autorizo a guarda das
            minhas fotos de antes e depois só pra acompanhar o tratamento, sem
            nenhuma divulgação.
          </p>
          <p className="mt-3 text-[12px] text-[#737373]">
            Aceito pelo WhatsApp em 02/06
          </p>
          <BotaoFechar onClose={closeModal} />
        </Modal>
      )}

      {modal === "exportar" && (
        <Modal titleId="modal-exportar-titulo" onClose={closeModal}>
          <h2
            id="modal-exportar-titulo"
            className="font-serif text-lg font-semibold text-[#0F0F0F]"
          >
            Exportar dados
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#404040]">
            A Bella gera um arquivo com tudo da cliente, ficha, fotos e
            conversas, e entrega no seu WhatsApp.
          </p>
          <BotaoFechar onClose={closeModal} />
        </Modal>
      )}

      {modal === "apagar" && (
        <Modal titleId="modal-apagar-titulo" onClose={closeModal}>
          <h2
            id="modal-apagar-titulo"
            className="font-serif text-lg font-semibold text-[#0F0F0F]"
          >
            Apagar tudo
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#404040]">
            Apaga ficha, fotos e conversas de forma definitiva. A clínica fica
            em dia com o direito de exclusão da LGPD.
          </p>
          <button
            type="button"
            disabled
            aria-describedby="apagar-aviso"
            className="mt-5 w-full cursor-not-allowed rounded-full bg-[#B42318]/40 px-5 py-3 text-sm font-semibold text-white"
          >
            Apagar definitivamente
          </button>
          <p
            id="apagar-aviso"
            className="mt-1.5 text-center text-[11px] text-[#737373]"
          >
            desativado na demonstração
          </p>
          <BotaoFechar onClose={closeModal} />
        </Modal>
      )}
    </div>
  )
}
