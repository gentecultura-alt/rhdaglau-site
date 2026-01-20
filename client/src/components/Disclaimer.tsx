import { useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, CheckCircle2, ShieldAlert, X } from "lucide-react";

const Disclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8 bg-amber-50/50 border-y border-amber-100">
      <div className="container max-w-4xl">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between gap-4 text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">
              Aviso importante sobre meus serviços
            </span>
          </div>
          <div className="flex-shrink-0 text-gray-400 group-hover:text-primary transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* O que eu NÃO faço */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Eu não sou headhunter e não garanto emprego ou vaga.</strong><br />
                Eu não cobro valores para indicação de vagas e não realizo contratações.
              </p>
            </div>

            {/* O que eu FAÇO */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-700 mb-4 font-medium">
                Meu trabalho é focado no seu desenvolvimento profissional, com serviços como:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Atualização e melhoria do currículo</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Direcionamento e estratégias para conquistar oportunidades</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Orientação para processos seletivos e entrevistas</span>
                </li>
              </ul>
            </div>

            {/* Alerta de Golpes */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800 mb-2">Cuidado com golpes:</p>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Se você receber mensagens oferecendo vagas em meu nome, pedindo dinheiro, dados pessoais ou prometendo contratação rápida, desconfie — provavelmente é golpe.
                  </p>
                </div>
              </div>
            </div>

            {/* Mensagem final */}
            <p className="text-center text-gray-600 text-sm italic">
              Conte comigo para se preparar melhor e aumentar suas chances de conseguir um emprego com segurança.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Disclaimer;
