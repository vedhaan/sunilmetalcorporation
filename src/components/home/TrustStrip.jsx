import { motion } from 'motion/react'

const badges = [
  { eyebrow: 'Est.', code: '1985', sub: '40 Years in Metal Trade', rotate: '-rotate-2' },
  { eyebrow: 'Member', code: 'MRAI', sub: 'Material Recycling Assoc. of India', rotate: 'rotate-1' },
  { eyebrow: 'Member', code: 'ANMA', sub: 'All India Non-Ferrous Metal Exim Assoc.', rotate: '-rotate-1' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function Corners() {
  return (
    <>
      <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-bronze-core" />
      <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-bronze-core" />
      <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-bronze-core" />
      <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-bronze-core" />
    </>
  )
}

export default function TrustStrip() {
  return (
    <section
      className="relative bg-ink border-y border-bronze-deep/40"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(234,201,138,0.035) 0px, rgba(234,201,138,0.035) 1px, transparent 1px, transparent 10px)',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
        className="max-w-5xl mx-auto px-6 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
      >
        {badges.map((b) => (
          <motion.div
            key={b.code}
            variants={item}
            whileHover={{ rotate: 0 }}
            className={`relative border border-bronze-deep/60 bg-ink px-6 py-8 text-center transition-transform`}
          >
            <Corners />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bronze-shine/60">
              {b.eyebrow}
            </p>
            <p className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">
              {b.code}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-wide text-bronze-shine/60 mt-3 leading-relaxed">
              {b.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}