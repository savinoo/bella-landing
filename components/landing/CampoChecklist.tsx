"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "campo-2026-06-12"

const ITEMS = [
  "Cartões impressos (A6 e 90x50, arquivos em ~/sales/cartoes-campo/)",
  "Celular carregado + powerbank",
  "Demo testada de manhã (manda um oi no número da Bella e confirma resposta)",
  "Rota salva no Maps, planilha ou áudio pra tracking",
  "Meta do dia, 10 portas, 3 contatos de dona, zero venda forçada",
] as const

function readStored(): boolean[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return ITEMS.map(() => false)
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return ITEMS.map(() => false)
    return ITEMS.map((_, i) => parsed[i] === true)
  } catch {
    return ITEMS.map(() => false)
  }
}

export function CampoChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() =>
    ITEMS.map(() => false)
  )

  useEffect(() => {
    setChecked(readStored())
  }, [])

  function toggle(index: number) {
    setChecked((prev) => {
      const next = prev.map((value, i) => (i === index ? !value : value))
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // sem localStorage, segue só em memória
      }
      return next
    })
  }

  return (
    <ul className="space-y-3">
      {ITEMS.map((item, i) => (
        <li key={item}>
          <label className="flex cursor-pointer items-start gap-3.5 rounded-2xl border border-[#EADFD8] bg-white p-4 transition-colors has-checked:border-[#25D366]/50 has-checked:bg-[#25D366]/5">
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-0.5 size-6 shrink-0 accent-[#25D366]"
            />
            <span
              className={`text-base leading-snug ${
                checked[i] ? "text-[#7A6A61] line-through" : "text-[#0F0F0F]"
              }`}
            >
              {item}
            </span>
          </label>
        </li>
      ))}
    </ul>
  )
}
