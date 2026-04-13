import { Award, Clock, Camera, Film, Users, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    desc: 'Mais de 500 eventos fotografados em São Paulo com altíssimo nível de satisfação.',
  },
  {
    icon: Camera,
    title: 'Equipamentos Profissionais',
    desc: 'Câmeras Full Frame, lentes premium, iluminação profissional e drones para tomadas aéreas.',
  },
  {
    icon: Film,
    title: 'Edição Cinematográfica',
    desc: 'Edição de vídeo em 4K com color grading profissional e trilha sonora personalizada.',
  },
  {
    icon: Clock,
    title: 'Entrega no Prazo',
    desc: 'Cumprimos rigorosamente os prazos combinados. Você recebe tudo dentro do acordado.',
  },
  {
    icon: Users,
    title: 'Equipe Dedicada',
    desc: 'Equipe multidisciplinar de fotógrafos e videomakers para cobrir cada ângulo do seu evento.',
  },
  {
    icon: ThumbsUp,
    title: 'Atendimento Personalizado',
    desc: 'Reunião de planejamento gratuita para entender o seu estilo e as expectativas do evento.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0f3622] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 70% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
            Por que nos escolher
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Qualidade que Fala <br className="hidden sm:block" />
            por Si Mesma
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Não somos apenas fotógrafos — somos contadores de histórias visuais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-amber-300/15 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-amber-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
