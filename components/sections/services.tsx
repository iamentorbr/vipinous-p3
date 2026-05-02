"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const services = [
  {
    badge: "PACOTE START",
    title: "Gestão de Carreira e Comportamento",
    href: "/servicos/gestao-carreira-comportamento",
    features: [
      "Você descobre, pelo seu mapa astral, os padrões comportamentais que estão travando suas decisões e limitando seus resultados",
      "Identifica crenças inconscientes que sabotam sua liderança e aprende a dissolvê-las com método, não com força de vontade",
      "Constrói clareza real sobre seu propósito profissional e o caminho mais alinhado com quem você genuinamente é",
      "Passa a tomar decisões de carreira com segurança, porque você entende sua própria lógica de funcionamento",
      "Sai de cada semana com um plano de ação concreto e com alguém ao lado para garantir que ele acontece",
    ],
    cta: "Saiba mais",
  },
  {
    badge: "PACOTE GROWTH",
    title: "Gestão de Carreira, Comportamento e Ativação Digital",
    href: "/servicos/gestao-ativacao-digital",
    features: [
      "Tudo do Pacote 01, e ainda:",
      "Descobre como sua essência e seu posicionamento comportamental se traduzem em uma presença digital autêntica e magnética",
      "Transforma sua história e seus diferenciais em uma narrativa estratégica que atrai as pessoas certas sem precisar performar quem não é",
      "Seus perfis e canais passam a comunicar o nível profissional que você já alcançou e que o mercado ainda não estava enxergando",
      "Sai com um plano de conteúdo que faz sentido para a sua vida real sem fórmulas genéricas, sem sobrecarga",
    ],
    cta: "Saiba mais",
  },
  {
    badge: "PACOTE START & GROWTH",
    title: "Gestão Completa + Agência de Marketing Digital",
    href: "/servicos/gestao-completa-agencia",
    features: [
      "Tudo dos Pacotes 01 e 02, e ainda:",
      "Sua marca pessoal e empresarial passa a ser gerida com a mesma estratégia que governa o seu desenvolvimento interno",
      "Você para de perder tempo com produção de conteúdo e passa a focar no que só você pode fazer enquanto a execução acontece por você",
      "Cada post, arte e legenda carrega intenção estratégica — não é conteúdo pelo conteúdo, é comunicação que posiciona e converte",
      "Recebe relatórios mensais que mostram onde seu negócio está crescendo e onde a energia precisa ser redirecionada",
    ],
    cta: "Saiba mais",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8", "duration-700")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="bg-[#0A0A0A] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="mt-6 font-serif text-4xl font-semibold text-white md:text-5xl text-balance">
            Escolha o nível de suporte<br />
            que o seu negócio precisa.
          </h2>
        </div>

        {/* Service Cards - Horizontal Layout */}
        <div ref={cardsRef} className="mt-16 flex flex-col gap-8 opacity-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col lg:flex-row border border-[#333333] bg-[#0A0A0A] transition-all hover:border-[#C9A84C] hover:shadow-xl hover:shadow-[#C9A84C]/10"
            >
              {/* Left Side - Badge and Title */}
              <div className="flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#333333] p-8 lg:p-12 lg:w-[380px] lg:min-w-[380px]">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
                  {service.badge}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-white lg:text-3xl">
                  {service.title}
                </h3>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center justify-center bg-[#C9A84C] px-6 py-3 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90 w-fit"
                >
                  {service.cta}
                </Link>
              </div>

              {/* Right Side - Features */}
              <div className="flex-1 p-8 lg:p-12">
                <ul className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#C9A84C] flex-shrink-0">✦</span>
                      <span className="text-sm leading-relaxed text-[#CCCCCC]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
