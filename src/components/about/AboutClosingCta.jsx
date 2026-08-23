import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

function Chevrons() {
  return (
    <div className="flex flex-col items-center gap-1 mb-6" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.svg
          key={i}
          width="20"
          height="10"
          viewBox="0 0 20 10"
          animate={{ opacity: [0.15, 1, 0.15], y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
        >
          <path d="M1 1 L10 9 L19 1" fill="none" stroke="#EAC98A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      ))}
    </div>
  )
}

export default function AboutClosingCta() {
  return (
    <section
      className="relative bg-ink py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(234,201,138,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(234,201,138,0.05) 1px, transparent 1px),
          radial-gradient(circle at 50% 100%, rgba(234,201,138,0.08), transparent 55%)
        `,
        backgroundSize: '48px 48px, 48px 48px, 100% 100%',
      }}
    >
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-cream leading-tight">
            Want to Work With a Metal Trading Partner You Can Rely On?
          </h2>

          <div className="mt-10">
            <Chevrons />

            <MotionLink
              to="/contact-rfq"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-oxide hover:bg-bronze-shine hover:text-ink text-cream font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Get in Touch
              <span>→</span>
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}