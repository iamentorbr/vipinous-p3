"use client"

import { useState } from "react"
import Link from "next/link"
import { InnerNavigation } from "@/components/inner-navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, ArrowLeft, RotateCcw, Check } from "lucide-react"

type PackageKey = "start" | "growth" | "start_growth" | "execucao_global"

type Option = {
  label: string
  value: PackageKey
}

type Question = {
  id: number
  title: string
  subtitle: string
  options: Option[]
}

const questions: Question[] = [
  {
    id: 1,
    title: "Em que momento o seu negócio está hoje?",
    subtitle: "Escolha a frase que mais se aproxima da sua realidade atual.",
    options: [
      { label: "Estou começando e preciso me estruturar por dentro antes de acelerar qualquer coisa", value: "start" },
      { label: "Já tenho minha base de carreira em movimento, mas meu negócio ainda não aparece no digital", value: "growth" },
      { label: "Quero as duas frentes rodando juntas, com a execução digital feita por parceiros", value: "start_growth" },
      { label: "Quero que a operação saia da minha mão por completo e eu apenas lidere", value: "execucao_global" },
    ],
  },
  {
    id: 2,
    title: "Qual é a sua maior necessidade agora?",
    subtitle: "O que destravaria o seu próximo passo?",
    options: [
      { label: "Clareza de propósito e segurança para tomar decisões de carreira e comportamento", value: "start" },
      { label: "Construir uma presença digital consistente e alinhada a quem eu sou", value: "growth" },
      { label: "Parar de produzir conteúdo eu mesma e focar no que só eu posso fazer", value: "start_growth" },
      { label: "Liderar decisões de alto nível sem tocar em nada operacional", value: "execucao_global" },
    ],
  },
  {
    id: 3,
    title: "Quanto da execução você quer delegar?",
    subtitle: "Pense em quem coloca a mão na massa no dia a dia.",
    options: [
      { label: "Nenhuma por enquanto. Quero orientação para eu mesma executar", value: "start" },
      { label: "Quero direcionamento estratégico de conteúdo, mas ainda produzo eu mesma", value: "growth" },
      { label: "Quero o conteúdo produzido por parceiros, não apenas planejado", value: "start_growth" },
      { label: "Quero tudo produzido e publicado, com um ponto único de comando", value: "execucao_global" },
    ],
  },
  {
    id: 4,
    title: "Como você prefere investir o seu tempo?",
    subtitle: "Onde a sua energia gera mais valor hoje?",
    options: [
      { label: "Desenvolvendo a mim mesma como profissional primeiro", value: "start" },
      { label: "Aparecendo de forma mais estratégica no digital", value: "growth" },
      { label: "Focando no que só eu posso fazer enquanto a execução acontece", value: "start_growth" },
      { label: "Apenas liderando, com relatórios executivos e prioridade de agenda", value: "execucao_global" },
    ],
  },
]

const results: Record<
  PackageKey,
  { badge: string; title: string; price: string; description: string; href: string; tag?: string }
> = {
  start: {
    badge: "PACOTE START",
    title: "Gestão de Carreira e Comportamento",
    price: "R$ 1.500/mês",
    description:
      "Seu momento pede estrutura interna. Antes de acelerar qualquer outra frente, vamos organizar carreira e comportamento para que suas decisões venham de um lugar de clareza e segurança.",
    href: "/servicos/gestao-carreira-comportamento",
  },
  growth: {
    badge: "PACOTE GROWTH",
    title: "Gestão de Carreira, Comportamento e Ativação Digital",
    price: "R$ 2.000/mês",
    description:
      "Sua base já está em movimento e chegou a hora do negócio aparecer. Vamos traduzir quem você é em uma presença digital consistente, autêntica e estratégica.",
    href: "/servicos/gestao-ativacao-digital",
  },
  start_growth: {
    badge: "PACOTE START & GROWTH",
    title: "Gestão Completa + Agência de Marketing Digital",
    price: "R$ 3.000/mês",
    description:
      "Você quer as duas frentes geridas em conjunto, com a execução digital feita por parceiros. Foca no que só você pode fazer enquanto a produção de conteúdo acontece por você.",
    href: "/servicos/gestao-completa-agencia",
    tag: "MAIS PROCURADO",
  },
  execucao_global: {
    badge: "PACOTE EXECUÇÃO GLOBAL",
    title: "Operação Completa do Seu Negócio",
    price: "R$ 5.000/mês",
    description:
      "Você está pronta para liderar, não executar. A operação sai da sua mão: entregáveis produzidos e publicados, um ponto único de comando e relatório executivo mensal.",
    href: "/servicos/execucao-global",
    tag: "TOPO DA JORNADA",
  },
}

const order: PackageKey[] = ["start", "growth", "start_growth", "execucao_global"]

export default function DiagnosticoPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<PackageKey[]>([])

  const isResult = step >= questions.length
  const current = questions[step]
  const progress = Math.round((step / questions.length) * 100)

  const handleSelect = (value: PackageKey) => {
    const next = [...answers]
    next[step] = value
    setAnswers(next)
    setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleRestart = () => {
    setStep(0)
    setAnswers([])
  }

  const getRecommendation = (): PackageKey => {
    const tally: Record<PackageKey, number> = {
      start: 0,
      growth: 0,
      start_growth: 0,
      execucao_global: 0,
    }
    answers.forEach((a) => {
      tally[a] += 1
    })
    let best: PackageKey = "start"
    let bestCount = -1
    // Iterate in tier order so ties resolve to the higher-tier package the user leaned toward
    order.forEach((key) => {
      if (tally[key] >= bestCount) {
        bestCount = tally[key]
        best = key
      }
    })
    return best
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <InnerNavigation />

      <section className="px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
              DIAGNÓSTICO GRATUITO
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold text-white md:text-5xl text-balance">
              Descubra o pacote certo para o seu momento.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#888888] text-pretty">
              Quatro perguntas rápidas para entender onde o seu negócio está hoje e qual nível de acompanhamento faz sentido agora.
            </p>
          </div>

          {!isResult ? (
            <div className="mt-14">
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between text-xs tracking-wider text-[#888888]">
                  <span>
                    Pergunta {step + 1} de {questions.length}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-3 h-1 w-full bg-[#333333]">
                  <div
                    className="h-full bg-[#C9A84C] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl text-balance">
                {current.title}
              </h2>
              <p className="mt-3 text-[#888888]">{current.subtitle}</p>

              {/* Options */}
              <div className="mt-8 flex flex-col gap-4">
                {current.options.map((option) => {
                  const selected = answers[step] === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`group flex items-start gap-4 border p-5 text-left transition-all ${
                        selected
                          ? "border-[#C9A84C] bg-[#C9A84C]/5"
                          : "border-[#333333] bg-[#0A0A0A] hover:border-[#C9A84C]"
                      }`}
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-[#C9A84C] text-[#C9A84C]">
                        {selected && <Check size={14} />}
                      </span>
                      <span className="text-sm leading-relaxed text-[#CCCCCC] group-hover:text-white">
                        {option.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Back */}
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-8 inline-flex items-center gap-2 text-sm tracking-wider text-[#888888] transition-colors hover:text-white"
                >
                  <ArrowLeft size={16} />
                  Voltar
                </button>
              )}
            </div>
          ) : (
            <ResultCard recommendation={getRecommendation()} onRestart={handleRestart} />
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ResultCard({
  recommendation,
  onRestart,
}: {
  recommendation: PackageKey
  onRestart: () => void
}) {
  const result = results[recommendation]

  return (
    <div className="mt-14">
      <div className="border border-[#C9A84C] bg-[#0A0A0A]">
        <div className="border-b border-[#333333] p-8 text-center lg:p-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#888888]">
            RECOMENDAÇÃO PARA O SEU MOMENTO
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
              {result.badge}
            </p>
            {result.tag && (
              <span className="border border-[#C9A84C] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#C9A84C]">
                {result.tag}
              </span>
            )}
          </div>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-4xl text-balance">
            {result.title}
          </h2>
          <p className="mt-4 font-serif text-2xl text-[#C9A84C]">{result.price}</p>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[#CCCCCC] text-pretty">
            {result.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 p-8 sm:flex-row sm:justify-center lg:p-12">
          <Link
            href={result.href}
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
          >
            Ver detalhes do pacote
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/5511975490354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:bg-white hover:text-[#000000]"
          >
            Conversar com a Lys
          </a>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="mx-auto mt-8 flex items-center gap-2 text-sm tracking-wider text-[#888888] transition-colors hover:text-white"
      >
        <RotateCcw size={16} />
        Refazer o diagnóstico
      </button>
    </div>
  )
}
