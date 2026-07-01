import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const pillars = [
  {
    letter: 'P',
    title: 'Processos',
    desc: 'Sistemas e fluxos que fazem a oficina funcionar sem depender exclusivamente do dono.',
    color: 'from-brand to-brand-dark',
  },
  {
    letter: 'P',
    title: 'Pessoas',
    desc: 'Contratação, treinamento e liderança para montar uma equipe que performa.',
    color: 'from-dark to-gray-700',
  },
  {
    letter: 'R',
    title: 'Resultado',
    desc: 'Indicadores, gestão financeira e estratégia para gerar lucro previsível.',
    color: 'from-brand to-brand-dark',
  },
]

export default function MetodoPPR() {
  return (
    <section id="metodo" className="py-24 lg:py-32 bg-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-brand font-semibold mb-4">
            Propriedade intelectual Oficinas Master
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6">
            Método PPR<span className="text-brand">®</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A fórmula que conecta os três pilares essenciais para transformar
            qualquer oficina em uma empresa lucrativa e escalável.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15} variant="scaleIn">
              <motion.div
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"
                  style={{ background: `linear-gradient(135deg, rgba(217,4,41,0.15), transparent)` }}
                />
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 h-full hover:border-brand/30 transition-all duration-500">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6`}>
                    <span className="text-3xl font-extrabold text-white">{p.letter}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.3}>
          <div className="flex items-center justify-center gap-4 flex-wrap text-2xl sm:text-3xl font-bold">
            <span className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
              Processos
            </span>
            <span className="text-brand text-4xl">+</span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
              Pessoas
            </span>
            <span className="text-brand text-4xl">=</span>
            <span className="bg-brand rounded-2xl px-6 py-3 text-white">
              Resultado
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
