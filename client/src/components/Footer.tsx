import { Shield, Lock, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-blue-100 pt-16 pb-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">RH da Glau</h3>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Recolocação profissional com estratégia e posicionamento. 
              Você não está sozinha nessa caminhada. Vamos até dar certo!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
                  className="flex items-center gap-3 hover:text-amber-400 transition-colors"
                >
                  <Mail size={18} className="text-cyan-400" />
                  rhdaglau@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511994348590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-amber-400 transition-colors"
                >
                  <Phone size={18} className="text-cyan-400" />
                  (11) 99434-8590
                </a>
              </li>
            </ul>
          </div>

          {/* LGPD Notice */}
          <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-700/50">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <h4 className="text-white font-semibold flex items-center gap-2">
                Segurança e Privacidade
              </h4>
            </div>
            <p className="text-xs text-blue-200/70 leading-relaxed mb-3">
              Este site está em conformidade com a <strong className="text-blue-100">Lei Geral de Proteção de Dados (LGPD)</strong>. 
              Seus dados são tratados com total confidencialidade e segurança.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-300/60">
              <Lock size={12} />
              <span>Conexão Segura SSL</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700/50 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-blue-300/70">
            © {currentYear} RH da Glau. Todos os direitos reservados.
          </p>
          <p className="text-xs text-blue-400/50 mt-2 md:mt-0">
            Desenvolvido com carinho para sua carreira.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
