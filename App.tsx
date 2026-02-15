
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Globe, 
  Monitor, 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ChevronDown,
  Star,
  Mail,
  Phone,
  Zap,
  Target,
  Menu,
  X,
  Youtube,
  Linkedin,
  Clock
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Componentes Compartilhados ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <>
      <header className="fixed w-full z-50 py-4 shadow-xl" style={{ background: 'var(--mindchat-purple)', borderTop: '5px solid var(--mindchat-orange)', borderBottom: '5px solid var(--mindchat-orange)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <a href="index.html" className="font-display font-extrabold text-3xl tracking-tighter text-white">
              MIND<span style={{ color: 'var(--mindchat-orange-text)' }}>CHAT</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-white">
            <a href="index.html#idiomas" className="hover:text-mindchat-orange transition-colors">Idiomas</a>
            <a href="index.html#metodologia" className="hover:text-mindchat-orange transition-colors">Metodologia</a>
            
            <div 
              className="relative group cursor-pointer" 
              onMouseEnter={() => setShowDropdown(true)} 
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-1 hover:text-mindchat-orange transition-colors">
                Modalidades <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </div>
              <div className={`absolute top-full left-0 mt-4 bg-white min-w-[240px] shadow-2xl rounded-xl overflow-hidden transition-all duration-300 origin-top z-[100] ${showDropdown ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                <a href="modalidades-ingles.html" className="block px-6 py-4 text-black hover:bg-gray-50 border-l-4 border-transparent hover:border-mindchat-orange transition-all font-bold">🇬🇧 Inglês</a>
                <a href="modalidades-espanhol.html" className="block px-6 py-4 text-black hover:bg-gray-50 border-l-4 border-transparent hover:border-mindchat-orange transition-all font-bold">🇪🇸 Espanhol</a>
                <a href="modalidades-italiano.html" className="block px-6 py-4 text-black hover:bg-gray-50 border-l-4 border-transparent hover:border-mindchat-orange transition-all font-bold">🇮🇹 Italiano</a>
                <a href="modalidades-frances.html" className="block px-6 py-4 text-black hover:bg-gray-50 border-l-4 border-transparent hover:border-mindchat-orange transition-all font-bold">🇫🇷 Francês</a>
              </div>
            </div>

            <a href="index.html#vantagens" className="hover:text-mindchat-orange transition-colors">Vantagens</a>
            <a href="index.html#depoimentos" className="hover:text-mindchat-orange transition-colors">Depoimentos</a>
            <a href="https://wa.me/5521234227066" target="_blank" className="bg-[#FB7102] px-6 py-2.5 rounded-xl shadow-lg font-bold text-sm hover:scale-105 transition-transform text-white">
              Fale Conosco
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-mindchat-purple z-[100] transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden p-8 overflow-y-auto`}>
        <div className="flex justify-between items-center mb-12">
          <span className="font-display font-extrabold text-3xl text-white">MIND<span style={{ color: 'var(--mindchat-orange-text)' }}>CHAT</span></span>
          <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
        </div>
        <nav className="flex flex-col gap-6">
          <a href="index.html#idiomas" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold">Idiomas</a>
          <a href="index.html#metodologia" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold">Metodologia</a>
          <div className="flex flex-col gap-4 border-l-2 border-mindchat-orange pl-4">
             <p className="text-mindchat-orange font-bold uppercase tracking-widest text-xs">Modalidades</p>
             <a href="modalidades-ingles.html" className="text-white text-xl">🇬🇧 Inglês</a>
             <a href="modalidades-espanhol.html" className="text-white text-xl">🇪🇸 Espanhol</a>
             <a href="modalidades-italiano.html" className="text-white text-xl">🇮🇹 Italiano</a>
             <a href="modalidades-frances.html" className="text-white text-xl">🇫🇷 Francês</a>
          </div>
          <a href="https://wa.me/5521234227066" target="_blank" className="bg-[#FB7102] text-center py-4 rounded-xl text-xl font-bold mt-4 text-white">Fale Conosco</a>
        </nav>
      </div>
    </>
  );
};

const Breadcrumb: React.FC<{ current: string }> = ({ current }) => (
  <div className="bg-bg-light border-b border-gray-200 mt-[80px]">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm">
      <a href="index.html" className="text-mindchat-orange hover:text-mindchat-orange-text font-semibold">Home</a>
      <span className="text-gray-400">›</span>
      <span className="text-text-gray font-medium">{current}</span>
    </div>
  </div>
);

const ModalityDetailCard: React.FC<{ 
  title: string, 
  badge: string, 
  desc: string, 
  publico: string, 
  horario?: string, 
  objetivo: string,
  categories?: string[]
}> = ({ title, badge, desc, publico, horario, objetivo, categories }) => (
  <div className="bg-white rounded-[20px] overflow-hidden border-2 border-gray-200 hover:border-mindchat-orange hover:shadow-2xl transition-all duration-500 mb-8 flex flex-col h-full group">
    <div className="p-8 bg-gradient-to-br from-[#3E2A5F] to-[#4D3670] text-white">
      <span className="bg-mindchat-orange px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">{badge}</span>
      <h3 className="text-3xl font-extrabold tracking-tight">{title}</h3>
    </div>
    <div className="p-8 flex-grow">
      <p className="text-text-gray leading-relaxed mb-8 font-light text-lg">{desc}</p>
      
      {categories && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => <span key={c} className="bg-gray-100 text-text-gray px-3 py-1 rounded-full text-xs font-semibold">{c}</span>)}
        </div>
      )}

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-xl text-mindchat-orange"><Users size={24}/></div>
          <div>
            <strong className="block text-mindchat-purple text-sm">Público-alvo:</strong>
            <span className="text-text-gray text-sm">{publico}</span>
          </div>
        </div>
        {horario && (
          <div className="flex gap-4 items-start">
            <div className="bg-gray-50 p-2 rounded-xl text-mindchat-orange"><Clock size={24}/></div>
            <div>
              <strong className="block text-mindchat-purple text-sm">Carga horária:</strong>
              <span className="text-text-gray text-sm">{horario}</span>
            </div>
          </div>
        )}
        <div className="flex gap-4 items-start">
          <div className="bg-gray-50 p-2 rounded-xl text-mindchat-orange"><Target size={24}/></div>
          <div>
            <strong className="block text-mindchat-purple text-sm">Objetivo:</strong>
            <span className="text-text-gray text-sm">{objetivo}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="px-8 pb-8 mt-auto">
      <a href="https://wa.me/5521234227066" target="_blank" className="w-full bg-mindchat-orange text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 group-hover:bg-mindchat-orange-text transition-all">
        Quero Esta Modalidade <Globe size={20} />
      </a>
    </div>
  </div>
);

// --- Seções da Home (Restauradas e Otimizadas) ---

const Hero: React.FC = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    gsap.from(".hero-content > *", { opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: "power3.out" });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen bg-[#1E1B24] flex items-center pt-24 overflow-hidden relative">
      {/* Background nítido e com contraste real para o texto */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80" 
           className="w-full h-full object-cover opacity-60" 
           alt="Background" 
         />
         {/* Sobreposição escura para garantir leitura do texto branco */}
         <div className="absolute inset-0 bg-[#1E1B24]/40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-content max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight text-shadow-vivid">
            Domine Novos Idiomas e <br/><span style={{ color: 'var(--mindchat-orange)' }}>Transforme Sua Carreira</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white mb-10 max-w-2xl font-light leading-relaxed text-shadow-vivid">
            Aulas ao vivo com professores dedicados, metodologia internacional e desenvolvimento que vai muito além do idioma. Inglês, Espanhol e Italiano para todas as idades.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#metodologia" className="bg-[#FB7102] px-10 py-5 rounded-2xl font-bold text-xl text-white shadow-xl hover:scale-105 transition-all">Nossa Metodologia</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80">
        <ChevronDown className="text-white" size={40} />
      </div>
    </section>
  );
};

const TrustBar: React.FC = () => (
  <section className="py-16 bg-white border-b border-gray-100 relative z-10 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { val: "3", label: "Idiomas Disponíveis" },
        { val: "100%", label: "Online e Ao Vivo" },
        { val: "6", label: "Categorias Especializadas" },
        { val: "+1000", label: "Alunos Satisfeitos" }
      ].map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl lg:text-5xl font-extrabold text-mindchat-purple mb-2 tracking-tighter">{s.val}</div>
          <div className="text-text-gray text-sm uppercase tracking-widest font-bold">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Languages: React.FC = () => (
  <section id="idiomas" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-4xl lg:text-6xl font-extrabold text-mindchat-purple mb-4 tracking-tight">Escolha Seu Idioma</h2>
      <p className="text-center text-text-gray text-lg max-w-2xl mx-auto mb-16 font-light">Aprenda quando e onde quiser, com professores qualificados e material de primeiro mundo</p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "INGLÊS", icon: "🇬🇧", path: "modalidades-ingles.html", desc: "Do básico à fluência avançada. Modalidades para crianças, jovens, adultos e profissionais offshore." },
          { name: "ESPANHOL", icon: "🇪🇸", path: "modalidades-espanhol.html", desc: "Aprenda o segundo idioma mais falado do mundo. Metodologia adaptada para todas as idades." },
          { name: "ITALIANO", icon: "🇮🇹", path: "modalidades-italiano.html", desc: "Aprenda a língua da arte e da cultura de forma única e envolvente. Conecte-se às raízes." }
        ].map(l => (
          <div key={l.name} className="p-10 border-2 border-gray-100 rounded-3xl hover:border-mindchat-orange hover:shadow-2xl transition-all duration-500 text-center flex flex-col h-full bg-white">
            <div className="text-7xl mb-6">{l.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-mindchat-purple uppercase tracking-tight">{l.name}</h3>
            <p className="text-text-gray mb-8 flex-grow leading-relaxed font-light">{l.desc}</p>
            <a href={l.path} className="text-mindchat-orange font-bold text-lg hover:underline transition-all">Ver Modalidades →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Advantages: React.FC = () => (
  <section id="vantagens" className="py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-mindchat-purple mb-4 tracking-tight">Vantagens do Aprendizado Online</h2>
      <p className="text-center text-text-gray text-lg max-w-2xl mx-auto mb-16 font-light">Tecnologia e metodologia exclusiva para acelerar seu aprendizado</p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: "🎯", title: "Flexibilidade Total", text: "Estude de qualquer lugar, no seu tempo." },
          { icon: "👨‍🏫", title: "Professores Qualificados", text: "Interação real e ao vivo em todas as aulas." },
          { icon: "📱", title: "Plataforma Moderna", text: "Acesse todo conteúdo por dispositivos móveis ou desktop." },
          { icon: "💰", title: "Custo-Benefício", text: "Economia comparado a cursos presenciais." },
          { icon: "🌍", title: "Conexão Global", text: "Interaja com alunos de diferentes lugares." },
          { icon: "📊", title: "Acompanhamento", text: "Monitore seu progresso em tempo real." }
        ].map((v, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-mindchat-purple">{v.title}</h3>
            <p className="text-text-gray font-light text-sm leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Differentials: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-4xl font-extrabold text-mindchat-purple mb-4 tracking-tight">A Melhor Solução Para Você</h2>
      <p className="text-center text-text-gray text-lg max-w-2xl mx-auto mb-16 font-light">Desenvolvemos muito além do idioma</p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: "🎥", title: "Aulas ao Vivo", text: "Interação real com professores dedicados." },
          { icon: "💻", title: "Processo 100% Online", text: "Da matrícula à certificação digital." },
          { icon: "🚀", title: "Desenvolvimento Integral", text: "Habilidades além da gramática." },
          { icon: "📚", title: "Material Premium", text: "Padrão internacional de qualidade." },
          { icon: "🎯", title: "Atividades Extras", text: "Conversation clubs e workshops." },
          { icon: "🏆", title: "Certificação Real", text: "Reconhecimento a cada nível." }
        ].map((d, i) => (
          <div key={i} className="p-8 border-2 border-gray-100 rounded-3xl hover:border-mindchat-orange transition-all group bg-white">
            <div className="w-16 h-16 rounded-2xl bg-mindchat-purple flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform">{d.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-mindchat-purple">{d.title}</h3>
            <p className="text-text-gray font-light text-sm">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Methodology: React.FC = () => (
  <section id="metodologia" className="py-24 bg-bg-light overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-mindchat-purple mb-8 tracking-tight">Nossa Metodologia</h2>
        <p className="text-lg text-text-gray leading-relaxed mb-8 font-light">Utilizamos uma abordagem comunicativa e interativa que coloca você no centro do aprendizado. Nossa metodologia combina o melhor dos métodos tradicionais com tecnologia de ponta para resultados reais.</p>
        <ul className="space-y-6">
          {["Aulas 100% ao vivo com interação humana", "Material de padrão internacional alinhado ao CEFR", "Certificação digital reconhecida a cada nível", "Foco total em conversação e confiança"].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-mindchat-purple font-bold text-lg">
              <CheckCircle size={24} className="text-mindchat-orange flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" className="rounded-3xl shadow-2xl relative z-10 w-full" alt="Metodologia MindChat" />
        <div className="absolute -inset-4 bg-mindchat-orange -rotate-3 rounded-3xl opacity-20 -z-10"></div>
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section id="depoimentos" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-mindchat-purple mb-16 tracking-tight">O Que Dizem Nossos Alunos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Ana Paula Silva", role: "Gerente de Projetos", text: "A MindChat mudou minha vida profissional. Finalmente consegui a fluência que precisava para reuniões globais!" },
          { name: "Ricardo Oliveira", role: "Engenheiro Offshore", text: "Como profissional offshore, o Catch UP foi perfeito para minha rotina de escalas. Atendimento nota 10." },
          { name: "Marcela Santos", role: "Diretora de Marketing", text: "O curso de Business English transformou minha comunicação e me deu a confiança necessária para liderar equipes internacionais." }
        ].map((t, i) => (
          <div key={i} className="bg-bg-light p-10 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#F37600" className="text-mindchat-orange" />)}
            </div>
            <p className="text-text-gray italic mb-8 font-light leading-relaxed">"{t.text}"</p>
            <div className="font-bold text-mindchat-purple text-lg">{t.name}</div>
            <div className="text-xs text-mindchat-orange font-bold uppercase tracking-widest mt-1">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-24 bg-[#1E1B24] text-white relative overflow-hidden">
    {/* Fundo escuro com imagem visível, contraste total para o texto */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920" 
        className="w-full h-full object-cover opacity-50" 
        alt="CTA Background" 
      />
      <div className="absolute inset-0 bg-[#1E1B24]/60"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight text-shadow-vivid">Pronto Para Transformar Seu Futuro?</h2>
      <p className="text-xl opacity-90 mb-12 font-light text-shadow-vivid max-w-2xl mx-auto leading-relaxed">
        Fale agora com um de nossos consultores e descubra por que centenas de alunos escolhem a MindChat para evoluir profissionalmente.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="mailto:contato@mindchat.com.br" className="bg-[#FB7102] px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 shadow-2xl transition-all text-white">Falar com Consultor</a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-[#1E1B24] text-white/50 py-20 border-t border-white/5 relative z-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
         <span className="font-display font-black text-4xl text-white mb-6 block tracking-tighter">MIND<span style={{ color: 'var(--mindchat-orange-text)' }}>CHAT</span></span>
         <p className="max-w-sm mb-8 text-white/70 leading-relaxed font-light">Transformando vidas através do ensino de idiomas de excelência com interação humana real. Inglês, Espanhol, Italiano e Francês 100% online.</p>
         <div className="flex gap-4">
            <a href="https://instagram.com/mindchat.idiomas" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-mindchat-orange hover:text-white transition-all duration-300"><Instagram size={22} /></a>
            <a href="https://www.facebook.com/profile.php?id=61575814332330" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-mindchat-orange hover:text-white transition-all duration-300"><Facebook size={22} /></a>
            <a href="https://wa.me/5521234227066" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-mindchat-orange hover:text-white transition-all duration-300"><MessageCircle size={22} /></a>
         </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-white/10 pb-2">Suporte</h4>
        <ul className="space-y-4 text-sm text-white/70">
          <li className="flex items-center gap-2 font-medium">📱 +55 21 2342 2706</li>
          <li className="flex items-center gap-2 font-medium">📧 contato@mindchat.com.br</li>
          <li className="flex items-center gap-2 font-medium">📍 Rio de Janeiro, Brasil</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-white/10 pb-2">Modalidades</h4>
        <ul className="space-y-4 text-sm font-medium">
          <li><a href="modalidades-ingles.html" className="hover:text-mindchat-orange transition-colors">Inglês Offshore & Business</a></li>
          <li><a href="modalidades-espanhol.html" className="hover:text-mindchat-orange transition-colors">Espanhol Fluente</a></li>
          <li><a href="modalidades-italiano.html" className="hover:text-mindchat-orange transition-colors">Italiano Cultural</a></li>
          <li><a href="modalidades-frances.html" className="hover:text-mindchat-orange transition-colors">Francês Diplomático</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center text-xs tracking-widest text-white/30">
      © 2026 MINDCHAT IDIOMAS. TODOS OS DIREITOS RESERVADOS. PROJETADO PARA ALTA PERFORMANCE.
    </div>
  </footer>
);

// --- Roteamento de Páginas ---

const HomePage: React.FC = () => (
  <>
    <Hero />
    <TrustBar />
    <Languages />
    <Advantages />
    <Differentials />
    <Methodology />
    <Testimonials />
    <FinalCTA />
  </>
);

const EnglishPage: React.FC = () => (
  <div className="bg-bg-light pb-24">
    <Breadcrumb current="Modalidades - Inglês" />
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-mindchat-purple mb-8 tracking-tight">Inglês na MindChat</h1>
        <p className="text-xl text-text-gray max-w-3xl font-light leading-relaxed mb-16">
          Programas completos focados em fluência real, desde o nível básico até especializações profissionais de alto nível como Offshore e Business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ModalityDetailCard title="Catch ON" badge="TURMAS" desc="Foco em interação dinâmica e networking em grupo colaborativo." publico="Jovens e Adultos" horario="2x por semana" objetivo="Fluência social e profissional ágil." />
          <ModalityDetailCard title="Catch UP" badge="INDIVIDUAL" desc="Flexibilidade total para profissionais com escalas de trabalho ou rotinas offshore." publico="Profissionais Offshore / Escalas Flexíveis" objetivo="Foco absoluto e rapidez sob medida." />
          <ModalityDetailCard title="Catch ON VIP" badge="VIP" desc="Atenção individualizada com o dinamismo de grupos exclusivos reduzidos." publico="Executivos e Lideranças" objetivo="Alta performance corporativa." />
          <ModalityDetailCard title="Chatter UP" badge="ESPECIALIZADO" desc="Inglês técnico especializado em 6 grandes categorias de mercado global." publico="Especialistas e Acadêmicos" objetivo="Domínio profissional absoluto." categories={["Business", "Aviation", "Medical", "Academic", "Maritime", "Oil & Gas"]} />
          <ModalityDetailCard title="Business English" badge="CORPORATIVO" desc="Foco prático em reuniões, apresentações e negociações internacionais de alto impacto." publico="Líderes Globais" objetivo="Comunicação Executiva Fluente." />
        </div>
      </div>
    </section>
  </div>
);

const SpanishPage: React.FC = () => (
  <div className="bg-bg-light pb-24">
    <Breadcrumb current="Modalidades - Espanhol" />
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-mindchat-purple mb-8 tracking-tight">Espanhol na MindChat</h1>
        <p className="text-xl text-text-gray max-w-3xl font-light leading-relaxed mb-16">Metodologia dinâmica e imersiva para fluência no segundo idioma mais falado do mundo.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <ModalityDetailCard title="Catch ON Espanhol" badge="TURMAS" desc="Aulas focadas em conversação real e situações do cotidiano hispânico moderno." publico="Todas as idades" objetivo="Comunicação natural e sem travas." />
          <ModalityDetailCard title="Catch UP Individual" badge="INDIVIDUAL" desc="Preparação intensiva para exames internacionais ou negociações comerciais específicas." publico="Foco Específico / Profissional" objetivo="Resultados acelerados e focados." />
        </div>
      </div>
    </section>
  </div>
);

const ItalianPage: React.FC = () => (
  <div className="bg-bg-light pb-24">
    <Breadcrumb current="Modalidades - Italiano" />
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-mindchat-purple mb-8 tracking-tight">Italiano na MindChat</h1>
        <p className="text-xl text-text-gray max-w-3xl font-light leading-relaxed mb-16">A língua da arte, gastronomia e tradição, ensinada de forma autêntica e apaixonante.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <ModalityDetailCard title="Catch ON Italiano" badge="TURMAS" desc="Imersão cultural e conversação natural focada na vivência autêntica da Itália." publico="Entusiastas e Viajantes" objetivo="Fluência cultural completa." />
          <ModalityDetailCard title="Catch UP VIP" badge="VIP" desc="Aulas exclusivas personalizadas para processos de cidadania ou viagens de longa duração." publico="Cidadania / Turismo de Luxo" objetivo="Foco total na jornada individual." />
        </div>
      </div>
    </section>
  </div>
);

const FrenchPage: React.FC = () => (
  <div className="bg-bg-light pb-24">
    <Breadcrumb current="Modalidades - Francês" />
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-mindchat-purple mb-8 tracking-tight">Francês na MindChat</h1>
        <p className="text-xl text-text-gray max-w-3xl font-light leading-relaxed mb-16">Elegância, diplomacia e fluência global com uma abordagem focada em resultados reais.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <ModalityDetailCard title="Catch ON Francês" badge="TURMAS" desc="Conversação fluida e gramática aplicada a contextos de cultura, moda e negócios." publico="Geral e Acadêmico" objetivo="Fluência global expressiva." />
          <ModalityDetailCard title="Catch UP Individual" badge="INDIVIDUAL" desc="Preparação sob medida para exames DELF/DALF, imigração ou carreira diplomática." publico="Acadêmico / Profissional" objetivo="Metas de proficiência claras." />
        </div>
      </div>
    </section>
  </div>
);

const App: React.FC = () => {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname.split('/').pop();
      if (path === 'modalidades-ingles.html') setRoute('ingles');
      else if (path === 'modalidades-espanhol.html') setRoute('espanhol');
      else if (path === 'modalidades-italiano.html') setRoute('italiano');
      else if (path === 'modalidades-frances.html') setRoute('frances');
      else setRoute('home');
    };
    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  return (
    <div className="antialiased selection:bg-mindchat-orange selection:text-white">
      <Header />
      <main className="min-h-screen">
        {route === 'home' && <HomePage />}
        {route === 'ingles' && <EnglishPage />}
        {route === 'espanhol' && <SpanishPage />}
        {route === 'italiano' && <ItalianPage />}
        {route === 'frances' && <FrenchPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
