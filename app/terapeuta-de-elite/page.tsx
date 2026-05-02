"use client"

import { useState, useEffect } from "react"
import { Playfair_Display, Montserrat } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Check, X, ChevronDown, Instagram, Mail, Phone } from "lucide-react"

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
    question: "O workshop fica gravado?",
    answer: "Sim! Você terá acesso à gravação por 48 horas após o evento para revisar todo o conteúdo."
  },
  {
    question: "Preciso ter CNPJ para participar?",
    answer: "Não é necessário ter CNPJ. O workshop é focado em posicionamento e estratégia, independente da sua estrutura jurídica atual."
  },
  {
    question: "É ao vivo mesmo?",
    answer: "Sim, 100% ao vivo! Você poderá interagir, tirar dúvidas e participar ativamente durante as 3 horas."
  },
  {
    question: "Como acesso após o pagamento?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso à sala do workshop e todas as instruções."
  },
  {
    question: "Existe suporte?",
    answer: "Sim! Temos suporte via WhatsApp para tirar dúvidas sobre acesso e participação."
  }
]

export default function TerapeutaDeElitePage() {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const purchaseLink = "https://wa.me/5511975490354?text=Olá!%20Quero%20garantir%20minha%20vaga%20no%20workshop%20Terapeuta%20de%20Elite"

  return (
    <div className={`${playfair.variable} ${montserrat.variable}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1408] shadow-lg" : "bg-transparent"
      }`}>
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#D6A70C]">
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
            Quero minha vaga
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#1A1408] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[#D6A70C]/30 rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#D6A70C]/20 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-32">
          <div className="max-w-3xl">
            <span className="inline-block mb-6 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/10 uppercase">
              Workshop para Terapeutas Tituladas
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[#D6A70C] leading-tight">
              Você já tem o método. Agora vamos construir o negócio que ele merece.
            </h1>
            <p className="mt-6 font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-[#F1EFED]/80 leading-relaxed">
              Um dia intensivo para terapeutas que estão prontas para parar de cobrar barato e ocupar o espaço que é seu.
            </p>
            <div className="mt-4 font-[family-name:var(--font-montserrat)] text-sm text-[#D6A70C]/80">
              Sábado | Online ao vivo | 9h às 12h
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D6A70C] px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider text-[#000] transition-all hover:bg-[#D6A70C]/90"
              >
                Quero minha vaga
              </a>
              <a
                href="#dor"
                className="inline-flex items-center justify-center px-8 py-4 font-[family-name:var(--font-montserrat)] text-sm text-[#F1EFED]/60 transition-all hover:text-[#F1EFED]"
              >
                Saiba mais <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section id="dor" className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#1A1408] italic leading-relaxed">
            &ldquo;Você é boa no que faz. Tem formação, tem resultado, tem vocação. E mesmo assim...&rdquo;
          </p>
          <div className="mt-12 grid gap-6 text-left max-w-2xl mx-auto">
            {[
              "Cobra menos do que vale e sabe disso",
              "Depende do boca a boca para conseguir clientes",
              "Não sabe como se posicionar no digital",
              "Sente que o mercado não reconhece o quanto você vale",
              "Trabalha muito, mas não vê o retorno financeiro compatível"
            ].map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white border-l-4 border-[#D6A70C]">
                <div className="w-2 h-2 mt-2 bg-[#D6A70C] rounded-full flex-shrink-0" />
                <p className="font-[family-name:var(--font-montserrat)] text-[#1A1408]">{pain}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#1A1408] font-semibold">
            Isso não é falta de talento. É falta de posicionamento.
          </p>
        </div>
      </section>

      {/* O QUE É */}
      <section className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/10 uppercase">
              O Workshop
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#F1EFED]">
              Terapeuta de Elite
            </h2>
            <p className="mt-4 font-[family-name:var(--font-montserrat)] text-[#F1EFED]/70 max-w-2xl mx-auto">
              3 horas ao vivo para construir clareza sobre identidade, precificação, presença digital e estrutura de negócio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Identidade", desc: "Descubra seu posicionamento único e como comunicá-lo com clareza" },
              { title: "Precificação", desc: "Aprenda a precificar seus serviços de acordo com o valor que você entrega" },
              { title: "Presença Digital", desc: "Construa uma presença online que atrai os clientes certos" },
              { title: "Esteira e Escala", desc: "Estruture seu negócio para crescer sem se sobrecarregar" }
            ].map((block, index) => (
              <div key={index} className="p-8 border border-[#D6A70C]/30 bg-[#D6A70C]/5">
                <div className="w-12 h-12 flex items-center justify-center border border-[#D6A70C] text-[#D6A70C] font-[family-name:var(--font-playfair)] text-xl mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#D6A70C] mb-2">
                  {block.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/70 text-sm">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#1A1408]">
              Para quem é este workshop?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-[#D6A70C]/30">
              <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-widest text-[#D6A70C] uppercase mb-6">
                Este workshop é para você se:
              </h3>
              <div className="space-y-4">
                {[
                  "É terapeuta integrativa ou psicóloga já titulada",
                  "Tem resultados com seus clientes, mas não consegue comunicar isso",
                  "Quer parar de depender apenas de indicações",
                  "Está pronta para ocupar seu espaço no mercado"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#D6A70C] flex-shrink-0 mt-0.5" />
                    <p className="font-[family-name:var(--font-montserrat)] text-[#1A1408] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A1408] p-8">
              <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-widest text-[#F1EFED]/60 uppercase mb-6">
                Não é para você se:
              </h3>
              <div className="space-y-4">
                {[
                  "Ainda está em formação e não tem clientes",
                  "Busca fórmulas prontas sem fazer o trabalho"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-[#F1EFED]/40 flex-shrink-0 mt-0.5" />
                    <p className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITADORA */}
      <section className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-[#D6A70C]/10 border border-[#D6A70C]/30 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LYS%20OLD%20MONEY%20-%20menor-iGMc5b8ZWPLhvWR6tPhKgrEg9GLgxe.jpg"
                  alt="Lys - Facilitadora do Workshop Terapeuta de Elite"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#D6A70C]/30" />
            </div>
            <div>
              <span className="inline-block mb-4 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/10 uppercase">
                Quem facilita
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#F1EFED] mb-6">
                Lys
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/70 leading-relaxed mb-6">
                15+ anos em gestão comportamental e de carreiras. Fundadora da VI.P & NOUS. Mentora de profissionais da saúde e bem-estar que querem transformar sua prática em um negócio sustentável.
              </p>
              <blockquote className="border-l-4 border-[#D6A70C] pl-6">
                <p className="font-[family-name:var(--font-playfair)] text-xl text-[#D6A70C] italic">
                  &ldquo;Meu trabalho é fazer com que o que você faz dentro do consultório seja reconhecido fora dele.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#1A1408]">
              Investimento
            </h2>
          </div>
          <div className="bg-[#1A1408] p-8 md:p-12 text-center">
            <div className="inline-block mb-6 px-4 py-2 text-xs font-medium tracking-widest text-[#D6A70C] bg-[#D6A70C]/10 uppercase">
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
                  <span className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#D6A70C]/30 pt-8 mb-8">
              <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#D6A70C]/60 uppercase tracking-widest mb-4">Bônus inclusos</p>
              <div className="space-y-2">
                {[
                  "Checklist de posicionamento",
                  "Template de precificação"
                ].map((bonus, index) => (
                  <p key={index} className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/60 text-sm">{bonus}</p>
                ))}
              </div>
            </div>
            <a
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#D6A70C] px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wider text-[#000] transition-all hover:bg-[#D6A70C]/90"
            >
              Garantir minha vaga agora
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1A1408] py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#F1EFED]">
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
                  <span className="font-[family-name:var(--font-montserrat)] text-[#F1EFED] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-[#D6A70C] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-6">
                    <p className="font-[family-name:var(--font-montserrat)] text-[#F1EFED]/70 text-sm leading-relaxed">
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
      <section className="bg-[#F1EFED] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#1A1408] italic leading-relaxed mb-10">
            &ldquo;O mercado não espera você se sentir pronta. Ele responde para quem decide ocupar o espaço.&rdquo;
          </p>
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#D6A70C] px-12 py-5 font-[family-name:var(--font-montserrat)] text-base font-semibold tracking-wider text-[#000] transition-all hover:bg-[#D6A70C]/90"
          >
            Quero minha vaga
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1408] py-12">
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
