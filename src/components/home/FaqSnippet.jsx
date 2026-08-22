import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqs = [
  {
    q: 'What metals does Sunil Metal Corporation deal in?',
    a: 'Aluminium, copper, lead, zinc, nickel and stainless steel scrap.',
  },
  {
    q: 'Is Sunil Metal Corporation a certified recycler?',
    a: 'Yes — we are a certified MRAI Member and ANMA Member.',
  },
  {
    q: 'Does Sunil Metal Corporation import and export scrap?',
    a: 'Yes, we are importers and exporters of ferrous and non-ferrous metal scrap.',
  },
]

function FaqRow({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`border-b border-ink/10 rounded-lg transition-colors duration-300 ${
        isOpen ? 'bg-bronze-shine/10' : 'hover:bg-ink/[0.02]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 px-5 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg md:text-xl font-bold text-ink">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full border border-bronze-core/50 flex items-center justify-center text-bronze-deep text-lg leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-6 text-ink/70 leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSnippet() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 0%, rgba(234,201,138,0.3), transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(181,80,42,0.1), transparent 45%),
          linear-gradient(180deg, #FAF6EF 0%, #F5EDE0 100%)
        `,
      }}
    >
      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-cream/60 backdrop-blur-sm border border-ink/10 rounded-xl px-2 shadow-sm"
        >
          {faqs.map((faq, i) => (
            <FaqRow
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          }),
        }}
      />
    </section>
  )
}