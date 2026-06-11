import { DemoShell } from "@/components/demo/DemoShell"
import { ProntuarioDemo } from "@/components/demo/ProntuarioDemo"

export const metadata = { title: "Ficha da cliente | Bella" }

export default function DemoProntuarioPage() {
  return (
    <DemoShell
      title="Ficha da cliente em ordem"
      subtitle="Termo, fotos e dados guardados do jeito que a LGPD pede. Toque pra explorar."
    >
      <ProntuarioDemo />
    </DemoShell>
  )
}
