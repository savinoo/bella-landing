import Image from "next/image"

const compromissos = [
  "No ar em um dia útil",
  "A gente vai até a sua clínica, no Rio",
  "Ajustes e acompanhamento todo mês",
]

export function QuemEntrega() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-6 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-[-12%] -z-10 h-[22rem] w-[22rem] rounded-full bg-[#FFB347]/[0.14] blur-[100px]"
      />
      <div className="max-w-6xl mx-auto grid gap-12 md:gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <figure className="mx-auto w-full max-w-sm md:max-w-md md:mx-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[3rem] bg-gradient-to-br from-[#FFB347]/25 to-[#FF6F61]/15 blur-2xl"
            />
            <div className="-rotate-1 rounded-[2rem] bg-white p-2.5 shadow-[0_28px_60px_-28px_rgba(15,15,15,0.3)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/founders-rio.jpg"
                  alt="Lucas e Thaiz no Rio de Janeiro"
                  fill
                  sizes="(min-width: 768px) 440px, 92vw"
                  className="object-cover"
                  style={{ objectPosition: "center 26%" }}
                />
              </div>
            </div>
          </div>
          <figcaption className="mt-5 text-sm text-[#7A6A61]">
            Lucas e Thaiz, no Rio.
          </figcaption>
        </figure>

        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            <span aria-hidden className="size-1.5 rounded-full bg-[#FF6F61]" />
            Quem entrega
          </p>
          <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] md:text-5xl font-medium tracking-[-0.02em] text-[#0F0F0F]">
            A gente instala, acompanha e ajusta. Pessoalmente.
          </h2>
          <ul className="mt-8 space-y-4">
            {compromissos.map((linha) => (
              <li key={linha} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="size-2 shrink-0 rounded-full bg-[#FF6F61]"
                />
                <span className="text-base md:text-lg text-[#404040]">
                  {linha}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
