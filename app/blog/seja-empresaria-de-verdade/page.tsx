import { Metadata } from "next"
import Link from "next/link"
import { InnerNavigation } from "@/components/inner-navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Seja Empresária de Verdade | VI.P & NÔUS",
  description: "Mais do que empreender, é preciso pensar e agir como empresária. Entenda a diferença e como dar esse salto.",
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
            EMPREENDEDORISMO
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl text-balance">
            Seja Empresária de Verdade
          </h1>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-[#888888]">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              01 de Abril, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              7 min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-6 py-16 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[#1A1A1A]">
            Existe uma diferença fundamental entre ter um negócio e ser empresária. Muitas mulheres empreendem, mas continuam pensando como funcionárias do próprio negócio. Se você quer resultados diferentes, precisa desenvolver uma mentalidade empresarial de verdade.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            A Armadilha do &quot;Eu Faço Tudo&quot;
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Uma das maiores armadilhas do empreendedorismo feminino é a crença de que precisamos fazer tudo sozinhas. Atendemos clientes, fazemos marketing, cuidamos das finanças, criamos conteúdo, respondemos mensagens... e no fim do dia, estamos exaustas e o negócio não cresce.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            A empresária de verdade entende que seu papel é estratégico. Ela trabalha no negócio, não apenas para o negócio. Isso significa delegar, automatizar e focar no que realmente move os resultados.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            Mentalidade de Funcionária vs. Mentalidade de Empresária
          </h2>
          
          <div className="mt-6 overflow-hidden border border-[#C9A84C]/30">
            <table className="w-full text-sm">
              <thead className="bg-[#000000] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Funcionária</th>
                  <th className="px-4 py-3 text-left font-medium">Empresária</th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A]">
                <tr className="border-t border-[#C9A84C]/20">
                  <td className="px-4 py-3">Troca tempo por dinheiro</td>
                  <td className="px-4 py-3">Cria sistemas que geram receita</td>
                </tr>
                <tr className="border-t border-[#C9A84C]/20 bg-[#F1EFED]">
                  <td className="px-4 py-3">Faz tudo sozinha</td>
                  <td className="px-4 py-3">Delega e constrói equipe</td>
                </tr>
                <tr className="border-t border-[#C9A84C]/20">
                  <td className="px-4 py-3">Reage aos problemas</td>
                  <td className="px-4 py-3">Antecipa e previne</td>
                </tr>
                <tr className="border-t border-[#C9A84C]/20 bg-[#F1EFED]">
                  <td className="px-4 py-3">Foca no operacional</td>
                  <td className="px-4 py-3">Foca no estratégico</td>
                </tr>
                <tr className="border-t border-[#C9A84C]/20">
                  <td className="px-4 py-3">Tem medo de investir</td>
                  <td className="px-4 py-3">Investe para crescer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            Os 4 Pilares da Empresária de Verdade
          </h2>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            1. Visão Clara
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Você sabe exatamente onde quer chegar com seu negócio em 1, 3 e 5 anos? A empresária de verdade tem uma visão clara e todas as suas decisões são filtradas por essa visão. Cada ação, cada investimento, cada contratação precisa fazer sentido dentro do plano maior.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            2. Gestão Financeira
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Você conhece seus números? Margem de lucro, custo de aquisição de cliente, ticket médio, fluxo de caixa? Muitas empreendedoras fogem dos números, mas a empresária de verdade os abraça. Os números contam a história real do seu negócio.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            3. Posicionamento Forte
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Qual é o seu diferencial? Por que alguém deveria escolher você e não a concorrência? A empresária de verdade não compete por preço, compete por valor. Ela constrói uma marca que é reconhecida e desejada no seu mercado.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#1A1A1A]">
            4. Estrutura e Processos
          </h3>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Seu negócio funciona sem você? Se você tirar férias por 30 dias, ele continua rodando? A empresária de verdade constrói processos, sistemas e equipes que fazem o negócio funcionar de forma independente. Ela é a CEO, não a operadora.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            A Transformação Começa na Mentalidade
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Antes de mudar processos, é preciso mudar a forma de pensar. E essa transformação de mentalidade é profunda. Envolve desconstruir crenças limitantes, trabalhar medos inconscientes e desenvolver uma nova identidade como líder e empresária.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            É exatamente isso que fazemos na VI.P & NÔUS. Combinamos gestão comportamental com estratégia de negócios para que você não apenas aprenda o que fazer, mas se torne a pessoa capaz de fazer acontecer.
          </p>

          <div className="mt-12 border-l-4 border-[#C9A84C] bg-[#000000] p-6">
            <p className="italic text-white">
              &quot;Você não precisa de mais informação. Você precisa de transformação. E transformação começa de dentro para fora.&quot;
            </p>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section className="border-t border-[#C9A84C]/20 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/blog/gestao-carreira-jornada-crescimento"
            className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft size={14} />
            Artigo anterior
          </Link>
          <div></div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#000000] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            Pronta para se tornar uma empresária de verdade?
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
