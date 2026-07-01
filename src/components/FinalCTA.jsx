import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(217,4,41,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Sua oficina pode continuar<br />
            sobrevivendo...<br />
            <span className="text-brand">ou começar a crescer.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            O Método PPR® já transformou mais de 1.800 oficinas. A próxima pode
            ser a sua. Mas essa condição especial não vai durar para sempre.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <CTAButton size="xl" />
          <p className="text-sm text-gray-500 mt-4">
            12x de R$10,24 | Garantia de 7 dias
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
