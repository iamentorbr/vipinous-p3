"use client"

import { useState, useEffect } from "react"
import { Playfair_Display, Montserrat } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Check, ChevronDown, Instagram, Mail, Phone } from "lucide-react"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
})

const faqItems = [
  {
    question: "Preciso ter título para participar?",
    answer: "Não! Este workshop é especialmente desenhado para mulheres que ainda estão em formação. Você não precisa ter título, precisa ter a decisão."
  },
  {
    question: "O workshop fica gravado?",
    answer: "Sim! Você terá acesso à gravação por 48 horas após o evento para revisar todo o conteúdo."
  },
  {
    question: "É ao vivo mesmo?",
    answer: "Sim, 100% ao vivo! Você poderá interagir, tirar dúvidas e participar ativamente durante as 3 horas."
  },
  {
    question: "Para qual modalidade terapêutica é indicado?",
    answer: "O workshop é indicado para qualquer modalidade terapêutica: psicologia, terapias integrativas, coaching, entre outras. O foco é posicionamento e mentalidade, não técnica."
  },
  {
    question: "Como acesso após o pagamento?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso à sala do workshop e todas as instruções."
  }
]

export default function FrequenciaDeElitePage() {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const purchaseLink = "https://wa.me/5511975490354?text=Olá!%20Quero%20garantir%20minha%20vaga%20no%20workshop%20Frequência%20de%20Elite"

  return (
    <div className={`${playfair.variable} ${montserrat.variable}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F1EFED] shadow-lg" : "bg-transparent"
      }`}>
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1A1408]">
            VI.P & NÔUS
          </Link>
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#D6A70C] px-6 py-2 text-sm font-semibold text-[#000] transition-all hover:bg-[#D6A70C]/90 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Quero me preparar agora
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#F1EFED] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-64 h-64 border border-[#D6A70C]/30 rounded-full" />
          <div className="absolute bottom-20 left-10 w-96 h-96 border border-[#D6A70C]/20 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-32">
          <div className="max-w-3xl">
            <span className="inline-block mb-6 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/20 uppercase">
              Workshop para Mulheres em Formação
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1408] leading-tight">
              O título vem. A mentalidade, o posicionamento e a identidade de elite — você começa a construir agora.
            </h1>
            <p className="mt-6 font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-[#1A1408]/70 leading-relaxed">
              Um dia intensivo para mulheres em formação terapêutica que querem chegar prontas para operar no mais alto nível.
            </p>
            <div className="mt-4 font-[family-name:var(--font-montserrat)] text-sm text-[#D6A70C]">
              Sábado | Online ao vivo | 9h às 12h
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D6A70C] px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider text-[#000] transition-all hover:bg-[#D6A70C]/90"
              >
                Quero me preparar agora
              </a>
              <a
                href="#dor"
                className="inline-flex items-center justify-center px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm text-[#1A1408]/60 transition-all hover:text-[#1A1408]"
              >
                Saiba mais <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section id="dor" className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#F1EFED] italic leading-relaxed">
            &ldquo;Você está se formando. Acumulando técnicas. Investindo em certificados. E por dentro...&rdquo;
          </p>
          <div className="mt-12 grid gap-6 text-left max-w-2xl mx-auto">
            {[
              "Não sabe quem é como profissional ainda",
              "Tem medo de não ser boa o suficiente",
              "Não sabe como se diferenciar no mercado",
              "Acredita que só começa quando tiver o título",
              "Essa crença é o maior obstáculo"
            ].map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-[#D6A70C]/10 border-l-4 border-[#D6A70C]">
                <div className="w-2 h-2 mt-2 bg-[#D6A70C] rounded-full flex-shrink-0" />
                <p className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/90">{pain}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#D6A70C] font-semibold">
            Você não está esperando o título. Você está esperando permissão. E esse dia não precisa mais esperar.
          </p>
        </div>
      </section>

      {/* O QUE É */}
      <section className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/20 uppercase">
              O Workshop
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#1A1408]">
              Frequência de Elite
            </h2>
            <p className="mt-4 font-[family-name:var(--font-montserrat)] text-[#1A1408]/70 max-w-2xl mx-auto">
              3 horas ao vivo para construir identidade profissional, mentalidade empreendedora, presença digital e comportamento de elite — antes mesmo de ter todos os certificados.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Identidade Antes do Título", desc: "Descubra quem você é como profissional, independente dos certificados" },
              { title: "Mentalidade Empreendedora", desc: "Desenvolva o mindset necessário para construir um negócio desde o início" },
              { title: "Presença e Autoridade Digital", desc: "Comece a construir sua presença online de forma estratégica" },
              { title: "Comportamento de Elite", desc: "Aprenda a se posicionar como profissional de alto nível" }
            ].map((block, index) => (
              <div key={index} className="p-8 border border-[#D6A70C]/30 bg-white">
                <div className="w-12 h-12 flex items-center justify-center border border-[#D6A70C] text-[#D6A70C] font-[family-name:var(--font-playfair)] text-xl mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1A1408] mb-2">
                  {block.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-[#1A1408]/70 text-sm">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#F1EFED]">
              Para quem é este workshop?
            </h2>
          </div>
          <div className="bg-[#D6A70C]/10 border border-[#D6A70C]/30 p-8 md:p-12">
            <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-widest text-[#D6A70C] uppercase mb-8">
              Este workshop é para você se:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Está em formação em qualquer modalidade terapêutica",
                "Quer chegar pronta para atuar no mercado",
                "Já atende ou quer começar a atender logo",
                "Sente que falta estrutura mental e de negócio"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#D6A70C] flex-shrink-0 mt-0.5" />
                  <p className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/90 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-[#D6A70C]/30">
              <p className="font-[family-name:var(--font-playfair)] text-xl text-[#D6A70C] italic text-center">
                &ldquo;Você não precisa ter título ainda. Precisa ter a decisão.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITADORA */}
      <section className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block mb-4 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/20 uppercase">
                Quem facilita
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#1A1408] mb-6">
                Lys
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-[#1A1408]/70 leading-relaxed mb-6">
                15+ anos em gestão comportamental e de carreiras. Fundadora da VI.P & NOUS. Especialista em ajudar mulheres a construírem suas carreiras desde o início com estrutura e estratégia.
              </p>
              <blockquote className="border-l-4 border-[#D6A70C] pl-6">
                <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1408] italic">
                  &ldquo;Trabalho com mulheres que ainda estão se formando e que já têm tudo que precisam para operar em alto nível — exceto estrutura. É isso que construímos juntas.&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square bg-[#D6A70C]/10 border border-[#D6A70C]/30 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LYS%20OLD%20MONEY%20-%20menor-iGMc5b8ZWPLhvWR6tPhKgrEg9GLgxe.jpg"
                  alt="Lys - Facilitadora do Workshop Frequência de Elite"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#D6A70C]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#F1EFED]">
              Investimento
            </h2>
          </div>
          <div className="bg-[#F1EFED] p-8 md:p-12 text-center">
            <div className="inline-block mb-6 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/20 uppercase">
              Acesso completo
            </div>
            <div className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                "3 horas de workshop ao vivo",
                "Gravação disponível por 48h",
                "Material de apoio exclusivo"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <Check className="h-5 w-5 text-[#D6A70C]" />
                  <span className="font-[family-name:var(--font-montserrat)] text-[#1A1408]/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#D6A70C]/30 pt-8 mb-8">
              <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#D6A70C] uppercase tracking-widest mb-4">Bônus inclusos</p>
              <div className="space-y-2">
                {[
                  "Guia de identidade profissional",
                  "Roteiro de primeiros passos no digital"
                ].map((bonus, index) => (
                  <p key={index} className="font-[family-name:var(--font-montserrat)] text-[#1A1408]/60 text-sm">{bonus}</p>
                ))}
              </div>
            </div>
            <a
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#D6A70C] px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider text-[#000] transition-all hover:bg-[#D6A70C]/90"
            >
              Quero me preparar agora
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#1A1408]">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-[#D6A70C]/30">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-[family-name:var(--font-montserrat)] text-[#1A1408] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-[#D6A70C] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-6">
                    <p className="font-[family-name:var(--font-montserrat)] text-[#1A1408]/70 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#F1EFED] italic leading-relaxed mb-10">
            &ldquo;Quem opera em alto nível não começou no alto nível. Começou com a decisão de se preparar como se já estivesse lá.&rdquo;
          </p>
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#D6A70C] px-12 py-5 font-[family-name:var(--font-montserrat)] text-base font-semibold tracking-wider text-[#000] transition-all hover:bg-[#D6A70C]/90"
          >
            Quero me preparar agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#D6A70C]">
              VI.P & NÔUS
            </Link>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/vipin.nous" target="_blank" rel="noopener noreferrer" className="text-[#F1EFED]/60 hover:text-[#D6A70C] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contato.vipintegrativa@gmail.com" className="text-[#F1EFED]/60 hover:text-[#D6A70C] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/5511975490354" target="_blank" rel="noopener noreferrer" className="text-[#F1EFED]/60 hover:text-[#D6A70C] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#F1EFED]/40">
              {new Date().getFullYear()} VI.P & NÔUS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
