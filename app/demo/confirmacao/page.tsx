import type { Metadata } from "next"
import { ConfirmacaoDemo } from "@/components/demo/ConfirmacaoDemo"

export const metadata: Metadata = {
  title: "Confirmação e sinal Pix — Bella",
}

export default function DemoConfirmacaoPage() {
  return <ConfirmacaoDemo />
}
