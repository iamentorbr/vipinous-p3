"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { InnerNavigation } from "@/components/inner-navigation"
import { ArrowRight, Sparkles, Target, Check } from "lucide-react"

const workshops = [
  {
    title: "TERAPEUTA DE ELITE",
    subtitle: "Para Terapeutas Tituladas",
    description: "Você já tem formação, mas sente que falta algo para ativar sua carreira? Este workshop é para quem quer sair do modo sobrevivência e entrar no modo prosperidade.",
    features: [
      "Posicionamento premium no mercado",
      "Estratégias de precificação",
      "Construção de autoridade",
      "Atração de clientes ideais"
    ],
    href: "/terapeuta-de-elite",
    icon: Target
  },
  {
    title: "FREQUÊNCIA DE ELITE",
    subtitle: "Para Mulheres em Formação",
    description: "Está em formação ou pensando em iniciar? Este workshop vai te preparar energeticamente e estrategicamente para começar sua jornada com o pé direito.",
    features: [
      "Clareza sobre seu propósito",
      "Mindset de abundância",
      "Primeiros passos estratégicos",
      "Preparação energética"
    ],
    href: "/frequencia-de-elite",
    icon: Sparkles
  }
]

const jornada = [
  {
    fase: "Fase de Imersão",
    titulo: "Diagnóstico Comportamental e de Negócio",
    descricao: "Antes de qualquer estratégia, mapeamos quem você é como profissional. Perfil comportamental, análise de Comportamento & Carreira, diagnóstico do negócio atual, identificação de bloqueios e padrões que limitam o crescimento. Um olhar global para você e seu negócio. Aqui nasce a fundação — identidade, nicho, diferencial real e método proprietário."
  },
  {
    fase: "Fase de Estruturação",
    titulo: "Posicionamento, Precificação e Presença",
    descricao: "Com a identidade clara, construímos o posicionamento de mercado — método com nome, nicho definido, precificação com intenção e coerência. Trabalhamos a presença digital como extensão do trabalho terapêutico: conteúdo que educa, conecta e converte, sem abrir mão da sua essência."
  },
  {
    fase: "Fase de Ativação",
    titulo: "Mentalidade Empreendedora e Manifestação Consciente",
    descricao: "Posicionamento sem mentalidade não se sustenta. Nesta fase trabalhamos as crenças limitantes sobre cobrança, visibilidade e merecimento. Usamos Manifestação Consciente como tecnologia de reprogramação — chaveamento de crenças, ancoragem de estados de alta performance e alinhamento de frequência com os resultados desejados."
  },
  {
    fase: "Fase de Escala",
    titulo: "Esteira de Produtos e Negócio Sustentável",
    descricao: "Do atendimento 1:1 para uma estrutura que escala. Construção da esteira de produtos — do produto de entrada ao premium — para que seu negócio gere resultado além da sua presença constante. Aqui também trabalhamos visibilidade estratégica, comunidade como ativo e posicionamento de palestrante."
  }
]

const resultados = [
  { titulo: "Posicionamento Claro", descricao: "Nicho, método e diferencial definidos com clareza e coerência" },
  { titulo: "Precificação com Autoridade", descricao: "Valor percebido alto e cobrança sem culpa" },
  { titulo: "Presença que Converte", descricao: "Comunicação que atrai clientes certos" },
  { titulo: "Negócio Escalável", descricao: "Estrutura que cresce sem depender só de você" },
  { titulo: "Mentalidade de Elite", descricao: "Autoconfiança, clareza e estado de alta performance" },
  { titulo: "Frequência Alinhada", descricao: "Energia e intenção trabalhando a seu favor" }
]

export default function TerapeutaElitePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#F1EFED]">
      <InnerNavigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-[#000000] pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[#C9A84C] rotate-45" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#C9A84C] rotate-12" />
        </div>
        
        <div className={`mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-3xl">
            <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Programa de Gestão de Carreira e Transformação de Mentalidade
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              TERAPEUTA DE ELITE
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Um programa para terapeutas que já têm o método — e agora precisam construir o negócio, o posicionamento e a presença que ele merece.
            </p>
            <p className="mt-4 text-lg text-[#C9A84C]/90 italic">
              Você não chegou até aqui para sobreviver no mercado. Você chegou para ocupar o espaço que é seu — com clareza, autoridade e resultado.
            </p>
          </div>
        </div>
      </section>

      {/* O Programa Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase">
            O Programa
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Elite não é um título.<br /><span className="italic text-[#C9A84C]">É um estado de operação.</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C] mt-6 mb-8" />
          
          <div className="space-y-6 text-lg text-[#1A1A1A]/80 leading-relaxed">
            <p>
              Ser uma Terapeuta de Elite significa ter clareza sobre o que você entrega, ter coragem de cobrar o que vale, saber se comunicar com autoridade e ocupar espaços que antes pareciam grandes demais para você.
            </p>
            <p>
              O programa <strong className="text-[#1A1A1A]">Terapeuta de Elite</strong> é uma mentoria de <strong className="text-[#1A1A1A]">6 ou 12 meses</strong> — em grupo ou individual — que trabalha as quatro dimensões do alto desempenho no mercado terapêutico: mentalidade empreendedora, posicionamento de elite, comunicação de especialista e construção de negócio sustentável.
            </p>
            <p>
              Integramos <strong className="text-[#1A1A1A]">Gestão Comportamental</strong>, <strong className="text-[#1A1A1A]">Comportamento & Carreira</strong> e <strong className="text-[#1A1A1A]">Manifestação Consciente</strong> como metodologia de base — olhando para o negócio e para a empresária de forma global, porque o posicionamento que dura é o que nasce de dentro para fora.
            </p>
          </div>

          <div className="mt-10 p-6 bg-[#FBF4DC] border-l-4 border-[#C9A84C] rounded-r">
            <p className="font-serif text-xl italic text-[#1A1408] leading-relaxed">
              "Você não precisa escolher entre ter uma vocação e ter um negócio próspero. Esses dois mundos não se contradizem. Eles se completam."
            </p>
          </div>
        </div>
      </section>

      {/* A Jornada Section */}
      <section className="py-20 bg-[#F1EFED]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase">
            A Jornada
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Do diagnóstico ao<br /><span className="italic text-[#C9A84C]">posicionamento inevitável</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C] mt-6 mb-8" />
          
          <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-12">
            O programa segue uma arquitetura progressiva. Cada etapa constrói sobre a anterior — não há saltos, não há atalhos. O resultado é um negócio que funciona porque foi construído sobre quem você realmente é.
          </p>

          <div className="space-y-0">
            {jornada.map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] bg-[#F1EFED] flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0">
                    0{index + 1}
                  </div>
                  {index < jornada.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#C9A84C] to-transparent opacity-40 my-2" />
                  )}
                </div>
                <div className="pb-12">
                  <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
                    {item.fase}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#1A1A1A]">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-[#1A1A1A]/70 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-20 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase">
              Resultados
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-white">
              O que você conquista
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultados.map((resultado, index) => (
              <div
                key={index}
                className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 p-6 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{resultado.titulo}</h3>
                <p className="text-sm text-white/60">{resultado.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Lys Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-[#000000] border-2 border-[#C9A84C] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LYS%20OLD%20MONEY%20-%20menor-iGMc5b8ZWPLhvWR6tPhKgrEg9GLgxe.jpg"
                  alt="Lys - Criadora do Programa Terapeuta de Elite"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C9A84C]/30" />
            </div>
            <div>
              <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase">
                Quem Facilita
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Lys Ribeiro
              </h2>
              <div className="w-12 h-0.5 bg-[#C9A84C] mt-6 mb-6" />
              <div className="space-y-4 text-[#1A1A1A]/80 leading-relaxed">
                <p>
                  Especialista em gestão comportamental com mais de 15 anos de experiência, Lys desenvolveu uma metodologia única que integra Comportamento & Carreira, Manifestação Consciente e estratégia de negócios — olhando para o negócio e para a empresária de forma global.
                </p>
                <p>
                  Fundadora da VI.P & NÔUS, ela já ajudou centenas de terapeutas a saírem do modo sobrevivência e construírem negócios prósperos e alinhados com seu propósito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-[#1A1408]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase">
              Escolha seu Workshop
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-white">
              Qual é o seu momento?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={index}
                  className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {program.title}
                      </h3>
                      <p className="text-[#C9A84C] text-sm">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-end pt-6 border-t border-[#C9A84C]/20">
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-2 text-white hover:text-[#C9A84C] transition-colors group-hover:gap-3"
                    >
                      Saiba mais
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F1EFED]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Pronta para ocupar seu espaço?
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A]/70">
            Entre em contato conosco e vamos te ajudar a identificar o melhor caminho para você.
          </p>
          <a
            href="https://wa.me/5511975490354"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
          >
            FALAR COM A EQUIPE
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] py-8 border-t border-[#C9A84C]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-[#888888] text-sm">
            &copy; {new Date().getFullYear()} VI.P & NÔUS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
