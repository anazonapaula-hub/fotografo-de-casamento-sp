import CTAButton from './CTAButton';

export default function CTASection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: 'url(/momento-especial-fotografia-banner-2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-4">
          Vamos conversar?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Seu Evento Merece ser <br className="hidden sm:block" />
          Eternizado com Perfeição
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Entre em contato agora mesmo e receba um orçamento personalizado sem compromisso.
          Atendemos casamentos, chá revelação, festa de 15 anos e eventos em toda a Grande São Paulo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton text="Solicitar Orçamento Agora" size="lg" />
          <span className="text-white/50 text-sm">Resposta em até 2 horas</span>
        </div>
      </div>
    </section>
  );
}
