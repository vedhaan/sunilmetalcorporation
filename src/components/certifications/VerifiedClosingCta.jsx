import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { closingCta } from '../../data/closingCta'

const MotionLink = motion.create(Link)

export default function VerifiedClosingCta() {
  return (
    <section
      className="relative bg-ink py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(234,201,138,0.1), transparent 55%),
          linear-gradient(rgba(234,201,138,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(234,201,138,0.03) 1px, transparent 1px)
        `,
        backgroundSize: 'auto, 40px 40px, 40px 40px',
      }}
    >
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* stamp: rotating ring text + center checkmark, lands with an impact scale */}
        <motion.div
          initial={{ opacity: 0, scale: 1.4, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative w-28 h-28 mx-auto mb-8"
        >
          <motion.svg
            viewBox="0 0 140 140"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <defs>
              <path id="sealRing" d="M70,70 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
            </defs>
            <circle cx="70" cy="70" r="58" fill="none" stroke="#EAC98A" strokeOpacity="0.4" strokeWidth="1" />
            <text fontSize="7" letterSpacing="2" fill="#EAC98A" fontFamily="'IBM Plex Mono', monospace">
              <textPath href="#sealRing">SUNIL METAL CORPORATION • VERIFIED PARTNER • </textPath>
            </text>
          </motion.svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-bronze-shine flex items-center justify-center bg-ink">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-bronze-shine" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13 L10 18 L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight">
            {closingCta.heading}
          </h2>
          <p className="mt-5 text-lg text-cream/60">
            {closingCta.subtext}
          </p>

          <MotionLink
            to="/contact-rfq"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-oxide hover:bg-bronze-shine hover:text-ink text-cream font-semibold px-8 py-3.5 rounded-full transition-colors mt-9"
          >
            Get in Touch
            <span>→</span>
          </MotionLink>

          {/* signature line, closing the document motif */}
          <div className="flex items-center justify-center gap-3 mt-10 opacity-60">
            <span className="w-16 h-px border-t border-dashed border-cream/30" />
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/50">
              Trading Since 1985
            </p>
            <span className="w-16 h-px border-t border-dashed border-cream/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}