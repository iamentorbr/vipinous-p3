import { Metadata } from "next"
import Link from "next/link"
import { InnerNavigation } from "@/components/inner-navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | VI.P & NÔUS",
  description: "Artigos sobre autoconhecimento, gestão de carreira e empreendedorismo feminino.",
}

const articles = [
  {
    slug: "poder-astrocomportamental-autoconhecimento",
    title: "O Poder AstroComportamental do Autoconhecimento",
    excerpt: "Descubra como a astrologia comportamental pode ser uma ferramenta poderosa para o autoconhecimento e desenvolvimento pessoal, revelando padrões e potenciais únicos.",
    date: "10 de Abril, 2026",
    readTime: "8 min de leitura",
    category: "Autoconhecimento",
  },
  {
    slug: "gestao-carreira-jornada-crescimento",
    title: "Gestão de Carreira: Uma Jornada de Crescimento Exponencial",
    excerpt: "Aprenda como transformar sua trajetória profissional através de estratégias de gestão de carreira que geram crescimento sustentável e resultados expressivos.",
    date: "05 de Abril, 2026",
    readTime: "10 min de leitura",
    category: "Carreira",
  },
  {
    slug: "seja-empresaria-de-verdade",
    title: "Seja Empresária de Verdade",
    excerpt: "Mais do que empreender, é preciso pensar e agir como empresária. Entenda a diferença e como dar esse salto na sua jornada empreendedora.",
    date: "01 de Abril, 2026",
    readTime: "7 min de leitura",
    category: "Empreendedorismo",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F1EFED]">
      <InnerNavigation />
      
      {/* Hero */}
      <section className="bg-[#000000] px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-medium tracking-widest text-[#C9A84C]">
            BLOG
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Insights e Reflexões
          </h1>
          <p className="mt-6 text-lg text-[#888888]">
            Artigos sobre autoconhecimento, gestão de carreira e empreendedorismo 
            para mulheres que querem crescer de forma estratégica e autêntica.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col bg-white transition-all duration-300 hover:shadow-xl"
              >
                {/* Category Badge */}
                <div className="bg-[#000000] px-6 py-4">
                  <span className="text-xs font-medium tracking-widest text-[#C9A84C]">
                    {article.category.toUpperCase()}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#C9A84C]">
                    {article.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#888888]">
                    {article.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="mt-6 flex items-center gap-4 text-xs text-[#888888]">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  
                  {/* Read More */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#C9A84C]">
                    <span>Ler artigo</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#000000] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Pronta para transformar sua carreira?
          </h2>
          <p className="mt-4 text-[#888888]">
            Agende uma conversa e descubra como a consultoria integrativa pode te ajudar.
          </p>
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
