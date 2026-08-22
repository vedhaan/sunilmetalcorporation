import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

const materials = [
  {
    slug: 'aluminium', label: 'Aluminium Scrap', accent: '#9C9C9C',
    desc: 'Our core specialisation, from UBC to extrusion and sheet scrap.',
    icon: <path d="M8 28 L16 8 L24 28 M11.5 20 h9" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: 'copper', label: 'Copper Scrap', accent: '#B5502A',
    desc: 'Wire, cable and industrial copper scrap.',
    icon: <path d="M8 10 h16 M8 16 h16 M8 22 h16 M8 10 v12 M24 10 v12" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: 'lead', label: 'Lead Scrap', accent: '#5B6470',
    desc: 'Industrial and battery-grade lead scrap.',
    icon: <path d="M16 8 a8 8 0 1 1 -0.01 0 M16 14 v8 M12 18 h8" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: 'zinc', label: 'Zinc Scrap', accent: '#8A9096',
    desc: 'Die-cast and industrial zinc scrap.',
    icon: <path d="M9 9 h14 l-14 14 h14" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: 'stainless-steel', label: 'Stainless Steel Scrap', accent: '#6E7681',
    desc: 'Sheet, coil and fabrication scrap.',
    icon: <path d="M8 12 h16 v10 h-16 z M8 12 l4 -4 h8 l4 4" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: 'ingot', label: 'Ingot', accent: '#9C6B2E',
    desc: '97%, 98%, 98.5% and 99% purity grades.',
    icon: <path d="M9 13 h14 l-2 8 h-10 z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function Card({ m }) {
  return (
    <motion.div variants={item}>
      <MotionLink
        to={`/materials-we-deal-in#${m.slug}`}
        className="group relative block h-full bg-cream border border-ink/10 rounded-lg p-6 overflow-hidden"
        style={{ borderTopColor: m.accent, borderTopWidth: '3px' }}
        whileHover={{ y: -8, boxShadow: `0 16px 32px -12px ${m.accent}55` }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* soft accent wash that fades in on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at 30% 0%, ${m.accent}14, transparent 65%)` }}
        />

        <motion.div
          className="relative w-12 h-12 rounded-full flex items-center justify-center mb-5"
          style={{ backgroundColor: `${m.accent}1A` }}
          whileHover={{ scale: 1.12, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 12 }}
        >
          <svg viewBox="0 0 32 32" className="w-6 h-6" style={{ color: m.accent }}>
            <g stroke="currentColor">{m.icon}</g>
          </svg>
        </motion.div>

        <h3 className="relative font-display font-bold text-lg text-ink">{m.label}</h3>
        <p className="relative text-sm text-ink/60 mt-2 leading-relaxed">{m.desc}</p>

        <span
          className="relative inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
          style={{ color: m.accent }}
        >
          Learn more <span>→</span>
        </span>
      </MotionLink>
    </motion.div>
  )
}

export default function MaterialsSnapshot() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-3">
            What We Trade
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">
            Materials We Deal In
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {materials.map((m) => (
            <Card key={m.slug} m={m} />
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Link
            to="/materials-we-deal-in"
            className="inline-flex items-center gap-2 font-semibold text-ink border-2 border-ink rounded-full px-6 py-2.5 hover:bg-ink hover:text-cream transition-colors group"
          >
            View all materials
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}