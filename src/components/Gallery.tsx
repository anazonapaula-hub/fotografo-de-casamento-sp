import CTAButton from './CTAButton';

const photos = [
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
    label: 'Casamento',
    tall: true,
  },
  {
    src: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    label: 'Chá Revelação',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    label: 'Cerimônia',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
    label: 'Festa de 15 Anos',
    tall: true,
  },
  {
    src: 'https://images.pexels.com/photos/2072182/pexels-photo-2072182.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    label: 'Debutante',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    label: 'Eventos',
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a5c38] mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Cada Foto Conta Uma História
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            Uma seleção dos nossos trabalhos mais recentes em São Paulo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${p.tall ? 'row-span-2' : ''}`}
            >
              <img
                src={p.src}
                alt={p.label}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${p.tall ? 'h-full min-h-[320px]' : 'h-44 md:h-56'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton text="Ver Portfólio Completo e Solicitar Orçamento" size="lg" />
        </div>
      </div>
    </section>
  );
}
