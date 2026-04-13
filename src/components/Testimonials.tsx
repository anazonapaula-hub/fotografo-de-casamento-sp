import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Camila & Rafael',
    event: 'Casamento — Moema, SP',
    photo: 'https://images.pexels.com/photos/1408196/pexels-photo-1408196.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'Ficamos completamente apaixonados pelas fotos! A equipe foi super atenciosa e discreta durante a cerimônia. As fotos capturam exatamente a emoção que sentimos naquele dia. Super recomendamos!',
    stars: 5,
  },
  {
    name: 'Amanda Ferreira',
    event: 'Chá Revelação — Vila Madalena, SP',
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'O vídeo do chá revelação ficou LINDO! Toda a família chora cada vez que assiste. Eles capturaram cada detalhe, cada reação. Superou todas as nossas expectativas. Nota 10!',
    stars: 5,
  },
  {
    name: 'Isabela Rocha',
    event: 'Festa de 15 Anos — Tatuapé, SP',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'Minha festa de 15 anos foi um sonho e as fotos ficaram perfeitas! O fotógrafo deixou eu muito à vontade para posar. Cada foto é uma obra de arte. Amei cada detalhe!',
    stars: 5,
  },
  {
    name: 'Mariana & Lucas',
    event: 'Casamento — Brooklin, SP',
    photo: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'Profissionalismo impecável! Desde o planejamento até a entrega, tudo foi perfeito. O álbum de fotos é simplesmente deslumbrante. Levamos memórias para a vida inteira.',
    stars: 5,
  },
];

const stats = [
  { value: '500+', label: 'Eventos Realizados' },
  { value: '98%', label: 'Clientes Satisfeitos' },
  { value: '8+', label: 'Anos de Experiência' },
  { value: '4', label: 'Zonas de SP Atendidas' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a5c38] mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            A satisfação dos nossos clientes é o nosso maior prêmio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#faf8f5] rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote size={32} className="absolute top-5 right-5 text-[#1a5c38]/10" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#1a5c38]/20"
                />
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1a5c38] mb-2">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
