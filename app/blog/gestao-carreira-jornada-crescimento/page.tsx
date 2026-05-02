import { Metadata } from "next"
import Link from "next/link"
import { InnerNavigation } from "@/components/inner-navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Gestão de Carreira: Uma Jornada de Crescimento Exponencial | VI.P & NÔUS",
  description: "Aprenda como transformar sua trajetória profissional através de estratégias de gestão de carreira que geram crescimento sustentável.",
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#F1EFED]">
      <InnerNavigation />
      
      {/* Hero */}
      <section className="bg-[#000000] px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#888888] transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft size={14} />
            Voltar para o Blog
          </Link>
          
          <span className="mt-8 block text-sm font-medium tracking-widest text-[#C9A84C]">
            CARREIRA
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl text-balance">
            Gestão de Carreira: Uma Jornada de Crescimento Exponencial
          </h1>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-[#888888]">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              05 de Abril, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              10 min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-6 py-16 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[#1A1A1A]">
            Crescimento exponencial na carreira não acontece por acaso. Ele é resultado de decisões estratégicas, autoconhecimento profundo e ações consistentes ao longo do tempo. Se você sente que está estagnada ou que seu potencial não está sendo plenamente utilizado, este artigo é para você.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            O Mito do Crescimento Linear
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Fomos ensinadas a pensar na carreira como uma escada: um degrau de cada vez, sempre subindo em linha reta. Mas a realidade é muito diferente. As carreiras mais bem-sucedidas são construídas através de movimentos estratégicos, que às vezes parecem laterais ou até mesmo retrógrados, mas que no longo prazo geram um crescimento exponencial.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Gestão de carreira inteligente é sobre entender o tabuleiro completo, não apenas o próximo movimento. É sobre construir habilidades, relacionamentos e posicionamento que se acumulam e multiplicam ao longo do tempo.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            Os Três Pilares do Crescimento Exponencial
          </h2>
          
          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            1. Autoconhecimento Estratégico
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Não basta saber no que você é boa. É preciso entender como suas habilidades se conectam com as demandas do mercado, quais são seus valores inegociáveis e onde seu potencial pode gerar mais impacto. Esse autoconhecimento direcionado é o que diferencia uma profissional que reage às oportunidades de uma que as cria.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            2. Posicionamento Intencional
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Como você é percebida no seu mercado? Qual é a sua marca pessoal? Posicionamento não é vaidade, é estratégia. É garantir que as pessoas certas saibam do seu trabalho e do valor que você entrega. Isso inclui presença digital, networking estratégico e comunicação clara do seu diferencial.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            3. Execução Consistente
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Estratégia sem execução é apenas um sonho bonito. O crescimento exponencial vem da consistência: pequenas ações diárias que se acumulam em resultados extraordinários. Isso requer disciplina, gestão do tempo e a capacidade de manter o foco mesmo quando os resultados ainda não são visíveis.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            O Papel do Comportamento
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Muitas mulheres talentosas não alcançam seu potencial máximo porque padrões comportamentais inconscientes as sabotam. Síndrome da impostora, dificuldade em se posicionar, medo de visibilidade, tendência à autossabotagem em momentos cruciais.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Por isso, na VI.P & NÔUS, integramos a gestão comportamental à gestão de carreira. Não adianta ter a estratégia perfeita se seu comportamento não está alinhado com seus objetivos. É preciso trabalhar os dois em conjunto.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            Comece Hoje
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            O melhor momento para começar a gerir sua carreira estrategicamente era há cinco anos. O segundo melhor momento é agora. Cada dia que passa sem direcionamento é uma oportunidade perdida de construir o futuro que você merece.
          </p>

          <div className="mt-12 border-l-4 border-[#C9A84C] bg-[#000000] p-6">
            <p className="italic text-white">
              &quot;Sua carreira é seu maior ativo. Trate-a com a mesma seriedade que trataria qualquer investimento importante da sua vida.&quot;
            </p>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section className="border-t border-[#C9A84C]/20 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/blog/poder-astrocomportamental-autoconhecimento"
            className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft size={14} />
            Artigo anterior
          </Link>
          <Link
            href="/blog/seja-empresaria-de-verdade"
            className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#C9A84C]"
          >
            Próximo artigo
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#000000] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Pronta para acelerar seu crescimento profissional?
          </h2>
          <a
            href="https://wa.me/5511975490354"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
          >
            AGENDAR CONVERSA
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
