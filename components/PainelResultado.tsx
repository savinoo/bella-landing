import { LineChart, CalendarCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

type Card = {
  icon: LucideIcon
  title: string
  body: string
}

const cards: Card[] = [
  {
    icon: LineChart,
    title: "Painel de resultados ao vivo",
    body: "Um painel só seu mostra quantas clientes a Bella atendeu, quantos agendamentos ela marcou, quantas chegaram fora do horário e quanto custou. Atualizado o tempo todo, sem achismo no fim do mês.",
  },
  {
    icon: CalendarCheck,
    title: "Confirmação que segura a agenda",
    body: "Antes da consulta a Bella confirma o horário com a cliente. Quem precisa remarcar avisa a tempo e você reaproveita a cadeira em vez de deixar vazia.",
  },
]

export function PainelResultado() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Eyebrow>Novo</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            Você vê o resultado, não promessa
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-[#ECECEC] bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,15,15,0.06)] hover:border-[#D4D4D4] motion-reduce:transform-none"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#FF6F61]/10 text-[#FF6F61]">
                <Icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0F0F0F]">
                {title}
              </h3>
              <p className="mt-3 text-base text-[#404040] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://n8n.savinoteam.tech/dashboard/bella?token=58c72c4a71f971eef4fb39bf24cd0f88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#FF6F61] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Espiar o painel por dentro
          </a>
        </div>
      </div>
    </section>
  )
}
