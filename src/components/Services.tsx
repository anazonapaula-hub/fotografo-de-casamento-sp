import { Heart, Baby, Star, Video, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const services = [
  {
    icon: Baby,
    tag: 'Chá Revelação',
    title: 'Foto e Vídeo de Chá Revelação em São Paulo',
    href: 'https://momentorevelacao.com.br/cha-revelacao/',
    description:
      'O momento em que vocês descobrem o sexo do bebê é único e merece ser registrado com toda a emoção que ele carrega. Nossa equipe especializada captura cada reação, cada lágrima e cada abraço desse momento tão especial — desde a revelação da fumaça até os cumprimentos dos convidados.',
    highlights: [
      'Cobertura fotográfica completa',
      'Vídeo cinematográfico editado',
      'Entrega em até 30 dias',
      'Álbum digital incluso',
    ],
    image:
      'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    color: 'from-pink-50 to-rose-50',
    badge: 'bg-pink-100 text-pink-700',
    accent: 'text-pink-600',
  },
  {
    icon: Heart,
    tag: 'Casamentos',
    title: 'Fotografia e Filmagem de Casamento em São Paulo',
    href: 'https://momentorevelacao.com.br/casamentos/',
    description:
      'Seu casamento é o dia mais importante da sua vida. Cada detalhe, cada olhar, cada momento precisa ser eternizado com excelência. Com equipamentos profissionais de última geração e olhar artístico apurado, transformamos seu grande dia em imagens e vídeos que emocionarão por gerações.',
    highlights: [
      'Dois fotógrafos na cerimônia',
      'Edição profissional em 4K',
      'Drone aéreo disponível',
      'Ensaio de noivos incluso',
    ],
    image: '/momento-especial-fotografia-banner-2.jpg',
    color: 'from-amber-50 to-yellow-50',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'text-amber-600',
  },
  {
    icon: Star,
    tag: 'Festa de 15 Anos',
    title: 'Fotógrafo de Festa de 15 Anos em São Paulo',
    href: 'https://momentorevelacao.com.br/festa-de-15-anos/',
    description:
      'A festa de 15 anos é a celebração da juventude, dos sonhos e da transformação. Nossa equipe sabe como capturar a energia, a emoção e toda a produção deste evento especial — da valsa emocionante aos momentos divertidos na pista de dança, cada instante vira memória.',
    highlights: [
      'Cobertura da preparação ao fim da festa',
      'Book externo da debutante',
      'Vídeo com trilha personalizada',
      'Reel para redes sociais',
    ],
    image: '/fotografo-de-festa-de-15-anos.jpg',
    color: 'from-emerald-50 to-green-50',
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'text-emerald-600',
  },
  {
    icon: Video,
    tag: 'Filmagem de Eventos',
    title: 'Filmagem de Festas e Eventos em São Paulo',
    href: 'https://momentorevelacao.com.br/filmagem/',
    description:
      'Além das celebrações familiares, oferecemos filmagem profissional para todo tipo de evento: formaturas, aniversários corporativos, confraternizações, batizados e muito mais. Produção cinematográfica com entrega de vídeo editado, pronto para compartilhar.',
    highlights: [
      'Equipamentos cinema profissional',
      'Cobertura multiângle',
      'Edição com motion graphics',
      'Entrega em formatos digitais',
    ],
    image:
      'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    color: 'from-blue-50 to-sky-50',
    badge: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-600',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a5c38] mb-3">
            Nossos Serviços
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Fotografia e Filmagem <br className="hidden sm:block" />
            Profissional em São Paulo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Atendemos todas as regiões de São Paulo com o mesmo padrão de qualidade e dedicação.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={s.tag}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br ${s.color} border border-gray-100`}
              >
                <div className="lg:w-1/2 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-72 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${s.badge}`}>
                      <Icon size={13} />
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className={`w-1.5 h-1.5 rounded-full bg-current ${s.accent} flex-shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <CTAButton text="Pedir Orçamento" size="md" />
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${s.accent} hover:underline transition-colors`}
                    >
                      Ver mais detalhes
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
