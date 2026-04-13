import { Camera, Instagram, Facebook, Youtube, MapPin, Phone, ExternalLink } from 'lucide-react';
import CTAButton from './CTAButton';

const services = [
  { label: 'Foto e Vídeo Chá Revelação', href: 'https://momentorevelacao.com.br/cha-revelacao/' },
  { label: 'Fotografia de Casamento', href: 'https://momentorevelacao.com.br/casamentos/' },
  { label: 'Festa de 15 Anos', href: 'https://momentorevelacao.com.br/festa-de-15-anos/' },
  { label: 'Filmagem de Eventos', href: 'https://momentorevelacao.com.br/filmagem/' },
];

const zones = ['Zona Sul', 'Zona Norte', 'Zona Oeste', 'Zona Leste', 'Grande São Paulo'];

export default function Footer() {
  return (
    <footer className="bg-[#0a2418] text-white">
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-[#1a5c38] rounded-full flex items-center justify-center">
                <Camera size={20} className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold">Fotógrafo</span>
                <span className="block text-xs font-medium tracking-widest uppercase text-[#1a5c38] text-emerald-400">
                  Revelação
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Especialistas em fotografia e filmagem de eventos em São Paulo. Transformamos momentos em memórias eternas.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#1a5c38] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#1a5c38] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={15} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#1a5c38] rounded-full flex items-center justify-center transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    {s.label}
                    <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Cobertura SP</h4>
            <ul className="space-y-3">
              {zones.map((z) => (
                <li key={z} className="flex items-center gap-2 text-white/50 text-sm">
                  <MapPin size={13} className="text-emerald-400 flex-shrink-0" />
                  {z}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="https://www.fernandocoutinho.com/sobre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/70 text-xs transition-colors flex items-center gap-1.5"
              >
                Agência SEO em São Paulo
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Contato</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone size={15} className="text-emerald-400 flex-shrink-0" />
                (11) 96484-9934
              </div>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                São Paulo, SP — Zona Sul, Norte, Leste e Oeste
              </div>
            </div>
            <CTAButton text="Chamar no WhatsApp" size="sm" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Fotógrafo Revelação — Momento Revelação. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Fotografia e Filmagem Profissional em São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
}
