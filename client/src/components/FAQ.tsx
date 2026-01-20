import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como o trabalho é iniciado?",
    answer: "Após a contratação, entrarei em contato para agendar uma conversa inicial (briefing) onde entenderemos seus objetivos, experiências e necessidades específicas. A partir daí, iniciaremos o processo de reformulação ou mentoria."
  },
  {
    question: "Posso solicitar revisões ou ajustes?",
    answer: "Sim! Todos os pacotes incluem revisões gratuitas (variando de 1 a 3 dependendo do pacote escolhido) para garantir que o material final esteja 100% alinhado com suas expectativas e objetivos."
  },
  {
    question: "Preciso passar minha senha do LinkedIn?",
    answer: "Não é obrigatório. Posso enviar um documento com todas as sugestões de alteração para que você mesmo aplique, ou, se preferir e confiar, podemos fazer o acesso temporário para agilizar o processo. A escolha é totalmente sua."
  },
  {
    question: "Como funcionam os encontros de mentoria?",
    answer: "Os encontros são realizados online (via Google Meet ou Zoom), com duração de 60 minutos cada. Focamos em simulações de entrevista, estratégias de networking e dúvidas específicas sobre sua carreira."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos PIX, transferência bancária e cartão de crédito (com possibilidade de parcelamento nos pacotes maiores)."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-blue-700/70">
            Tire suas dúvidas sobre os serviços e processos.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-100">
                <AccordionTrigger className="text-left font-medium text-blue-900 hover:text-blue-600 hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-700/80 leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
