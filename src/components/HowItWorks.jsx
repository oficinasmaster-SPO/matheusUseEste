import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Analisamos a situação real da sua oficina: faturamento, margem, equipe, processos e gargalos.',
  },
  {
    num: '02',
    title: 'Método PPR®',
    desc: 'Você recebe o framework completo para integrar Processos, Pessoas e Resultado na sua operação.',
  },
  {
    num: '03',
    title: 'Implementação',
    desc: 'Passo a passo prático para aplicar cada pilar do método na realidade da sua oficina.',
  },
  {
    num: '04',
    title: 'Aceleração',
    desc: 'Sua oficina começa a operar com gestão profissional, gerando resultados previsíveis.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-gray-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Passo a passo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Como funciona
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/20 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-5xl font-extrabold text-brand/10 mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
