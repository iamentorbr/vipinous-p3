import { Metadata } from "next"
import Link from "next/link"
import { InnerNavigation } from "@/components/inner-navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "O Poder AstroComportamental do Autoconhecimento | VI.P & NÔUS",
  description: "Descubra como a astrologia comportamental pode ser uma ferramenta poderosa para o autoconhecimento e desenvolvimento pessoal.",
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
            AUTOCONHECIMENTO
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl text-balance">
            O Poder AstroComportamental do Autoconhecimento
          </h1>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-[#888888]">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              10 de Abril, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              8 min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-6 py-16 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[#1A1A1A]">
            O autoconhecimento é a base de qualquer transformação verdadeira. Quando falamos em gestão de carreira e desenvolvimento pessoal, precisamos ir além das técnicas superficiais e mergulhar nas camadas mais profundas do nosso ser. É aqui que a Astrologia Comportamental se torna uma ferramenta extraordinária.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            O que é Astrologia Comportamental?
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Diferente da astrologia popular que conhecemos pelos horóscopos, a Astrologia Comportamental é uma metodologia que utiliza o mapa astral como ferramenta de diagnóstico comportamental. Ela nos ajuda a identificar padrões de pensamento, emoções e ações que moldam nossa forma de nos relacionar com o mundo, com o trabalho e conosco mesmas.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Através dela, conseguimos entender por que reagimos de determinada forma em situações de pressão, por que alguns ambientes nos energizam enquanto outros nos drenam, e quais são nossos talentos naturais que muitas vezes subestimamos.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            A Jornada do Autoconhecimento
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Conhecer a si mesma não é um destino, mas uma jornada contínua. E nessa jornada, ter um mapa faz toda a diferença. A Astrologia Comportamental oferece exatamente isso: um mapa das suas tendências naturais, seus pontos de força e as áreas que precisam de mais atenção e desenvolvimento.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Quando você entende seus padrões, pode trabalhar conscientemente para transformá-los. Não se trata de mudar quem você é, mas de potencializar o que há de melhor em você e desenvolver estratégias para lidar com seus desafios de forma mais inteligente.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            Aplicação na Carreira e nos Negócios
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            No contexto profissional, o autoconhecimento astrocomportamental permite:
          </p>
          <ul className="mt-4 space-y-2 text-[#1A1A1A]">
            <li>Identificar o tipo de trabalho que mais combina com sua essência</li>
            <li>Entender seu estilo natural de liderança e comunicação</li>
            <li>Reconhecer em quais momentos você performa melhor</li>
            <li>Compreender suas motivações profundas de carreira</li>
            <li>Desenvolver inteligência emocional de forma direcionada</li>
          </ul>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-[#1A1A1A]">
            O Primeiro Passo
          </h2>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Se você sente que está em um momento de transição, buscando mais clareza sobre seus próximos passos ou querendo entender por que algumas situações se repetem na sua vida profissional, o diagnóstico astrocomportamental pode ser o início de uma transformação profunda.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]">
            Na VI.P & NÔUS, utilizamos essa ferramenta integrada a outras metodologias de gestão comportamental para criar um processo de desenvolvimento completo e personalizado. Porque acreditamos que cada mulher tem um potencial único que merece ser descoberto e desenvolvido.
          </p>

          <div className="mt-12 border-l-4 border-[#C9A84C] bg-[#000000] p-6">
            <p className="italic text-white">
              &quot;Conhecer a si mesma é o início de toda sabedoria. E quando esse conhecimento se transforma em ação estratégica, os resultados são extraordinários.&quot;
            </p>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section className="border-t border-[#C9A84C]/20 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div></div>
          <Link
            href="/blog/gestao-carreira-jornada-crescimento"
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
            Quer descobrir seu potencial através da Astrologia Comportamental?
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
