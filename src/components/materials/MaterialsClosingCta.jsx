import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

export default function MaterialsClosingCta() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl px-8 py-12 md:px-14 md:py-14 text-center"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(234,201,138,0.15), transparent 45%),
              radial-gradient(circle at 90% 85%, rgba(181,80,42,0.25), transparent 50%),
              linear-gradient(135deg, #2A1B0E 0%, #4A2E14 100%)
            `,
          }}
        >
          <span className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-bronze-shine/40 rounded-tl" />
          <span className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-bronze-shine/40 rounded-br" />

          <h2 className="relative font-display text-2xl md:text-4xl font-bold text-cream leading-tight max-w-xl mx-auto">
            Have Scrap to Sell, or Need a Bulk Supply?
          </h2>
          <p className="relative mt-3 text-cream/60">
            Request a quote and we'll respond fast.
          </p>

          <MotionLink
            to="/contact-rfq"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 28px -8px rgba(181,80,42,0.6)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="relative inline-flex items-center gap-2 bg-oxide text-cream font-semibold px-7 py-3 rounded-full mt-8"
          >
            Request a Quote
            <span>→</span>
          </MotionLink>

          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wide text-bronze-shine/80 border border-cream/15 rounded-full px-3.5 py-1.5">
              Minimum Order: 5 MT
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wide text-bronze-shine/80 border border-cream/15 rounded-full px-3.5 py-1.5">
              Product Photos Shared on WhatsApp
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}