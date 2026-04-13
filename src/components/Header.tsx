import { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import CTAButton from './CTAButton';

const navLinks = [
  { label: 'Chá Revelação', href: 'https://momentorevelacao.com.br/cha-revelacao/' },
  { label: 'Casamentos', href: 'https://momentorevelacao.com.br/casamentos/' },
  { label: 'Festa de 15 Anos', href: 'https://momentorevelacao.com.br/festa-de-15-anos/' },
  { label: 'Filmagem de Eventos', href: 'https://momentorevelacao.com.br/filmagem/' },
  { label: 'Cobertura SP', href: '#cobertura' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'bg-[#1a5c38]' : 'bg-white/20 backdrop-blur-sm'}`}>
            <Camera size={18} className={scrolled ? 'text-white' : 'text-white'} />
          </div>
          <div className="leading-tight">
            <span className={`block text-base font-bold tracking-tight transition-colors ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
              Fotógrafo
            </span>
            <span className={`block text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-[#1a5c38]' : 'text-white/80'}`}>
              Revelação
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-sm font-medium transition-colors hover:text-[#1a5c38] ${scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}
            >
              {l.label}
            </a>
          ))}
          <CTAButton text="Orçamento" size="sm" />
        </nav>

        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 px-5 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 mb-5">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-800 font-medium hover:text-[#1a5c38] transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <CTAButton size="md" className="w-full justify-center" />
        </div>
      )}
    </header>
  );
}
