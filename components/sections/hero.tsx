"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center bg-[#000000] px-6 pt-20 lg:px-8"
    >
      {/* Geometric Line Art Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-20 lg:opacity-30"
          viewBox="0 0 400 400"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        >
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="120" />
          <circle cx="200" cy="200" r="90" />
          <line x1="50" y1="200" x2="350" y2="200" />
          <line x1="200" y1="50" x2="200" y2="350" />
          <line x1="80" y1="80" x2="320" y2="320" />
          <line x1="320" y1="80" x2="80" y2="320" />
          <polygon points="200,50 350,200 200,350 50,200" />
        </svg>
        <svg
          className="absolute -left-20 bottom-20 h-[300px] w-[300px] opacity-10"
          viewBox="0 0 200 200"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        >
          <rect x="40" y="40" width="120" height="120" />
          <rect x="60" y="60" width="80" height="80" />
          <line x1="40" y1="40" x2="160" y2="160" />
          <line x1="160" y1="40" x2="40" y2="160" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="block">Negócios que crescem</span>
            <span className="block">começam</span>
            <span className="block">por dentro.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 font-serif text-xl italic text-[#C9A84C]/80 md:text-2xl text-pretty">
            Consultoria estratégica para empreendedoras que constroem um negócio sozinhas e querem crescer com estrutura, não com sobrecarga.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
            >
              Fazer o Diagnóstico
            </Link>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:bg-white hover:text-[#000000]"
            >
              Conhecer os Serviços
            </a>
          </div>
        </div>

        {/* Gold Line Divider */}
        <div className="mt-20 h-px w-full bg-[#C9A84C]" />

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center sm:text-left">
            <p className="font-serif text-3xl font-semibold text-[#C9A84C]">20 anos</p>
            <p className="mt-1 text-sm tracking-wider text-[#888888]">de experiência</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-serif text-3xl font-semibold text-[#C9A84C]">3 frentes</p>
            <p className="mt-1 text-sm tracking-wider text-[#888888]">integradas</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-serif text-3xl font-semibold text-[#C9A84C]">Consultoria</p>
            <p className="mt-1 text-sm tracking-wider text-[#888888]">estratégica sênior</p>
          </div>
        </div>
      </div>
    </section>
  )
}
