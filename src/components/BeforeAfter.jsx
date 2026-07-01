import AnimatedSection from './AnimatedSection'

const comparisons = [
  { before: 'Trabalha 12h por dia', after: 'Opera com processos claros' },
  { before: 'Fatura alto mas não lucra', after: 'Margem de lucro controlada' },
  { before: 'Equipe desalinhada', after: 'Time engajado e produtivo' },
  { before: 'Gestão no achismo', after: 'Decisões baseadas em dados' },
  { before: 'Depende do dono para tudo', after: 'Empresa funciona sozinha' },
  { before: 'Apagando incêndios', after: 'Crescimento previsível' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 lg:py-32 bg-gray-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Transformação
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Antes <span className="text-gray-text font-normal">vs</span>{' '}
            <span className="text-brand">Depois</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection variant="slideLeft">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-dark text-white px-8 py-5">
                <h3 className="text-lg font-bold">Oficina Comum</h3>
              </div>
              <div className="p-8 space-y-4">
                {comparisons.map((c) => (
                  <div key={c.before} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="#D90429" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-text text-sm">{c.before}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="bg-white rounded-2xl border-2 border-brand/20 overflow-hidden shadow-lg shadow-brand/5">
              <div className="bg-brand text-white px-8 py-5">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  Oficina Acelerada
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">PPR®</span>
                </h3>
              </div>
              <div className="p-8 space-y-4">
                {comparisons.map((c) => (
                  <div key={c.after} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-dark text-sm font-medium">{c.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
