import { Button } from "@/components/ui/button";
import aboutImage from "/images/gaucia.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={aboutImage} 
                alt="Gláucia Teixeira" 
                className="w-full max-w-md mx-auto rounded-full shadow-2xl border-8 border-white aspect-square object-cover object-top ring-4 ring-blue-100"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">
              Quem é a Glau?
            </h2>
            
            <div className="space-y-6 text-lg text-blue-700/80 leading-relaxed">
              <p>
                Olá! Eu sou <strong className="text-blue-600">Glaucia Teixeira</strong>. Profissional de Recursos Humanos com mais de 23 anos de carreira e participação em mais de 1.000 processos seletivos.
              </p>
              <p>
                Ajudo profissionais a se reposicionarem no mercado com clareza, estratégia, fortalecimento da autoestima profissional e uso inteligente do LinkedIn, plataformas de recrutamento e Inteligência Artificial.
              </p>
            </div>

            <div className="mt-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Minha Missão</h3>
              <p className="text-blue-700/80 italic">
                "Desmistificar o processo seletivo e empoderar candidatos para que eles assumam o protagonismo de suas carreiras, conquistando vagas que realmente façam sentido para seus objetivos de vida."
              </p>
            </div>

            <div className="mt-10">
              <Button 
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold shadow-lg shadow-amber-500/30 rounded-full px-8 py-3"
                onClick={() => window.open("https://wa.me/5511994348590", "_blank")}
              >
                Falar com a Glau no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
