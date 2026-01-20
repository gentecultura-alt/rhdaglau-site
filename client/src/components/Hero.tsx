import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "/images/gaucia.jpg"; // Usando a imagem da usuária

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 rounded-l-[100px] hidden lg:block"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Recolocação Profissional Estratégica
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Conquiste a vaga <br/>
              <span className="relative inline-block">
                que você merece
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Transforme seu currículo, otimize seu LinkedIn e prepare-se para entrevistas com uma abordagem humanizada e estratégica. Mais de 23 anos de experiência em RH ao seu lado.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button 
                className="btn-primary h-12 px-8 text-base w-full sm:w-auto"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Pacotes
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline h-12 px-8 text-base w-full sm:w-auto"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça a Glau
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>+1.000 Processos Seletivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>23+ Anos de Experiência</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Gláucia - Especialista em RH" 
                className="w-full h-auto object-cover max-w-md mx-auto"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Aprovado!</p>
                    <p className="text-xs text-gray-500 mt-1">"Consegui minha recolocação em 15 dias com a ajuda da Glau!"</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
