import { Button } from "@/components/ui/button";
import { FileText, Linkedin, UserCheck, Rocket, MessageSquare, Star } from "lucide-react";

const services = [
  {
    icon: <MessageSquare className="w-8 h-8 text-sky-500" />,
    title: "Me Chama Para Entrevista",
    description: "Ideal para uma revisão rápida e profissional do seu currículo atual, inclusive primeiro emprego (Aprendiz e Estágio).",
    price: "R$ 39,00",
    features: [
      "Reformulação do currículo atual",
      "Sugestões de otimização",
      "Entrega em PDF e Word",
      "Entrega em até 5 dias úteis",
      "1 revisão do currículo sem custo",
      "Suporte de 10 dias pós-entrega"
    ],
    highlight: false
  },
  {
    icon: <Linkedin className="w-8 h-8 text-sky-500" />,
    title: "Essa Vaga É Minha",
    description: "Currículo e LinkedIn alinhados para aumentar sua visibilidade e atrair recrutadores.",
    price: "R$ 59,00",
    features: [
      "Currículo completamente reformulado",
      "Otimização com palavras-chaves",
      "Atualização do perfil no LinkedIn",
      "Posicionamento estratégico na rede",
      "Entrega em até 7 dias úteis",
      "Até 2 revisões sem custo",
      "Suporte de 10 dias pós-entrega"
    ],
    highlight: false
  },
  {
    icon: <Star className="w-8 h-8 text-orange-500" />,
    title: "Recrutador(a) Me Nota",
    description: "O pacote mais completo para quem quer destaque imediato e preparação total.",
    price: "R$ 99,00",
    features: [
      "Currículo reformulado",
      "Linkedin completamente reformulado",
      "Palavras-chave estratégicas",
      "1 Mentoria de 60 minutos",
      "Entrega em 10 dias úteis",
      "Até 2 revisões sem custo",
      "Suporte de 10 dias pós-entrega"
    ],
    highlight: true
  },
  {
    icon: <UserCheck className="w-8 h-8 text-sky-500" />,
    title: "Mentoria Completa",
    description: "Acompanhamento integral para uma transição de carreira segura e planejada.",
    price: "R$ 239,00",
    features: [
      "Todos os serviços anteriores",
      "Análise de Perfil completa",
      "2 encontros de mentoria (60 min)",
      "Acompanhamento por 30 dias",
      "Estratégia de transição personalizada",
      "Parcelável em 3x no cartão",
      "Até 3 revisões sem custo"
    ],
    highlight: false
  },
  {
    icon: <Rocket className="w-8 h-8 text-sky-500" />,
    title: "Plano 90D: Decola",
    description: "90 dias pra ganhar ritmo e gerar impacto. Adaptação rápida e geração de valor.",
    price: "R$ 350,00",
    features: [
      "Clareza de expectativas e prioridades",
      "Conexões com pessoas-chave",
      "Segurança e autonomia no dia a dia",
      "Entregas rápidas (quick wins)",
      "Plano organizado (30/60/90 dias)",
      "Bônus: Checklist + Templates"
    ],
    highlight: false
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Nossos Pacotes
          </h2>
          <p className="text-lg text-gray-500">
            Soluções desenhadas para atender a diferentes necessidades e momentos de carreira.
            Escolha o plano ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                service.highlight 
                  ? "shadow-xl border-2 border-orange-300 ring-4 ring-orange-100" 
                  : "shadow-lg border border-gray-100 hover:shadow-xl hover:border-sky-200"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Mais Popular
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                service.highlight ? "bg-gradient-to-br from-orange-50 to-orange-100" : "bg-sky-50"
              }`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 min-h-[60px]">{service.description}</p>
              
              <div className="mb-8">
                <span className={`text-3xl font-bold ${service.highlight ? "text-orange-500" : "text-sky-500"}`}>{service.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.highlight ? "bg-orange-400" : "bg-sky-400"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  service.highlight 
                    ? "bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold shadow-lg shadow-orange-200" 
                    : "bg-sky-500 hover:bg-sky-600 text-white"
                }`}
                onClick={() => window.open("https://wa.me/5511994348590", "_blank")}
              >
                Contratar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
