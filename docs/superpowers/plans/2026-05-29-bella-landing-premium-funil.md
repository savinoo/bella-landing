# Bella landing, premium como funil completo, Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconciliar a landing bella.savinoteam.tech com o premium-by-default, contando o funil completo (atrai, atende, mostra) numa narrativa unica, consertando a caixa de video vazia e nomeando a pagina de metricas como entregavel, sem inventar resultado.

**Architecture:** Next.js 16 nao-padrao, Tailwind v4 por CSS vars, shadcn base-ui. Mudancas sao de conteudo e uma secao nova (FunilCompleto), seguindo o padrao existente (Eyebrow mais grid de cards, cores inline coral #FF6F61 e verde #25D366). Sem redesign visual. Componentes pequenos e com proposito unico.

**Tech Stack:** Next.js 16.2.6 (Turbopack), React 19, Tailwind v4, lucide-react, Geist mais Fraunces.

**Verificacao (adaptacao consciente):** Este repo nao tem runner de testes e os componentes sao apresentacionais. O gate de cada tarefa e `npm run build` passar (pega erro de TS e de import). O gate visual final e screenshot via Playwright do crawl4ai-env, aprovado pelo Lucas, antes de qualquer merge ou deploy. Isso casa com os criterios de sucesso do spec.

**Spec:** `docs/superpowers/specs/2026-05-29-bella-landing-premium-funil-design.md`

**Branch:** `feature/landing-premium-funil` (ja criado, spec ja commitado nele). NAO tocar na `main` (producao) ate Lucas aprovar.

**Regras de copy (do spec):** sem travessoes, dois-pontos ou asteriscos no texto da pagina; sem vicios de voz de IA.

**Convencao de commit (repo sem git config global):**
```bash
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "..."
```

**Componentes que NAO mudam:** Hero.tsx (porta de entrada pela dor, premium entra como elevacao depois), ChatMockup.tsx, CTAs, Eyebrow.tsx, LiveDemo.tsx, ValueBullets.tsx (ja corrigido, so reposicionado pela ordem).

---

## Task 0: Pre-flight

**Files:** nenhum (so leitura e baseline)

- [ ] **Step 1: Confirmar branch**

Run: `cd /home/savino/projects/bella-landing && git branch --show-current`
Expected: `feature/landing-premium-funil`

- [ ] **Step 2: Ler os docs internos do Next antes de escrever codigo (AGENTS.md exige)**

Run: `ls node_modules/next/dist/docs/ 2>/dev/null | head; sed -n '1,40p' AGENTS.md`
Expected: ver os guias disponiveis e a nota de que esse Next e nao-padrao. Nenhuma das mudancas deste plano usa API nova de roteamento, mas confirmar antes de assumir qualquer convencao.

- [ ] **Step 3: Baseline de build (garantir que partimos de verde)**

Run: `npm run build 2>&1 | tail -15`
Expected: build conclui sem erro. Se falhar antes de qualquer mudanca, parar e investigar.

---

## Task 1: VideoSection some quando nao ha video

**Files:**
- Modify: `components/VideoSection.tsx`

A caixa aspect-video cinza e o que aparece como retangulo morto no topo. O componente passa a retornar `null` quando nao ha `NEXT_PUBLIC_VIDEO_ID`. O LiteYouTubeEmbed continua igual quando o ID existir.

- [ ] **Step 1: Reescrever VideoSection.tsx**

Substituir o conteudo inteiro de `components/VideoSection.tsx` por:

```tsx
"use client"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { Eyebrow } from "@/components/Eyebrow"

const VIDEO_ID = process.env.NEXT_PUBLIC_VIDEO_ID

export function VideoSection() {
  if (!VIDEO_ID) return null

  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Demo</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
          Veja a Bella rodando. 90 segundos.
        </h2>
      </div>
      <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_24px_64px_-16px_rgba(15,15,15,0.18)] border border-[#ECECEC]">
        <LiteYouTubeEmbed
          id={VIDEO_ID}
          title="Demo da Bella, atendente IA pra clínica de estética"
          poster="maxresdefault"
          noCookie
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS, sem erro de TS.

- [ ] **Step 3: Commit**

```bash
git add components/VideoSection.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: VideoSection some quando nao ha video, em vez de caixa vazia"
```

---

## Task 2: Componente FunilCompleto (o coracao do premium)

**Files:**
- Create: `components/FunilCompleto.tsx`

Secao nova com os tres tempos (Atrai, Atende, Mostra). Coral nos dois de crescimento (atrai e mostra), verde no do meio (atende). Numeracao 01 02 03 mais seta entre os cards no desktop, pro cerebro ler funil. O tempo Mostra nomeia a pagina de metricas como entregavel, so em texto e icone (sem imagem, regra de honestidade do spec).

- [ ] **Step 1: Criar components/FunilCompleto.tsx**

```tsx
import { Megaphone, MessageCircle, LineChart } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

type Tempo = {
  step: string
  icon: LucideIcon
  title: string
  body: string
  accent: "coral" | "green"
}

const tempos: Tempo[] = [
  {
    step: "01",
    icon: Megaphone,
    title: "Atrai",
    body: "Conteúdo de vídeo que faz cliente nova chamar a sua clínica.",
    accent: "coral",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Atende",
    body: "A Bella responde na hora e agenda, de dia e de noite.",
    accent: "green",
  },
  {
    step: "03",
    icon: LineChart,
    title: "Mostra",
    body: "Uma página sua mostra de onde veio cada cliente e como evolui ao longo do tempo.",
    accent: "coral",
  },
]

export function FunilCompleto() {
  return (
    <section className="px-6 py-24 bg-white border-y border-[#F2D9CF]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Eyebrow>O funil completo</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            Da primeira mensagem até a agenda cheia.
          </h2>
          <p className="mt-4 text-lg text-[#404040] leading-relaxed">
            A gente cuida das três pontas. Traz cliente nova com conteúdo,
            atende na hora pelo WhatsApp, e mostra de onde cada agendamento veio.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-4">
          {tempos.map(({ step, icon: Icon, title, body, accent }, i) => {
            const color = accent === "coral" ? "#FF6F61" : "#25D366"
            return (
              <div key={title} className="relative">
                <div className="h-full p-8 rounded-2xl border border-[#ECECEC] bg-white">
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex size-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${color}1A`, color }}
                    >
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-2xl text-[#D4D4D4]">
                      {step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#0F0F0F]">
                    {title}
                  </h3>
                  <p className="mt-3 text-base text-[#404040] leading-relaxed">
                    {body}
                  </p>
                </div>
                {i < tempos.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 text-2xl text-[#D4D4D4]"
                  >
                    →
                  </span>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

Nota: o truque `${color}1A` e o mesmo 10 por cento de alpha que o codigo ja usa em `bg-[#FF6F61]/10`, so que dinamico por tempo. Estilo inline e aceitavel aqui porque a cor varia por item.

- [ ] **Step 2: Build (ainda nao esta na pagina, so confirma que compila)**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS. O componente compila mesmo sem estar importado ainda.

- [ ] **Step 3: Commit**

```bash
git add components/FunilCompleto.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: componente FunilCompleto (atrai, atende, mostra)"
```

---

## Task 3: Reordenar a pagina

**Files:**
- Modify: `app/page.tsx`

Inserir FunilCompleto logo depois do Hero (lugar nobre que era da caixa de video). Mover VideoSection pra perto do rodape, antes do LiveDemo (quando houver video, aparece la; sem video, retorna null).

- [ ] **Step 1: Reescrever app/page.tsx**

```tsx
import { Hero } from "@/components/Hero"
import { FunilCompleto } from "@/components/FunilCompleto"
import { ValueBullets } from "@/components/ValueBullets"
import { ComoFunciona } from "@/components/ComoFunciona"
import { FAQ } from "@/components/FAQ"
import { Pricing } from "@/components/Pricing"
import { VideoSection } from "@/components/VideoSection"
import { LiveDemo } from "@/components/LiveDemo"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FunilCompleto />
      <ValueBullets />
      <ComoFunciona />
      <FAQ />
      <Pricing />
      <VideoSection />
      <LiveDemo />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: insere funil apos o Hero e move video pro fim"
```

---

## Task 4: ComoFunciona mostra os papeis (Thaiz e Lucas)

**Files:**
- Modify: `components/ComoFunciona.tsx` (so a legenda da foto)

Agora que o premium esta em escopo, a foto faz dois trabalhos, confianca humana e mostrar quem faz o que. Trocar so a legenda da foto.

- [ ] **Step 1: Trocar a legenda da foto**

Localizar em `components/ComoFunciona.tsx`:

```tsx
            <p className="mt-3 text-sm text-[#737373] text-center">
              A gente, no Rio. Quem vai cuidar da sua clínica de perto.
            </p>
```

Substituir por:

```tsx
            <p className="mt-3 text-sm text-[#737373] text-center">
              A gente, no Rio. A Thaiz cuida do vídeo que atrai, o Lucas da IA
              que atende, e os dois vão até você.
            </p>
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/ComoFunciona.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: legenda dos fundadores mostra os papeis Thaiz e Lucas"
```

---

## Task 5: FAQ ganha duas perguntas do premium

**Files:**
- Modify: `components/FAQ.tsx` (so o array `faqs`)

- [ ] **Step 1: Adicionar dois itens ao array faqs**

Localizar o array `faqs` em `components/FAQ.tsx` e adicionar estes dois objetos no fim do array (depois do item "Quanto tempo até estar no ar?"):

```tsx
  {
    q: "Vocês também trazem cliente nova ou só atendem?",
    a: "Os dois. Além da Bella atender e agendar quem já chama, a gente produz conteúdo de vídeo pra trazer cliente nova, e mostra qual conteúdo virou agendamento. É o funil inteiro, não só o atendimento.",
  },
  {
    q: "Como vocês sabem que funcionou?",
    a: "Você tem uma página sua de métricas que liga cada peça de conteúdo ao lead e ao agendamento que ela trouxe, com a evolução ao longo do tempo. Dá pra ver de onde veio cada cliente. Sem isso ninguém consegue provar resultado de verdade.",
  },
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/FAQ.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: FAQ responde sobre trazer cliente e medir resultado"
```

---

## Task 6: Pricing reflete o funil completo

**Files:**
- Modify: `components/Pricing.tsx` (so o array `features`)

Adicionar duas linhas ao que esta incluido, pra a pagina casar com o funil premium. Manter proposta sob medida e risco invertido.

- [ ] **Step 1: Adicionar duas linhas ao array features**

Localizar o array `features` em `components/Pricing.tsx`:

```tsx
const features = [
  "Atendente de IA no WhatsApp da clínica",
  "Agendamento direto no Google Calendar",
  "Captura de cada lead que chega",
  "Instalada na voz e nos preços da sua clínica",
  "No ar em um dia útil",
  "Acompanhamento e ajustes todo mês",
]
```

Substituir por:

```tsx
const features = [
  "Conteúdo de vídeo pra atrair cliente nova",
  "Atendente de IA no WhatsApp da clínica",
  "Agendamento direto no Google Calendar",
  "Captura de cada lead que chega",
  "Página de métricas mostrando de onde veio cada cliente",
  "Instalada na voz e nos preços da sua clínica",
  "No ar em um dia útil",
  "Acompanhamento e ajustes todo mês",
]
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/Pricing.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: Pricing inclui conteudo e pagina de metricas"
```

---

## Task 7: Meta reflete atrair, atender e medir

**Files:**
- Modify: `app/layout.tsx` (so o objeto `metadata`)

Hoje a meta diz so atendimento. Atualizar pra incluir trazer e medir, sem inventar resultado.

- [ ] **Step 1: Substituir o objeto metadata**

Localizar o objeto `export const metadata` em `app/layout.tsx` e substituir por:

```tsx
export const metadata: Metadata = {
  title: "Bella, atrai, atende e agenda para clínica de estética | Savino",
  description:
    "A gente traz cliente nova com conteúdo, a Bella responde no WhatsApp 24 horas e agenda no Google Calendar, e você vê de onde veio cada cliente. Feita no Rio, a gente vai até a sua clínica.",
  openGraph: {
    title: "Bella, atrai, atende e agenda para clínica de estética",
    description:
      "Traz cliente nova, atende no WhatsApp 24h, agenda no Calendar e mostra de onde veio cada cliente. Feita no Rio, a gente vai até você.",
    url: "https://bella.savinoteam.tech",
    siteName: "Bella by Savino",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella, atrai, atende e agenda para clínica de estética",
    description:
      "Traz cliente nova, atende no WhatsApp 24h, agenda no Calendar e mostra de onde veio cada cliente. Feita no Rio, a gente vai até você.",
  },
}
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: meta reflete atrair, atender e medir"
```

---

## Task 8: Footer (ajuste leve, opcional)

**Files:**
- Modify: `components/Footer.tsx`

Refletir que e mais do que so atender, sem rebrandar pra estudio. Baixa prioridade; se ficar forcado, pular.

- [ ] **Step 1: Trocar o paragrafo de descricao**

Localizar em `components/Footer.tsx`:

```tsx
        <p className="mt-4 text-[#404040] max-w-md">
          Atendente de IA para clínica de estética. Construída por Lucas Savino,
          engenheiro de IA.
        </p>
```

Substituir por:

```tsx
        <p className="mt-4 text-[#404040] max-w-md">
          Traz cliente, atende no WhatsApp e mostra de onde vem cada
          agendamento. Feita no Rio por Lucas Savino e Thaiz.
        </p>
```

- [ ] **Step 2: Build**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: rodape reflete o funil e os dois fundadores"
```

---

## Task 9: ResultadosCase pronto para o futuro (construido, nao ligado)

**Files:**
- Create: `components/ResultadosCase.tsx`

Componente de prova de case, com contrato de dados claro e guarda de vazio (retorna null sem metricas). NAO entra em page.tsx agora, porque nao ha case real e caixa vazia derruba confianca (regra do spec). Fica pronto pra drop-in trivial quando a ancora gerar numeros e depoimento.

- [ ] **Step 1: Criar components/ResultadosCase.tsx**

```tsx
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
```

- [ ] **Step 2: Build (compila sem estar importado)**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS. Se o build reclamar de componente nao usado, e so warning, nao erro. Se virar erro de lint que quebra build, mover este componente pra um commit separado e abrir issue, mas o padrao do Next nao quebra build por import nao usado em arquivo proprio.

- [ ] **Step 3: Commit**

```bash
git add components/ResultadosCase.tsx
git -c user.name="Lucas Lorenzo Savino" -c user.email="lulosavino@gmail.com" commit -m "landing: ResultadosCase pronto pra drop-in quando houver case real (nao ligado)"
```

---

## Task 10: Gate visual (screenshot pra aprovacao do Lucas)

**Files:** nenhum (build, start, screenshot)

NAO fazer merge nem deploy aqui. So gerar a prova visual pro Lucas aprovar.

- [ ] **Step 1: Build de producao**

Run: `npm run build 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 2: Subir o server local**

Run (em background): `npm run start` (porta 3000). Esperar subir.

- [ ] **Step 3: Screenshot desktop e mobile via Playwright do crawl4ai-env**

Escrever `/tmp/shot_local.py` com este conteudo e rodar:

```python
import asyncio
from playwright.async_api import async_playwright

URL = "http://localhost:3000"

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=2)
        await pg.goto(URL, wait_until="networkidle", timeout=60000)
        await pg.wait_for_timeout(2500)
        await pg.screenshot(path="/tmp/bella_new_desktop.png", full_page=True)
        await pg.close()
        m = await b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=3)
        await m.goto(URL, wait_until="networkidle", timeout=60000)
        await m.wait_for_timeout(2500)
        await m.screenshot(path="/tmp/bella_new_mobile.png", full_page=True)
        await m.close()
        await b.close()
        print("done")

asyncio.run(main())
```

Run: `source ~/crawl4ai-env/bin/activate && python /tmp/shot_local.py && ls -la /tmp/bella_new_*.png`
Expected: dois PNGs gerados. Abrir e conferir, sem caixa vazia, funil visivel logo apos o Hero, papeis na foto dos fundadores, FAQ e Pricing com os itens novos.

- [ ] **Step 4: Servir os screenshots pro Lucas e pedir aprovacao**

Subir os PNGs via tmpfiles (ou fallback do CLAUDE.md) e mandar os links de download. Lucas e a fonte de verdade do visual; nao afirmar "ficou bom" so com build verde. Esperar o ok dele.

- [ ] **Step 5: Parar o server local**

Run: matar o processo do `npm run start`.

---

## Task 11: Deploy (SO depois do ok explicito do Lucas)

**Files:** nenhum (deploy)

NAO rodar esta task sem aprovacao do Lucas na Task 10. A auto-deploy do GitHub esta quebrada; o unico metodo que funciona e o Vercel CLI com token vcp_.

- [ ] **Step 1: Merge do branch pra main (so apos aprovacao)**

```bash
git checkout main
git merge --no-ff feature/landing-premium-funil -m "landing: premium como funil completo + conserto da caixa de video"
```

- [ ] **Step 2: Deploy de producao via Vercel CLI**

Lucas gera um token `vcp_` em vercel.com/account/tokens e passa. Entao:

```bash
cd /home/savino/projects/bella-landing
export VERCEL_TOKEN='<vcp_... do Lucas>'
npx --yes vercel@latest link --yes --project bella-landing --scope lucas-lorenzo-savinos-projects
npx --yes vercel@latest --prod --yes --scope lucas-lorenzo-savinos-projects
```

Nunca imprimir o token. Passos completos em `reference_bella_landing.md`.

- [ ] **Step 3: Verificar live na fonte**

Run: `curl -sI https://bella.savinoteam.tech | grep -i age` e abrir a pagina.
Expected: `age` baixo (deploy novo), pagina renderiza o funil. Confirmar visualmente, nao so HTTP 200.

---

## Notas finais

- A pagina de metricas (entregavel do cliente, com dados temporais) e construida pela frente paralela, NAO aqui. Quando existir, preencher o slot Mostra com screenshot real ou link, e o ResultadosCase com numeros reais. Ate la, so texto e icone.
- O componente ResultadosCase fica construido mas fora de page.tsx de proposito.
- Hero nao muda nesta passada.
