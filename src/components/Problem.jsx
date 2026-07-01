import AnimatedSection from './AnimatedSection'

export default function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-gray-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            O problema
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
            Você construiu uma oficina.<br />
            Mas a oficina{' '}
            <span className="text-brand">prendeu você.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6 text-lg text-gray-text leading-relaxed">
          <AnimatedSection delay={0.2}>
            <p>
              Você começou com um sonho. Trabalhou duro. Construiu uma equipe.
              Conquistou clientes. Mas em algum momento percebeu que o negócio
              que deveria te dar liberdade se tornou a sua maior prisão.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p>
              Você é o primeiro a chegar e o último a sair. Sem você,{' '}
              <strong className="text-dark">nada funciona</strong>. Os problemas
              se repetem. Os funcionários não rendem. O faturamento cresce, mas o
              lucro some. E toda vez que você tenta sair de férias, o telefone
              não para de tocar.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p>
              Você não tem um problema de esforço.{' '}
              <strong className="text-dark">Você tem um problema de método.</strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <p className="text-xl font-semibold text-dark border-l-4 border-brand pl-6 mt-8">
              As oficinas que mais crescem no Brasil não trabalham mais.
              Elas trabalham com um método que transforma esforço em resultado
              previsível.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
