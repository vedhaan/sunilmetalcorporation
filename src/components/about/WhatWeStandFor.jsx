import { motion } from 'motion/react'

const values = [
  {
    letter: 'I',
    tag: '01',
    title: 'Integrity',
    desc: 'Transparent weighing, grading and pricing on every transaction.',
  },
  {
    letter: 'C',
    tag: '02',
    title: 'Compliance',
    desc: 'Held to MRAI and ANMA member standards, without exception.',
  },
  {
    letter: 'S',
    tag: '03',
    title: 'Sustainability',
    desc: 'Supporting metal recycling and resource recovery at every stage.',
  },
  {
    letter: 'R',
    tag: '04',
    title: 'Relationships',
    desc: 'Four decades of repeat business, built on trust.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ValueCard({ v }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6, borderColor: '#B5502A' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative border-2 border-ink/15 rounded-xl px-8 py-10 overflow-hidden bg-cream"
    >
      <span
        aria-hidden="true"
        className="absolute -top-6 -left-2 font-display font-bold text-bronze-core/15 text-[8rem] leading-none select-none"
      >
        {v.letter}
      </span>

      <span className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.15em] text-bronze-deep border border-bronze-core/40 rounded-full px-2.5 py-1">
        {v.tag}
      </span>

      <div className="relative">
        <h3 className="font-display text-xl md:text-2xl font-bold text-ink">
          {v.title}
        </h3>
        <div className="w-8 h-0.5 bg-oxide mt-3 mb-4" />
        <p className="text-ink/60 leading-relaxed max-w-xs">
          {v.desc}
        </p>
        <span className="inline-block mt-5 font-mono text-[10px] uppercase tracking-wide text-oxide border border-oxide/40 rounded-full px-3 py-1">
          {v.title}
        </span>
      </div>
    </motion.div>
  )
}

export default function WhatWeStandFor() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Our Values
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-ink leading-tight">
            What We Stand For
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {values.map((v) => (
            <ValueCard key={v.letter} v={v} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}