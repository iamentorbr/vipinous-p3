import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Pacote EXECUÇÃO GLOBAL | Operação completa do seu negócio | VI.P & NÔUS",
  description: "O topo da jornada: a operação sai da sua mão. Execução completa via parceiros, coordenação única e relatório executivo mensal. Você lidera, a gente cuida do resto.",
}

export default function ExecucaoGlobalPage() {
  return (
    <ServicePageLayout
      packageNumber="EXECUÇÃO GLOBAL"
      title="Execução Global"
      subtitle="Topo da jornada: você lidera, a operação sai da sua mão"
      description="O pacote onde a operação sai da sua mão. Você não precisa executar, precisa liderar. Toda a produção e publicação acontece por meio de parceiros coordenados diretamente pela Lys, para que você foque na visão do negócio enquanto a gente cuida do resto."
      features={[
        {
          title: "Execução Completa via Parceiros",
          description: "Entregáveis produzidos e publicados, não apenas planejados. A operação digital acontece de ponta a ponta sem passar pelas suas mãos."
        },
        {
          title: "Ponto Único de Comando",
          description: "A Lys coordena todos os entregáveis e parceiros, garantindo que tudo saia com a mesma estratégia e o mesmo padrão de qualidade."
        },
        {
          title: "Relatório Executivo Mensal",
          description: "Um panorama claro de entregas e resultados a cada mês, para você acompanhar a evolução do negócio no nível de decisão."
        },
        {
          title: "Prioridade de Agenda e Resposta",
          description: "Acesso preferencial na agenda e nas respostas, para que as decisões importantes nunca fiquem esperando."
        }
      ]}
      includes={[
        "Tudo do Pacote START & GROWTH, e ainda:",
        "Execução completa via parceiros: entregáveis produzidos e publicados, não apenas planejados",
        "Ponto único de comando: a Lys coordena todos os entregáveis e parceiros",
        "Relatório executivo mensal de entregas e resultados",
        "Prioridade de agenda e resposta"
      ]}
      idealFor={[
        "Já validou o negócio e quer tirar a operação do dia a dia das suas mãos",
        "Precisa liderar a estratégia sem se envolver na execução",
        "Quer um ponto único de comando coordenando todos os parceiros",
        "Busca acompanhamento executivo com relatórios de entregas e resultados",
        "Valoriza prioridade de agenda e agilidade nas respostas"
      ]}
      prevService={{
        href: "/servicos/gestao-completa-agencia",
        title: "Pacote START & GROWTH"
      }}
    />
  )
}
