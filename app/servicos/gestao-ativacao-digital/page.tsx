import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Pacote GROWTH | Gestão de Carreira, Comportamento e Ativação Digital | VI.P & NÔUS",
  description: "Transforme sua essência em presença digital autêntica e magnética. Posicionamento estratégico que atrai as pessoas certas sem precisar performar quem não é.",
}

export default function GestaoAtivacaoDigitalPage() {
  return (
    <ServicePageLayout
      packageNumber="GROWTH"
      title="Gestão de Carreira, Comportamento e Ativação Digital"
      subtitle="Sua essência traduzida em presença digital magnética"
      description="Descobre como sua essência e seu posicionamento comportamental se traduzem em uma presença digital autêntica e magnética. Transforma sua história e seus diferenciais em uma narrativa estratégica que atrai as pessoas certas."
      features={[
        {
          title: "Presença Digital Autêntica",
          description: "Descubra como sua essência e seu posicionamento comportamental se traduzem em uma presença digital autêntica e magnética."
        },
        {
          title: "Narrativa Estratégica",
          description: "Transforme sua história e seus diferenciais em uma narrativa que atrai as pessoas certas sem precisar performar quem não é."
        },
        {
          title: "Comunicação de Nível Profissional",
          description: "Seus perfis e canais passam a comunicar o nível profissional que você já alcançou e que o mercado ainda não estava enxergando."
        },
        {
          title: "Plano de Conteúdo Realista",
          description: "Saia com um plano de conteúdo que faz sentido para a sua vida real — sem fórmulas genéricas, sem sobrecarga."
        }
      ]}
      includes={[
        "Tudo do Pacote START, e ainda:",
        "Descobre como sua essência e seu posicionamento comportamental se traduzem em uma presença digital autêntica e magnética",
        "Transforma sua história e seus diferenciais em uma narrativa estratégica que atrai as pessoas certas sem precisar performar quem não é",
        "Seus perfis e canais passam a comunicar o nível profissional que você já alcançou e que o mercado ainda não estava enxergando",
        "Sai com um plano de conteúdo que faz sentido para a sua vida real sem fórmulas genéricas, sem sobrecarga"
      ]}
      idealFor={[
        "Quer construir autoridade e visibilidade online de forma autêntica",
        "Sente que o mercado ainda não enxerga seu verdadeiro nível profissional",
        "Deseja atrair clientes e oportunidades sem precisar performar",
        "Busca uma presença digital alinhada à sua identidade real",
        "Quer criar conteúdo estratégico sem fórmulas genéricas"
      ]}
      prevService={{
        href: "/servicos/gestao-carreira-comportamento",
        title: "Pacote START"
      }}
      nextService={{
        href: "/servicos/gestao-completa-agencia",
        title: "Pacote START & GROWTH"
      }}
    />
  )
}
