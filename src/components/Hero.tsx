import { ChevronDown, ExternalLink } from 'lucide-react';
import CTAButton from './CTAButton';

const quickLinks = [
  {
    label: 'Foto e Vídeo Chá Revelação',
    href: 'https://momentorevelacao.com.br/cha-revelacao/',
    color: 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-100',
  },
  {
    label: 'Fotografia de Casamento em SP',
    href: 'https://momentorevelacao.com.br/casamentos/',
    color: 'bg-white/15 hover:bg-white/25 text-white',
  },
  {
    label: 'Fotógrafo Festa de 15 Anos',
    href: 'https://momentorevelacao.com.br/festa-de-15-anos/',
    color: 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-100',
  },
  {
    label: 'Filmagem de Festas e Eventos',
    href: 'https://momentorevelacao.com.br/filmagem/',
    color: 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-100',
  },
  {
    label: 'Agência SEO em São Paulo',
    href: 'https://www.fernandocoutinho.com/sobre/',
    color: 'bg-blue-500/15 hover:bg-blue-500/25 text-blue-100',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/eventos-em-sp.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center pt-24 pb-16">
        <p className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-4 border border-amber-300/40 rounded-full px-4 py-1.5">
          Fotógrafo Revelação — São Paulo
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Capturamos os{' '}
          <span className="text-amber-300">Momentos</span>
          <br />
          que Você Nunca Vai{' '}
          <span className="italic font-light">Esquecer</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Especialistas em <strong className="text-white">Chá Revelação</strong>,{' '}
          <strong className="text-white">Casamentos</strong> e{' '}
          <strong className="text-white">Festa de 15 Anos</strong> em São Paulo.
          Fotos e vídeos profissionais que emocionam por toda a vida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <CTAButton text="Solicitar Orçamento Grátis" size="lg" />
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-base transition-colors"
          >
            Ver nossos serviços
            <ChevronDown size={18} />
          </a>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
            Acesse diretamente
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full backdrop-blur-sm transition-all duration-200 ${link.color}`}
              >
                {link.label}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
