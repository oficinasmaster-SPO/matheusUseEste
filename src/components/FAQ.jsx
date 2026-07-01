import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    q: 'A sessão funciona para oficinas pequenas?',
    a: 'Sim. O Método PPR® foi desenvolvido para oficinas de todos os tamanhos. Se você fatura acima de R$50 mil e quer crescer com método, a sessão é para você.',
  },
  {
    q: 'Preciso de conhecimento em gestão?',
    a: 'Não. O conteúdo é prático e direto, pensado para donos de oficina que não tiveram formação em administração. Você vai aprender fazendo.',
  },
  {
    q: 'Quanto tempo leva para ver resultado?',
    a: 'Nossos alunos relatam os primeiros resultados em 30 a 90 dias. A velocidade depende da sua dedicação em implementar o método.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento sem perguntas.',
  },
  {
    q: 'Como funciona o acesso?',
    a: 'Após a compra, você recebe acesso imediato à plataforma com todo o conteúdo da sessão estratégica, materiais complementares e ferramentas.',
  },
  {
    q: 'Posso parcelar?',
    a: 'Sim. O investimento pode ser parcelado em até 12x de R$10,24 no cartão de crédito ou R$98,87 à vista.',
  },
  {
    q: 'É diferente de outros cursos para oficinas?',
    a: 'A Sessão Estratégica não é um curso genérico. É um método validado em mais de 1.800 oficinas, criado por quem vive a realidade do setor há 23 anos.',
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <span className="text-base sm:text-lg font-semibold pr-8 group-hover:text-brand transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand/5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-gray-text leading-relaxed pb-6 pr-16">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gray-light">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Perguntas frequentes
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
