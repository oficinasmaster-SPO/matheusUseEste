import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import Countdown from './Countdown'

const stats = [
  { value: '1.800+', label: 'Oficinas aceleradas' },
  { value: '23', label: 'Anos de experiência' },
  { value: 'R$ Milhões', label: 'Faturados pelos clientes' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,4,41,0.04)_0%,_transparent_70%)]" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/2 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          <span className="text-sm font-medium text-brand">Vagas limitadas</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base uppercase tracking-[0.25em] text-gray-text font-medium mb-4"
        >
          Sessão Estratégica de Aceleração de Oficinas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          Descubra o método das oficinas que{' '}
          <span className="text-brand">mais crescem</span> no Brasil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Conheça o Método PPR®, responsável por acelerar mais de 1.800 oficinas
          mecânicas através da combinação entre{' '}
          <strong className="text-dark">Processos</strong>,{' '}
          <strong className="text-dark">Pessoas</strong> e{' '}
          <strong className="text-dark">Gestão</strong> para vender mais, lucrar mais
          e construir uma empresa que funciona sem depender do dono.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col items-center gap-8 mb-12"
        >
          <CTAButton size="xl" />
          <div className="flex items-center gap-2 text-sm text-gray-text">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM6 8l1.5 1.5L10 6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Por apenas 12x de R$10,24
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-dark tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-text mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
