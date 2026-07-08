import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Pacote START | Gestão de Carreira e Comportamento | VI.P & NÔUS",
  description: "Descubra padrões comportamentais que limitam seus resultados e construa clareza real sobre seu propósito profissional com método e acompanhamento semanal.",
}

export default function GestaoCarreiraComportamentoPage() {
  return (
    <ServicePageLayout
      packageNumber="START"
      title="Gestão de Carreira e Comportamento"
      subtitle="Autoconhecimento estratégico para decisões certeiras"
      description="Você descobre os padrões comportamentais que estão travando suas decisões e limitando seus resultados. Constrói clareza real sobre seu propósito profissional e o caminho mais alinhado com quem você genuinamente é."
      features={[
        {
          title: "Mapeamento de Padrões Comportamentais",
          description: "Descubra os padrões que estão travando suas decisões e limitando seus resultados."
        },
        {
          title: "Dissolução de Crenças Limitantes",
          description: "Identifique crenças inconscientes que sabotam sua liderança e aprenda a dissolvê-las com método, não com força de vontade."
        },
        {
          title: "Clareza de Propósito",
          description: "Construa clareza real sobre seu propósito profissional e o caminho mais alinhado com quem você genuinamente é."
        },
        {
          title: "Tomada de Decisão com Segurança",
          description: "Passe a tomar decisões de carreira com segurança, porque você entende sua própria lógica de funcionamento."
        }
      ]}
      includes={[
        "Você descobre os padrões comportamentais que estão travando suas decisões e limitando seus resultados",
        "Identifica crenças inconscientes que sabotam sua liderança e aprende a dissolvê-las com método, não com força de vontade",
        "Constrói clareza real sobre seu propósito profissional e o caminho mais alinhado com quem você genuinamente é",
        "Passa a tomar decisões de carreira com segurança, porque você entende sua própria lógica de funcionamento",
        "Sai de cada semana com um plano de ação concreto e com alguém ao lado para garantir que ele acontece"
      ]}
      idealFor={[
        "Está em transição de carreira ou momento de decisão profissional",
        "Sente que padrões comportamentais estão travando seu crescimento",
        "Busca clareza sobre seu propósito e direção profissional",
        "Quer tomar decisões com mais segurança e autoconhecimento",
        "Precisa de acompanhamento semanal para transformar planos em ação"
      ]}
      nextService={{
        href: "/servicos/gestao-ativacao-digital",
        title: "Pacote GROWTH"
      }}
    />
  )
}
