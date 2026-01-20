import { Button } from "@/components/ui/button";
import aboutImage from "/images/gaucia.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-orange-50 via-white to-sky-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-orange-200/30 rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={aboutImage} 
                alt="Gláucia Teixeira" 
                className="w-full max-w-md mx-auto rounded-full shadow-2xl border-8 border-white aspect-square object-cover object-top ring-4 ring-sky-100"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-orange-200/40 rounded-full blur-2xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Quem é a Glau?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Olá! Eu sou <strong className="text-sky-600">Glaucia Teixeira</strong>. Profissional de Recursos Humanos com mais de 23 anos de carreira e participação em mais de 1.000 processos seletivos.
              </p>
              <p>
                Ajudo profissionais a se reposicionarem no mercado com clareza, estratégia, fortalecimento da autoestima profissional e uso inteligente do LinkedIn, plataformas de recrutamento e Inteligência Artificial.
              </p>
            </div>

            <div className="mt-10 bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Minha Missão</h3>
              <p className="text-gray-600 italic">
                "Desmistificar o processo seletivo e empoderar candidatos para que eles assumam o protagonismo de suas carreiras, conquistando vagas que realmente façam sentido para seus objetivos de vida."
              </p>
            </div>

            <div className="mt-10">
              <Button 
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold shadow-lg shadow-orange-200 rounded-full px-8 py-3"
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
