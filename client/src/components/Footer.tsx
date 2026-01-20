import { Shield, Lock, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-stone-100 via-orange-50 to-sky-50 text-gray-700 pt-16 pb-8 mt-auto border-t border-stone-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-sky-600 mb-4">RH da Glau</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Recolocação profissional com estratégia e posicionamento. 
              Você não está sozinha nessa caminhada. Vamos até dar certo!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 text-gray-500"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 text-gray-500"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:rhdaglau@gmail.com" 
                  className="flex items-center gap-3 text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <Mail size={18} className="text-sky-500" />
                  rhdaglau@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511994348590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <Phone size={18} className="text-sky-500" />
                  (11) 99434-8590
                </a>
              </li>
            </ul>
          </div>

          {/* LGPD Notice */}
          <div className="bg-white rounded-xl p-6 border border-sky-100 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-6 h-6 text-sky-500 flex-shrink-0" />
              <h4 className="text-gray-800 font-semibold flex items-center gap-2">
                Segurança e Privacidade
              </h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Este site está em conformidade com a <strong className="text-gray-700">Lei Geral de Proteção de Dados (LGPD)</strong>. 
              Seus dados são tratados com total confidencialidade e segurança.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Lock size={12} />
              <span>Conexão Segura SSL</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-200 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} RH da Glau. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400 mt-2 md:mt-0">
            Desenvolvido com carinho para sua carreira.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
