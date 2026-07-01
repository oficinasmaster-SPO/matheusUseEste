import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const testimonials = [
  {
    name: 'Carlos A.',
    role: 'Dono de oficina — SP',
    text: 'Em 6 meses, meu faturamento subiu 40% e finalmente consegui tirar férias sem o telefone tocar. O método PPR® mudou minha visão de negócio.',
    rating: 5,
  },
  {
    name: 'Roberto M.',
    role: 'Dono de oficina — MG',
    text: 'Eu achava que precisava trabalhar mais. Na verdade, eu precisava de método. Hoje minha equipe funciona sozinha e meu lucro dobrou.',
    rating: 5,
  },
  {
    name: 'André L.',
    role: 'Dono de oficina — PR',
    text: 'A sessão estratégica me abriu os olhos. Implementei os processos e em 90 dias já via resultado no caixa. Melhor investimento que fiz.',
    rating: 5,
  },
  {
    name: 'Marcos S.',
    role: 'Dono de oficina — RJ',
    text: 'Minha oficina faturava R$150 mil e eu não via a cor do dinheiro. Com o método PPR®, organizei a gestão e hoje lucro de verdade.',
    rating: 5,
  },
  {
    name: 'Fernando C.',
    role: 'Dono de oficina — SC',
    text: 'Contratei 3 mecânicos novos usando o processo que aprendi. Nenhum pediu demissão. Antes, eu não conseguia manter ninguém.',
    rating: 5,
  },
  {
    name: 'Paulo R.',
    role: 'Dono de oficina — GO',
    text: 'O Rafa entende a realidade do dono de oficina como ninguém. As estratégias são práticas e funcionam no dia seguinte.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#D90429">
          <path d="M8 1l2.09 4.26L15 6.27l-3.5 3.42L12.18 15 8 12.77 3.82 15l.68-5.31L1 6.27l4.91-.71L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-gray-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <AnimatedSection className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Quem já passou pela<br />
            <span className="text-brand">aceleração</span>
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-light to-transparent z-10" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
          }}
          className="flex gap-6 w-max"
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-80 sm:w-96 flex-shrink-0 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <Stars count={t.rating} />
              <p className="text-gray-text leading-relaxed mt-4 mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-text">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
