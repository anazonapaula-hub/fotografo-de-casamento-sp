import { MapPin } from 'lucide-react';
import CTAButton from './CTAButton';

const zones = [
  {
    name: 'Zona Sul',
    color: 'border-emerald-400 bg-emerald-50',
    badge: 'bg-emerald-500 text-white',
    neighborhoods: [
      'Moema', 'Brooklin', 'Interlagos', 'Santo André', 'Campo Belo',
      'Jabaquara', 'Sacomã', 'Vila Mariana', 'Ipiranga', 'Cursino',
    ],
  },
  {
    name: 'Zona Norte',
    color: 'border-blue-400 bg-blue-50',
    badge: 'bg-blue-500 text-white',
    neighborhoods: [
      'Santana', 'Tucuruvi', 'Casa Verde', 'Mandaqui', 'Tremembé',
      'Jaçanã', 'Vila Maria', 'Penha', 'Água Fria', 'Brasilândia',
    ],
  },
  {
    name: 'Zona Oeste',
    color: 'border-amber-400 bg-amber-50',
    badge: 'bg-amber-500 text-white',
    neighborhoods: [
      'Pinheiros', 'Alto de Pinheiros', 'Perdizes', 'Lapa', 'Butantã',
      'Vila Madalena', 'Itaim Bibi', 'Jardins', 'Morumbi', 'Alphaville',
    ],
  },
  {
    name: 'Zona Leste',
    color: 'border-rose-400 bg-rose-50',
    badge: 'bg-rose-500 text-white',
    neighborhoods: [
      'Tatuapé', 'Penha', 'Vila Formosa', 'Itaquera', 'Guaianazes',
      'São Mateus', 'Cidade Tiradentes', 'Anchieta', 'São Miguel', 'Sapopemba',
    ],
  },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a5c38] mb-3">
            Cobertura em São Paulo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Atendemos Toda a Cidade de São Paulo
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Nossa equipe está preparada para atender em qualquer região da Grande São Paulo —
            da Zona Sul à Zona Norte, da Zona Leste à Zona Oeste, levamos qualidade até você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {zones.map((z) => (
            <div
              key={z.name}
              className={`rounded-2xl border-2 ${z.color} p-6 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-gray-600" />
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${z.badge}`}>
                  {z.name}
                </span>
              </div>
              <ul className="space-y-1.5">
                {z.neighborhoods.map((n) => (
                  <li key={n} className="text-sm text-gray-600 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1a5c38] to-[#0f3622] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Não encontrou sua região?
          </h3>
          <p className="text-white/70 mb-7 text-lg max-w-xl mx-auto">
            Atendemos também cidades da Grande São Paulo, interior e litoral.
            Entre em contato e verifique a disponibilidade para a sua localidade.
          </p>
          <CTAButton text="Verificar Disponibilidade na Minha Região" size="lg" />
        </div>
      </div>
    </section>
  );
}
