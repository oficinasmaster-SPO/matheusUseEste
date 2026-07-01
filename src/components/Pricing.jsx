import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'
import Countdown from './Countdown'

const includes = [
  'Acesso completo à Sessão Estratégica',
  'Método PPR® detalhado',
  'GPS de Vendas para oficinas',
  'Planilhas e ferramentas de gestão',
  'Modelos de precificação',
  'Framework de contratação',
  'Acesso por 12 meses',
  'Garantia de 7 dias',
]

export default function Pricing() {
  return (
    <section id="preco" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Investimento
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Quanto vale transformar<br />
            <span className="text-brand">sua oficina?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="scaleIn" delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl border-2 border-brand/20 p-10 sm:p-14 shadow-xl shadow-brand/5 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-dark to-brand" />

            <div className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-brand uppercase tracking-wider">
                Oferta por tempo limitado
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Sessão Estratégica de<br />Aceleração de Oficinas
            </h3>

            <div className="mb-2">
              <span className="text-gray-text line-through text-lg">De R$497,00</span>
            </div>

            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-lg text-gray-text">12x de</span>
              <span className="text-6xl sm:text-7xl font-extrabold text-brand">
                R$10
              </span>
              <span className="text-3xl font-extrabold text-brand">,24</span>
            </div>

            <p className="text-gray-text mb-10">
              ou <strong className="text-dark">R$98,87</strong> à vista
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto mb-10">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5 5-5" stroke="#D90429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-dark">{item}</span>
                </div>
              ))}
            </div>

            <CTAButton size="xl" className="w-full sm:w-auto" />

            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-text">
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1a6 6 0 100 12A6 6 0 007 1zM5.5 7l1.5 1.5L9.5 6" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Compra segura
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="4" width="12" height="8" rx="1.5" stroke="#555" strokeWidth="1.2"/>
                  <path d="M4 4V3a3 3 0 016 0v1" stroke="#555" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Dados protegidos
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5l3.5-.5L7 1z" stroke="#555" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                7 dias de garantia
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Countdown />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
