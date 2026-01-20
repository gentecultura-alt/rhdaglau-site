import { Shield, Lock, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">RH da Glau</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Recolocação profissional com estratégia e posicionamento. 
              Você não está sozinha nessa caminhada. Vamos até dar certo!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:rhdaglau@gmail.com" 
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  rhdaglau@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511994348590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  (11) 99434-8590
                </a>
              </li>
            </ul>
          </div>

          {/* LGPD Notice */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
              <h4 className="text-white font-semibold flex items-center gap-2">
                Segurança e Privacidade
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Este site está em conformidade com a <strong className="text-gray-300">Lei Geral de Proteção de Dados (LGPD)</strong>. 
              Seus dados são tratados com total confidencialidade e segurança.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Lock size={12} />
              <span>Conexão Segura SSL</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} RH da Glau. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            Desenvolvido com carinho para sua carreira.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
