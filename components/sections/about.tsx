"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Brain, TrendingUp, Smartphone } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Equilíbrio interior como base para decisões estratégicas",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Carreira",
    description: "Clareza de propósito e direcionamento profissional real",
  },
  {
    icon: Smartphone,
    title: "Ativação Digital",
    description: "Presença estratégica que comunica quem você realmente é",
  },
]

export function AboutSection() {
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
      id="quem-somos"
      ref={sectionRef}
      className="bg-[#F1EFED] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={contentRef} className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Decorative */}
          <div className="lg:col-span-3">
            <span className="font-serif text-8xl font-bold text-[#C9A84C]/30">01</span>
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
              QUEM SOMOS
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl font-semibold text-[#1A1A1A] md:text-5xl text-balance">
              Uma consultoria que olha para você por inteiro.
            </h2>

            <div className="mt-8 flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LYS%20OLD%20MONEY%20-%20menor-iGMc5b8ZWPLhvWR6tPhKgrEg9GLgxe.jpg"
                    alt="Lys Ribeiro - Fundadora da VI.P & NÔUS"
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover border-2 border-[#C9A84C]"
                  />
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C9A84C]/30 -z-10" />
                </div>
                <p className="mt-4 text-center font-semibold text-[#1A1A1A]">Lys Ribeiro</p>
                <p className="text-center text-sm text-[#888888]">Fundadora</p>
              </div>
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
                  A VI.P & NÔUS nasceu da visão de Lys Ribeiro — especialista em gestão comportamental com mais de 15 anos de experiência — de unir desenvolvimento humano, gestão de carreira e estratégia digital em um único ecossistema.
                </p>
                <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
                  Somos a única consultoria que integra Astrologia Comportamental, Manifestação Consciente e estratégia de negócios — porque empreendedoras prósperas se constroem de dentro para fora.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group border border-[#C9A84C]/20 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C9A84C]/10"
                >
                  <feature.icon className="h-8 w-8 text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="mt-4 font-semibold text-[#C9A84C]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
