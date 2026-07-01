import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const pains = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Sem tempo livre',
    desc: 'Trabalha 12h por dia e mesmo assim não consegue dar conta de tudo.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Lucro baixo',
    desc: 'Fatura alto, mas no fim do mês o dinheiro simplesmente some.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Equipe desalinhada',
    desc: 'Funcionários que não vestem a camisa e precisam de supervisão constante.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'Gestão no achismo',
    desc: 'Sem indicadores, sem processos, sem previsibilidade de resultados.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'Dificuldade em contratar',
    desc: 'Não encontra bons profissionais ou perde os melhores para concorrência.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-13.5 13.5L3 13"/>
      </svg>
    ),
    title: 'Apagando incêndios',
    desc: 'O dia inteiro resolvendo problemas que nunca deveriam ter acontecido.',
  },
]

export default function Pains() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Isso soa familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Os sintomas de uma oficina<br />
            <span className="text-brand">sem método</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <AnimatedSection key={pain.title} delay={i * 0.08} variant="scaleIn">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                className="bg-white rounded-2xl p-8 border border-gray-100 h-full transition-all duration-300 hover:border-brand/20"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/5 text-brand flex items-center justify-center mb-5">
                  {pain.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{pain.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
