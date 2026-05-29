import { Eyebrow } from "@/components/Eyebrow"

// Contrato de dados para o drop-in futuro:
// metrics: numeros reais do case da ancora (ex: { label: "Agendamentos no 1o mes", value: "37" })
// testimonial: depoimento opcional da dona da clinica
type Metric = { label: string; value: string }
type Testimonial = { quote: string; name: string; role: string }

type Props = {
  metrics: Metric[]
  testimonial?: Testimonial
}

export function ResultadosCase({ metrics, testimonial }: Props) {
  if (!metrics || metrics.length === 0) return null

  return (
    <section className="px-6 py-24 bg-[#FFF4F0]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Eyebrow>Resultado de verdade</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            O que a Bella fez numa clínica como a sua.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-8 rounded-2xl border border-[#F2D9CF] bg-white text-center"
            >
              <p className="font-serif text-5xl text-[#FF6F61]">{m.value}</p>
              <p className="mt-3 text-base text-[#404040]">{m.label}</p>
            </div>
          ))}
        </div>

        {testimonial ? (
          <figure className="mt-12 max-w-3xl mx-auto text-center">
            <blockquote className="text-xl text-[#0F0F0F] leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-4 text-sm text-[#737373]">
              {testimonial.name}, {testimonial.role}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  )
}
