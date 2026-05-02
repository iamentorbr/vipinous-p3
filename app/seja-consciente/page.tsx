"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { InnerNavigation } from "@/components/inner-navigation"
import { ArrowRight, Check, X, Video, BookOpen, Users, Sparkles, MessageCircle, Heart } from "lucide-react"

const pilares = [
  {
    symbol: "◯",
    title: "Consciência",
    description: "Autoconhecimento profundo. Reconhecer quem você é, o que bloqueia e o que expande. A consciência precede toda transformação real."
  },
  {
    symbol: "◈",
    title: "Manifestação",
    description: "Alinhar frequência, intenção e ação. A manifestação consciente não é passiva — é a soma entre o que você escolhe ser e o que você decide construir."
  },
  {
    symbol: "✦",
    title: "Expansão",
    description: "Crescer sem perder a essência. Expandir o negócio, a presença, o impacto — e a vida — a partir de quem você realmente é."
  }
]

const jornada = [
  {
    num: "01",
    title: "Despertar",
    subtitle: "Reconhecer quem você é",
    description: "Antes de qualquer expansão, há o reconhecimento. Quem sou eu, de onde venho, o que carrego — e o que estou pronta para soltar. Aqui, a análise de Comportamento & Carreira entra como mapa de autoconhecimento: revelando padrões naturais de expressão, áreas de maior fluxo, bloqueios recorrentes e o arquétipo que guia sua jornada de expansão — olhando para você e seu negócio de forma global.",
    tags: ["Comportamento & Carreira", "Diagnóstico de Consciência"]
  },
  {
    num: "02",
    title: "Desbloqueio",
    subtitle: "Liberar o que impede",
    description: "Crenças limitantes não são falhas de caráter — são programações. Neste movimento, identificamos as sentenças internas que sabotam a expansão e trabalhamos o chaveamento de crenças por meio da Manifestação Consciente. O que você acredita sobre si mesma, sobre o que merece e sobre o que é possível para você determina o teto do que você cria.",
    tags: ["Manifestação Consciente", "Chaveamento de Crenças"]
  },
  {
    num: "03",
    title: "Alinhamento",
    subtitle: "Viver a frequência do que você quer criar",
    description: "Alinhamento é a prática contínua de sustentar a frequência da versão de você que já chegou onde quer chegar. Não é fingir que está bem. É escolher, conscientemente, operar a partir da clareza — mesmo quando o externo ainda não reflete. Meditações guiadas, práticas de ancoragem e rituais de grupo sustentam esse estado no dia a dia.",
    tags: ["Práticas Guiadas", "Rituais de Grupo", "Ancoragem"]
  },
  {
    num: "04",
    title: "Manifestação",
    subtitle: "Criar a partir de quem você se tornou",
    description: "Manifestação não é desejo — é resultado. Quando consciência, frequência e ação estão alinhadas, o que você cria para sua vida, sua carreira e seu negócio deixa de ser uma batalha e passa a ser uma expressão natural de quem você é. Este é o estado de operação do Ser Consciente.",
    tags: ["Manifestação Consciente", "Ação Alinhada", "Resultado"]
  }
]

const entregas = [
  {
    icon: Video,
    title: "Encontros ao Vivo",
    description: "Encontros mensais e semanais ao vivo — para aprofundar temas de consciência, manifestação e expansão. Ao vivo porque presença cria campo. Gravações disponíveis."
  },
  {
    icon: BookOpen,
    title: "Conteúdos Exclusivos",
    description: "Biblioteca crescente de conteúdos de Manifestação Consciente e Comportamento & Carreira — aplicados à vida, à carreira e ao negócio, com um olhar global para a empresária e seu empreendimento."
  },
  {
    icon: Sparkles,
    title: "Meditações e Práticas Guiadas",
    description: "Meditações de ancoragem, práticas de alinhamento de frequência e exercícios de chaveamento de crenças — criados para sustentar os quatro movimentos da jornada."
  },
  {
    icon: Users,
    title: "Rodas de Conversa Temáticas",
    description: "Encontros de troca em torno de temas que importam — consciência, carreira, corpo, relacionamentos, dinheiro, propósito. A troca entre pares é parte da transformação."
  },
  {
    icon: MessageCircle,
    title: "Acompanhamento Individual",
    description: "Suporte individual dentro da comunidade — para momentos que pedem uma atenção mais personalizada. Você não está sozinha no processo de expansão."
  },
  {
    icon: Heart,
    title: "Trilha Frequência de Elite",
    description: "Para profissionais que trabalham com o humano: trilha específica de mentalidade empreendedora, posicionamento e desenvolvimento de processos de alto nível."
  }
]

const transformacoes = [
  {
    antes: "Sabe que tem potencial — mas não sabe como acessá-lo de forma consistente",
    depois: "Opera a partir da clareza de quem é e do que veio construir"
  },
  {
    antes: "Oscila entre clareza e dúvida — a frequência não se sustenta",
    depois: "Mantém o estado de alinhamento mesmo diante da instabilidade externa"
  },
  {
    antes: "Carrega crenças que limitam o que permite para si mesma",
    depois: "Crenças chaveadas — opera a partir de um novo nível de merecimento e possibilidade"
  },
  {
    antes: "Cresce sozinha — sem comunidade que entenda o que está vivendo",
    depois: "Avança sustentada por um campo de mulheres que estão no mesmo nível de intenção"
  }
]

const profissoes = [
  "Terapeutas integrativas",
  "Psicólogas",
  "Terapeutas em formação",
  "Doulas",
  "Profissionais de RH Humanizado",
  "Saúde espiritual",
  "Saúde mental",
  "Coaches",
  "Mentoras",
  "Mulheres em transição de carreira"
]

const paraQuemE = [
  "Você sente que tem mais para dar — e quer estrutura para dar",
  "Você quer crescer sem perder quem é",
  "Você acredita que consciência e resultado não se contradizem",
  "Você quer uma comunidade que te sustenta enquanto você avança",
  "Você está pronta para ir fundo — em você mesma e no que constrói",
  "Você trabalha com o humano ou deseja trabalhar"
]

const naoE = [
  "Você quer atalhos sem processo",
  "Você busca conteúdo passivo sem aplicação",
  "Você não está disposta a se olhar honestamente",
  "Você espera que o externo mude antes de você mudar"
]

export default function SejaConscientePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#F1EFED]">
      <InnerNavigation />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0E0B04] pt-20 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(214,167,12,0.10)_0%,transparent_68%)] pointer-events-none" />
        
        <div className={`mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-3 text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-8">
            <span className="text-[#C9A84C]/70">✦</span>
            VI.P & NOUS · Comunidade
            <span className="text-[#C9A84C]/70">✦</span>
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-none">
            Ser
            <em className="block text-[#C9A84C] italic text-[0.85em]">Consciente</em>
          </h1>
          
          <div className="w-px h-16 bg-gradient-to-b from-[#C9A84C] to-transparent mx-auto my-8" />
          
          <p className="text-lg md:text-xl text-[#C8BFAA] font-light max-w-2xl mx-auto leading-relaxed">
            Uma comunidade contínua para mulheres que escolheram <strong className="text-[#F0D97A] font-medium">expandir</strong> — na consciência, no propósito e na forma como ocupam o mundo.
          </p>
          
          <div className="mt-12 inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/5 px-8 py-6 relative">
            <span className="absolute -top-3 left-4 font-serif text-6xl text-[#C9A84C] opacity-20 leading-none">&ldquo;</span>
            <p className="font-serif text-lg md:text-xl italic text-[#F0D97A] max-w-xl leading-relaxed">
              Expansão não é um destino que você alcança. É o estado em que você decide viver — todos os dias, em cada escolha, em cada frequência que você sustenta.
            </p>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="py-20 bg-[#1E1C14]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[#F0D97A] text-xs font-bold tracking-[0.25em] uppercase opacity-85">
            A Comunidade
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
            Um espaço que existe para<br/><em className="text-[#C9A84C] italic">te sustentar enquanto você cresce.</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C] mt-6 opacity-50" />
          
          <p className="mt-8 text-base md:text-lg text-[#B8B0A0] leading-relaxed">
            <strong className="text-[#F0D97A] font-medium">Ser Consciente</strong> é a comunidade mãe do ecossistema VI.P & NOUS. Um programa contínuo, sem data de encerramento, criado para mulheres que trabalham com o humano — ou desejam trabalhar — e que escolheram viver sua expansão com intenção, método e consciência.
          </p>
          
          <p className="mt-4 text-base md:text-lg text-[#B8B0A0] leading-relaxed">
            Aqui, <strong className="text-[#F0D97A] font-medium">Manifestação Consciente</strong> e <strong className="text-[#F0D97A] font-medium">Comportamento & Carreira</strong> são as linguagens que guiam a jornada — não como misticismo isolado, mas como ferramentas integradas de autoconhecimento, desbloqueio e alinhamento com o que você veio construir. Um olhar global para o negócio e para a empresária.
          </p>

          {/* Pilares */}
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-[#C9A84C]/15 border border-[#C9A84C]/15 overflow-hidden">
            {pilares.map((pilar, index) => (
              <div key={index} className="bg-[#1E1C14] p-8 text-center">
                <span className="text-3xl text-[#C9A84C] opacity-85">{pilar.symbol}</span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                  <em className="text-[#C9A84C] italic">{pilar.title}</em>
                </h3>
                <p className="mt-3 text-sm text-[#998F80] leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-14 border-l-[3px] border-[#C9A84C] bg-[#C9A84C]/5 px-7 py-5">
            <p className="font-serif text-base md:text-lg italic text-[#F0D97A] leading-relaxed">
              &ldquo;Elevar o nível de consciência não é afastar-se da vida real. É escolher viver a vida real com mais clareza, mais propósito e mais poder de criação.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Jornada de Expansão */}
      <section className="py-20 bg-[#F1EFED]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[#A8820A] text-xs font-bold tracking-[0.25em] uppercase">
            A Jornada
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Quatro movimentos de<br/><em className="text-[#C9A84C] italic">expansão da consciência.</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C] mt-6" />
          
          <p className="mt-8 text-base md:text-lg text-[#555555] leading-relaxed max-w-2xl">
            A jornada no Ser Consciente não é linear — ela é cíclica, como toda expansão real. Mas tem uma direção. Cada movimento aprofunda o anterior e prepara o terreno para o próximo. Você avança no seu tempo, sustentada pela comunidade e pelas ferramentas.
          </p>

          {/* Timeline */}
          <div className="mt-16 relative pl-14">
            <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/10" />
            
            {jornada.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="absolute -left-9 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#C9A84C] bg-[#F1EFED] shadow-[0_0_0_4px_rgba(214,167,12,0.08)]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A8820A] mb-2 block">
                  Movimento {item.num}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#1A1A1A] leading-tight mb-2">
                  <em className="text-[#C9A84C] italic">{item.title}</em> — {item.subtitle}
                </h3>
                <p className="text-[#555555] leading-relaxed max-w-xl">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold tracking-wider uppercase text-[#A8820A] bg-[#FBF4DC] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dentro da Comunidade */}
      <section className="py-20 bg-[#0E0B04]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#F0D97A] text-xs font-bold tracking-[0.25em] uppercase opacity-85">
              Dentro da Comunidade
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
              Tudo que sustenta<br/><em className="text-[#C9A84C] italic">a sua expansão contínua.</em>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A84C] mt-6 opacity-50" />
            <p className="mt-8 text-base md:text-lg text-[#B8B0A0] leading-relaxed">
              O Ser Consciente não é um repositório de conteúdo. É uma comunidade viva — com encontros, práticas, acompanhamento e ferramentas que se renovam continuamente.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {entregas.map((entrega, index) => {
              const Icon = entrega.icon
              return (
                <div key={index} className="bg-[#1E1C14] border border-[#C9A84C]/12 p-7 transition-all duration-200 hover:border-[#C9A84C]/35">
                  <Icon className="w-5 h-5 text-[#C9A84C] opacity-90 mb-4" />
                  <h3 className="text-[15px] font-bold text-white mb-2 leading-tight">
                    {entrega.title}
                  </h3>
                  <p className="text-[13px] text-[#888070] leading-relaxed">
                    {entrega.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Banner Contínuo */}
          <div className="mt-14 bg-[#0E0B04] border border-[#C9A84C]/15 p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              Programa Contínuo
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-white leading-tight mb-3">
              Sem data de encerramento.<br/><em className="text-[#C9A84C] italic">Porque expansão não tem fim.</em>
            </h3>
            <p className="text-sm text-[#888070] max-w-lg mx-auto leading-relaxed">
              O Ser Consciente não é um curso que você termina. É uma comunidade que você habita — e que cresce com você. Cada ciclo traz novos temas, novas práticas e novos movimentos de expansão.
            </p>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 bg-[#F1EFED]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[#A8820A] text-xs font-bold tracking-[0.25em] uppercase">
            Para Quem É
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            O Ser Consciente é para você<br/><em className="text-[#C9A84C] italic">se você reconhece esse chamado.</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C] mt-6" />
          
          <p className="mt-8 text-base md:text-lg text-[#555555] leading-relaxed mb-8">
            Não há pré-requisito de formação, de área de atuação ou de estágio da carreira. O que une quem está aqui é a decisão de viver e trabalhar com <strong className="text-[#1A1A1A] font-semibold">consciência, intenção e expansão contínua</strong>.
          </p>

          {/* Profissões Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {profissoes.map((prof, index) => (
              <span key={index} className="text-xs font-medium text-[#1A1A1A] bg-[#F1EFED] border border-[#E0DDD9] px-4 py-2 rounded-full">
                {prof}
              </span>
            ))}
          </div>

          {/* Cards Para Quem */}
          <div className="grid md:grid-cols-2 gap-7">
            {/* É para você */}
            <div className="border border-[#E0DDD9] overflow-hidden">
              <div className="bg-[#1A1A1A] px-6 py-5">
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                  Este espaço é para você se
                </span>
                <h3 className="font-serif text-lg font-semibold text-white">
                  Você reconhece o chamado
                </h3>
              </div>
              <div className="bg-white px-6 py-5">
                <ul className="space-y-0">
                  {paraQuemE.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 py-2 border-b border-[#E0DDD9] last:border-b-0">
                      <span className="text-[#C9A84C] text-xs mt-1.5">✦</span>
                      <span className="text-sm text-[#555555] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Não é para você */}
            <div className="border border-[#E0DDD9] overflow-hidden">
              <div className="bg-[#E0DDD9] px-6 py-5">
                <span className="text-[#555555] text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                  Este espaço não é para você se
                </span>
                <h3 className="font-serif text-lg font-semibold text-[#1A1A1A]">
                  Ainda não é o momento
                </h3>
              </div>
              <div className="bg-white px-6 py-5">
                <ul className="space-y-0">
                  {naoE.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 py-2 border-b border-[#E0DDD9] last:border-b-0">
                      <span className="text-[#CCC] text-xs mt-1.5">—</span>
                      <span className="text-sm text-[#555555] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação */}
      <section className="py-20 bg-[#1E1C14]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-[#F0D97A] text-xs font-bold tracking-[0.25em] uppercase opacity-85">
              A Transformação
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
              O que muda quando você<br/><em className="text-[#C9A84C] italic">vive a expansão de dentro para fora.</em>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A84C] mt-6 opacity-50" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#C9A84C]/10">
            {transformacoes.map((item, index) => (
              <div key={index} className="bg-[#1E1C14] p-8">
                <p className="text-xs text-[#665E50] italic leading-relaxed pb-4 mb-4 border-b border-[#C9A84C]/10">
                  {item.antes}
                </p>
                <span className="text-[#C9A84C] text-lg block mb-2.5">↓</span>
                <p className="text-sm font-semibold text-white leading-snug">
                  {item.depois}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecossistema */}
      <section className="py-20 bg-[#FDFAF2]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[#A8820A] text-xs font-bold tracking-[0.25em] uppercase">
            O Ecossistema VI.P & NOUS
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Ser Consciente é a<br/><em className="text-[#C9A84C] italic">comunidade que abraça tudo.</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C] mt-6" />
          <p className="mt-8 text-base md:text-lg text-[#555555] leading-relaxed">
            Dentro do Ser Consciente existe uma arquitetura de crescimento — trilhas e programas específicos para quem quer ir mais fundo em determinadas dimensões da expansão.
          </p>

          {/* Ecossistema Box */}
          <div className="mt-14 border border-[#E0DDD9] overflow-hidden">
            <div className="bg-[#1A1A1A] px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C]">
                Comunidade Mãe
              </span>
              <span className="font-serif text-xl font-semibold italic text-white md:ml-auto">
                Ser Consciente
              </span>
            </div>

            {/* Frequência de Elite */}
            <div className="grid md:grid-cols-[200px_1fr] border-b border-[#E0DDD9]">
              <div className="bg-[#F1EFED] px-6 py-6 border-b md:border-b-0 md:border-r border-[#E0DDD9] flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#A8820A] mb-1">
                  Trilha dentro do Ser Consciente
                </span>
                <span className="font-serif text-lg font-semibold text-[#1A1A1A]">
                  Frequência de Elite
                </span>
              </div>
              <div className="bg-white px-7 py-6">
                <p className="text-sm text-[#555555] leading-relaxed">
                  Para mulheres que trabalham com o humano — ou querem trabalhar — e desejam desenvolver a <strong className="text-[#1A1A1A] font-semibold">mentalidade empreendedora, os processos e a frequência</strong> de quem opera em alto nível nessa área. Terapeutas em formação, doulas, profissionais de RH Humanizado, saúde espiritual, saúde mental e todas que trabalham com transformação humana.
                </p>
                <Link href="/frequencia-de-elite" className="inline-block mt-3 text-xs font-bold tracking-wider uppercase text-[#A8820A] hover:text-[#C9A84C] transition-colors">
                  Saiba mais sobre o Frequência de Elite →
                </Link>
              </div>
            </div>

            {/* Terapeuta de Elite */}
            <div className="grid md:grid-cols-[200px_1fr]">
              <div className="bg-[#F1EFED] px-6 py-6 border-b md:border-b-0 md:border-r border-[#E0DDD9] flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#A8820A] mb-1">
                  Programa de Mentoria
                </span>
                <span className="font-serif text-lg font-semibold text-[#1A1A1A]">
                  Terapeuta de Elite
                </span>
              </div>
              <div className="bg-white px-7 py-6">
                <p className="text-sm text-[#555555] leading-relaxed">
                  Para terapeutas e psicólogas já tituladas que querem construir o <strong className="text-[#1A1A1A] font-semibold">negócio, o posicionamento e a presença</strong> que o seu método merece. Mentoria de 6 ou 12 meses — em grupo ou individual, com possibilidade de criação ou reestruturação de método proprietário.
                </p>
                <Link href="/terapeuta-elite" className="inline-block mt-3 text-xs font-bold tracking-wider uppercase text-[#A8820A] hover:text-[#C9A84C] transition-colors">
                  Saiba mais sobre o Terapeuta de Elite →
                </Link>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-10 border-l-[3px] border-[#C9A84C] bg-[#FBF4DC] px-7 py-5">
            <p className="font-serif text-base md:text-lg italic text-[#1A1A1A] leading-relaxed">
              &ldquo;Quando consciência e estratégia se encontram, o que você constrói não é apenas um negócio. É uma expressão do que você veio fazer no mundo.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-28 bg-[#0E0B04] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(214,167,12,0.07)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
            Próximo Passo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            A expansão que você sente<br/>possível para você —<br/><em className="text-[#C9A84C] italic">começa aqui.</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#B8B0A0] max-w-xl mx-auto leading-relaxed">
            Ser Consciente é o espaço onde você para de crescer sozinha e começa a expandir sustentada — por uma metodologia, por uma comunidade e por uma frequência que te lembra, todo dia, de quem você está se tornando.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511975490354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] px-10 py-4 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] transition-all hover:opacity-90"
            >
              Quero fazer parte
            </a>
            <Link
              href="/frequencia-de-elite"
              className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/40 px-10 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#C9A84C] transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C]/5"
            >
              Conhecer o Frequência de Elite
            </Link>
          </div>
          <p className="mt-7 text-xs text-[#444444]">
            Já é terapeuta titulada? Conheça o <Link href="/terapeuta-elite" className="text-[#A8820A] hover:text-[#C9A84C] transition-colors">Terapeuta de Elite</Link>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060604] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#333333]">
            <span className="text-[#A8820A]">VI.P & NOUS</span> · Consultoria Integrativa de Negócios · @vipin.nous
          </p>
        </div>
      </footer>
    </main>
  )
}
