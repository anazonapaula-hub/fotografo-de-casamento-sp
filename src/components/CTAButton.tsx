import { MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511964849934&text=Estou+no+site+%22Momento+Revelacao+e+gostaria+de+um+orcamento.+Podemos+conversar?';

interface CTAButtonProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CTAButton({
  text = 'Solicitar Orçamento no WhatsApp',
  className = '',
  size = 'md',
}: CTAButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 bg-[#1a5c38] hover:bg-[#145230] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${sizes[size]} ${className}`}
    >
      <MessageCircle size={size === 'lg' ? 22 : size === 'sm' ? 16 : 20} />
      {text}
    </a>
  );
}
