"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { InnerNavigation } from "./inner-navigation"
import { Footer } from "./footer"

interface ServicePageLayoutProps {
  packageNumber: string
  title: string
  subtitle: string
  description: string
  features: {
    title: string
    description: string
  }[]
  includes: string[]
  idealFor: string[]
  prevService?: {
    href: string
    title: string
  }
  nextService?: {
    href: string
    title: string
  }
}

export function ServicePageLayout({
  packageNumber,
  title,
  subtitle,
  description,
  features,
  includes,
  idealFor,
  prevService,
  nextService,
}: ServicePageLayoutProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#F1EFED]">
      <InnerNavigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#0A0A0A] px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <svg
            className="absolute right-0 top-0 h-full w-1/2"
            viewBox="0 0 400 800"
            fill="none"
          >
            <path
              d="M100 0 L100 800"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
            <path
              d="M200 0 L200 800"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
            <path
              d="M300 0 L300 800"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
            <circle cx="200" cy="400" r="150" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="400" r="100" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className={`relative mx-auto max-w-7xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Back Link */}
          <Link
            href="/#servicos"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#888888] transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft size={16} />
            Voltar para Serviços
          </Link>

          {/* Package Number */}
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C]">
            PACOTE {packageNumber}
          </p>

          {/* Title */}
          <h1 className="mt-6 font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-serif text-xl text-[#C9A84C] md:text-2xl">
            {subtitle}
          </p>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#CCCCCC]">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://wa.me/5511975490354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
            >
              QUERO CONTRATAR
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`px-6 py-24 lg:px-8 lg:py-32 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Features */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#1A1A1A]">
                O que você vai conquistar
              </h2>
              <div className="mt-8 space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A84C] font-serif text-sm text-[#C9A84C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included & Ideal For */}
            <div className="space-y-12">
              {/* What's Included */}
              <div className="bg-[#0A0A0A] p-8">
                <h3 className="font-serif text-xl font-semibold text-white">
                  O que está incluso
                </h3>
                <ul className="mt-6 space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-[#C9A84C]">&#10022;</span>
                      <span className="text-sm leading-relaxed text-[#CCCCCC]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="border border-[#C9A84C] p-8">
                <h3 className="font-serif text-xl font-semibold text-[#1A1A1A]">
                  Ideal para quem
                </h3>
                <ul className="mt-6 space-y-4">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-[#C9A84C]">→</span>
                      <span className="text-sm leading-relaxed text-[#1A1A1A]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation between services */}
          <div className="mt-24 flex items-center justify-between border-t border-[#C9A84C]/30 pt-12">
            {prevService ? (
              <Link
                href={prevService.href}
                className="group flex items-center gap-3 text-[#1A1A1A] transition-colors hover:text-[#C9A84C]"
              >
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs text-[#888888]">Anterior</p>
                  <p className="font-serif text-lg">{prevService.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService ? (
              <Link
                href={nextService.href}
                className="group flex items-center gap-3 text-right text-[#1A1A1A] transition-colors hover:text-[#C9A84C]"
              >
                <div>
                  <p className="text-xs text-[#888888]">Próximo</p>
                  <p className="font-serif text-lg">{nextService.title}</p>
                </div>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A0A0A] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl text-balance">
            Pronta para transformar sua carreira e seu negócio?
          </h2>
          <p className="mt-6 text-lg text-[#888888]">
            Entre em contato e descubra como podemos ajudar você a alcançar resultados extraordinários.
          </p>
          <a
            href="https://wa.me/5511975490354"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
          >
            AGENDAR CONVERSA
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
