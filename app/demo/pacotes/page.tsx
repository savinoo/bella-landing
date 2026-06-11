import type { Metadata } from "next"
import { PacotesDemo } from "@/components/demo/PacotesDemo"

export const metadata: Metadata = {
  title: "Controle de pacotes — Bella",
}

export default function DemoPacotesPage() {
  return <PacotesDemo />
}
