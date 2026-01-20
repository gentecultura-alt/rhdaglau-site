import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "/images/gaucia.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -z-10 rounded-l-[100px] hidden lg:block"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/20 text-cyan-100 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 border border-cyan-400/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Recolocação Profissional Estratégica
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              No lugar certo, <br/>
              <span className="relative inline-block">
                a página é você que
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 drop-shadow-lg">
                BRILHA!
              </span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Bora reposicionar a sua carreira comigo? Transforme seu currículo, otimize seu LinkedIn e prepare-se para entrevistas com uma abordagem humanizada e estratégica.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button 
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-blue-900 font-bold h-12 px-8 text-base w-full sm:w-auto rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Pacotes
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-100 hover:bg-cyan-400/20 h-12 px-8 text-base w-full sm:w-auto rounded-full"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça a Glau
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-blue-200 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>+1.000 Processos Seletivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>23+ Anos de Experiência</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative z-10 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400/50 max-w-md mx-auto aspect-square">
              <img 
                src={heroImage} 
                alt="Gláucia - Especialista em RH" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-10 -left-4 lg:-left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 max-w-[200px]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Aprovado!</p>
                  <p className="text-xs text-blue-600 mt-1">"Consegui minha recolocação em 15 dias!"</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-soft-light filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-xl opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
