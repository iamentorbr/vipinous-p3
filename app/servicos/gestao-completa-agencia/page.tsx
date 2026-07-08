import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Pacote START & GROWTH | Gestão Completa + Agência de Marketing Digital | VI.P & NÔUS",
  description: "Sua marca pessoal e empresarial gerida com estratégia completa. Foque no que só você pode fazer enquanto a execução acontece por você.",
}

export default function GestaoCompletaAgenciaPage() {
  return (
    <ServicePageLayout
      packageNumber="START & GROWTH"
      title="Gestão Completa + Agência de Marketing Digital"
      subtitle="Estratégia + execução completa da sua presença digital"
      description="Sua marca pessoal e empresarial passa a ser gerida com a mesma estratégia que governa o seu desenvolvimento interno. Você para de perder tempo com produção de conteúdo e passa a focar no que só você pode fazer enquanto a execução acontece por você."
      features={[
        {
          title: "Gestão Estratégica Integrada",
          description: "Sua marca pessoal e empresarial passa a ser gerida com a mesma estratégia que governa o seu desenvolvimento interno."
        },
        {
          title: "Foco no que Importa",
          description: "Você para de perder tempo com produção de conteúdo e passa a focar no que só você pode fazer enquanto a execução acontece por você."
        },
        {
          title: "Comunicação com Intenção",
          description: "Cada post, arte e legenda carrega intenção estratégica — não é conteúdo pelo conteúdo, é comunicação que posiciona e converte."
        },
        {
          title: "Análise e Direcionamento",
          description: "Receba relatórios mensais que mostram onde seu negócio está crescendo e onde a energia precisa ser redirecionada."
        }
      ]}
      includes={[
        "Tudo dos Pacotes START e GROWTH, e ainda:",
        "Sua marca pessoal e empresarial passa a ser gerida com a mesma estratégia que governa o seu desenvolvimento interno",
        "Você para de perder tempo com produção de conteúdo e passa a focar no que só você pode fazer enquanto a execução acontece por você",
        "Cada post, arte e legenda carrega intenção estratégica — não é conteúdo pelo conteúdo, é comunicação que posiciona e converte",
        "Recebe relatórios mensais que mostram onde seu negócio está crescendo e onde a energia precisa ser redirecionada"
      ]}
      idealFor={[
        "Quer delegar totalmente a execução da sua presença digital",
        "Não tem tempo para produzir conteúdo consistente",
        "Busca comunicação estratégica que posiciona e converte",
        "Quer relatórios que mostram onde investir energia",
        "Precisa de uma equipe alinhada à sua estratégia de desenvolvimento"
      ]}
      prevService={{
        href: "/servicos/gestao-ativacao-digital",
        title: "Pacote GROWTH"
      }}
      nextService={{
        href: "/servicos/execucao-global",
        title: "Pacote EXECUÇÃO GLOBAL"
      }}
    />
  )
}
