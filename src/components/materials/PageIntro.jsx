import { motion } from 'motion/react'

export default function PageIntro() {
  return (
    <section className="bg-cream pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            What We Trade
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            Materials We Deal In
          </h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Sunil Metal Corporation buys, sells and processes ferrous and
            non-ferrous metal scrap across six core categories. Jump to any
            material below for accepted forms and to enquire directly.
          </p>
        </motion.div>
      </div>
    </section>
  )
}