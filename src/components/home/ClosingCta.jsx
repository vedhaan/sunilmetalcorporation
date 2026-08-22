import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ClosingCta() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(234,201,138,0.15), transparent 50%),
          radial-gradient(circle at 85% 80%, rgba(181,80,42,0.25), transparent 55%),
          linear-gradient(135deg, #2A1B0E 0%, #3A2410 55%, #6E4419 130%)
        `,
      }}
    >
      {/* faint echo of the Hero's circular-economy rings, closing the loop */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] opacity-[0.08]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#EAC98A" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#EAC98A" strokeWidth="1" strokeDasharray="4 8" />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-32 -bottom-32 w-[420px] h-[420px] opacity-[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#EAC98A" strokeWidth="1" strokeDasharray="2 10" />
      </motion.svg>

      {/* corner brackets echoing the Trust Strip's hallmark-stamp language */}
      <span className="hidden md:block absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-bronze-shine/30" />
      <span className="hidden md:block absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-bronze-shine/30" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        <motion.p variants={item} className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-shine/70 mb-6">
          Get Started
        </motion.p>

        <motion.h2 variants={item} className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
          Have scrap to sell, or need a bulk supply of
          aluminium or metal scrap?
        </motion.h2>

        <motion.p variants={item} className="mt-5 text-xl md:text-2xl font-display font-semibold text-bronze-shine">
          Get a quote in minutes.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MotionLink
            to="/contact-rfq"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-oxide hover:bg-bronze-shine hover:text-ink text-cream font-semibold px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto"
          >
            Request a Quote
          </MotionLink>
          <motion.a
            href="https://wa.me/919824086604?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20metal%20scrap."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-cream/40 text-cream hover:bg-cream/10 font-semibold px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}