"use client"

import { useEffect, useRef } from "react"

const differentials = [
  {
    number: "01",
    title: "Metodologia Integrativa",
    description:
      "Unimos comportamento, carreira e presença digital em um processo coeso. Não são três serviços separados — é uma jornada única.",
  },
  {
    number: "02",
    title: "Comportamento & Carreira",
    description:
      "Um olhar global para o negócio e para a empresária — integrando quem você é com o que você constrói. Entendemos padrões, potencialidades e bloqueios com profundidade.",
  },
  {
    number: "03",
    title: "Manifestação Consciente",
    description:
      "A Lei da Atração aplicada ao negócio: alinhamento de intenção, identidade e ação. Porque resultado sustentável começa no nível energético.",
  },
  {
    number: "04",
    title: "Acompanhamento Real",
    description:
      "Não somos uma plataforma. Somos uma parceira. Suporte ativo entre sessões, planejamento conjunto e presença real em cada etapa.",
  },
]

export function DifferentialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
            entry.target.classList.add("duration-700")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="bg-[#F1EFED] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={contentRef}>
          {/* Section Header */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
              POR QUE A VI.P & NÔUS
            </p>
            <h2 className="mt-6 font-serif text-4xl font-semibold text-[#1A1A1A] md:text-5xl text-balance">
              Uma abordagem que nenhuma outra consultoria oferece.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-[#C9A84C]">
              {"\"Não entregamos fórmulas. Entregamos estrutura com verdade.\""}
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {differentials.map((item) => (
              <div
                key={item.number}
                className="group border border-transparent bg-white p-8 transition-all hover:border-[#C9A84C]/30 hover:shadow-lg"
              >
                <span className="font-serif text-5xl font-bold text-[#C9A84C]/30">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#888888]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-[#000000] px-8 py-12 text-center lg:px-16 lg:py-16">
          <h3 className="font-serif text-3xl font-semibold text-[#C9A84C] md:text-4xl text-balance">
            Pronta para construir de dentro para fora?
          </h3>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
            >
              Ver Serviços
            </a>
            <a
              href="https://wa.me/5511975490354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:bg-white hover:text-[#000000]"
            >
              Agendar Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
