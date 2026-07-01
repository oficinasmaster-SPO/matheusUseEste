import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const achievements = [
  '23 anos no mercado automotivo',
  'Mais de 1.800 oficinas aceleradas',
  'Criador do Método PPR®',
  'Mentor de empresários do setor',
  'Palestrante e consultor estratégico',
  'Fundador da Oficinas Master',
]

export default function About() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl font-extrabold text-brand">RM</span>
                    </div>
                    <p className="text-gray-text font-medium">Rafa Marrafon</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-extrabold">23+</div>
                <div className="text-sm opacity-90">anos de<br/>experiência</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
              Quem é
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
              Rafa Marrafon
            </h2>
            <p className="text-lg text-gray-text leading-relaxed mb-6">
              Há mais de duas décadas, Rafa Marrafon dedica sua carreira a
              transformar oficinas mecânicas em empresas lucrativas e
              organizadas. Criador do Método PPR®, já acelerou mais de 1.800
              oficinas em todo o Brasil.
            </p>
            <p className="text-lg text-gray-text leading-relaxed mb-8">
              Sua abordagem é direta, prática e baseada na realidade do dono de
              oficina. Sem teoria vazia. Sem promessas genéricas. Apenas um
              método validado que funciona.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5 5-5" stroke="#D90429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-dark">{a}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
