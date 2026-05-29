import { Sparkles } from "lucide-react"
import { ChatMockup } from "@/components/ChatMockup"
import { CTAPrimary } from "@/components/CTAPrimary"
import { CTASecondary } from "@/components/CTASecondary"
import { Eyebrow } from "@/components/Eyebrow"

const WHATSAPP_URL =
  "https://wa.me/5528999301848?text=Oi%20Lucas%2C%20vi%20a%20Bella%20no%20site%20e%20quero%20saber%20mais%20pra%20minha%20cl%C3%ADnica"

const BELLA_DEMO_URL = "https://wa.me/5521983962982"

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-6 max-w-xl">
          <Eyebrow icon={Sparkles} withDot>
            Feito no Rio para clínicas de estética
          </Eyebrow>

          <h1 className="font-serif text-[44px] sm:text-6xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-[#0F0F0F]">
            Sua clínica não perde mais a cliente que chama no WhatsApp.
          </h1>

          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-lg">
            A Bella responde no WhatsApp na hora, de dia e de noite, e agenda
            direto no seu Google Calendar. No ar em um dia útil, treinada nos
            procedimentos e nos preços da sua clínica.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <CTAPrimary href={WHATSAPP_URL}>
              Quero pra minha clínica
            </CTAPrimary>
            <CTASecondary href={BELLA_DEMO_URL}>
              Ver Bella no WhatsApp
            </CTASecondary>
          </div>

          <p className="text-sm text-[#737373]">
            A gente atende no Rio e vai até a sua clínica
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-[#FF6F61]/18 via-[#FFB347]/14 to-transparent blur-2xl"
          />
          <ChatMockup />
        </div>
      </div>
    </section>
  )
}
