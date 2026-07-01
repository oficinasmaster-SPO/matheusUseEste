import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'

function AnimatedNumber({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(target)
    const duration = 2000
    const stepTime = Math.max(Math.floor(duration / end), 15)
    const increment = Math.ceil(end / (duration / stepTime))

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  )
}

const metrics = [
  { value: '1800', suffix: '+', label: 'Oficinas aceleradas', desc: 'em todo o Brasil' },
  { value: '23', suffix: ' anos', label: 'De experiência', desc: 'no mercado automotivo' },
  { value: '1055', suffix: '+', label: 'Consultorias realizadas', desc: 'presenciais e online' },
]

export default function Results() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-brand font-semibold mb-4">
            Números reais
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Resultados que falam<br />
            <span className="text-brand">por si só</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.15} variant="scaleIn">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center hover:border-brand/30 transition-all duration-500"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand mb-3 tabular-nums">
                  <AnimatedNumber target={m.value} suffix={m.suffix} />
                </div>
                <div className="text-xl font-semibold mb-1">{m.label}</div>
                <div className="text-gray-500 text-sm">{m.desc}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
