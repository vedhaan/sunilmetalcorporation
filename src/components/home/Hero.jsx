import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

const steps = [
  { n: '01', label: 'Scrap Sourced', pos: { top: '4%', left: '50%' } },
  { n: '02', label: 'Sorted & Graded', pos: { top: '50%', left: '94%' } },
  { n: '03', label: 'Processed', pos: { top: '96%', left: '50%' } },
  { n: '04', label: 'Secondary Ingot', pos: { top: '50%', left: '6%' } },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(234,201,138,0.08), transparent 45%), radial-gradient(circle at 80% 80%, rgba(181,80,42,0.1), transparent 45%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <motion.p variants={item} className="font-mono text-xs tracking-[0.2em] uppercase text-bronze-shine/80 mb-5">
            SUNIL METAL CORPORATION
          </motion.p>

          <motion.h1 variants={item} className="font-display text-4xl md:text-6xl font-bold text-cream leading-[1.05] tracking-tight">
            Aluminium &amp; Metal Scrap Dealers, Trusted{' '}
            <span className="text-bronze-shine underline decoration-oxide decoration-4 underline-offset-4">
              Since 1985
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-cream/60 max-w-xl">
            Sunil Metal Corporation buys, sells and processes ferrous and
            non-ferrous metal scrap — aluminium, copper, lead, zinc, and
            stainless steel — as an MRAI Member and ANMA Member.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <MotionLink
              to="/contact-rfq"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-oxide hover:bg-bronze-shine hover:text-ink text-cream font-semibold px-8 py-3 rounded transition-colors"
            >
              Request a Quote
            </MotionLink>
            <motion.a
              href="https://wa.me/919824086604?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20metal%20scrap."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-cream/30 text-cream hover:bg-cream/10 font-semibold px-8 py-3 rounded transition-colors"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-wide text-bronze-shine/70">
            <span>MRAI Member</span>
            <span className="text-bronze-deep">•</span>
            <span>ANMA Member</span>
            <span className="text-bronze-deep">•</span>
            <span>40 Years in Trade</span>
          </motion.div>
        </div>

        <div className="hidden lg:block relative w-full aspect-square max-w-md mx-auto">
          <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full">
            <defs>
              <marker id="flowArrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto-start-reverse">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#EAC98A" />
              </marker>
            </defs>
            {[
              'M160 34 A126 126 0 0 1 286 160',
              'M286 160 A126 126 0 0 1 160 286',
              'M160 286 A126 126 0 0 1 34 160',
              'M34 160 A126 126 0 0 1 160 34',
            ].map((d, i) => (
              <motion.path
                key={d}
                d={d}
                fill="none"
                stroke="#EAC98A"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeDasharray="2 6"
                strokeLinecap="round"
                markerEnd="url(#flowArrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 + i * 0.25, ease: 'easeInOut' }}
              />
            ))}

            <motion.path
              d="M160 132 A28 28 0 1 1 132 160"
              fill="none" stroke="#B5502A" strokeWidth="2" markerEnd="url(#flowArrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            />
            <motion.path
              d="M160 188 A28 28 0 1 1 188 160"
              fill="none" stroke="#B5502A" strokeWidth="2" markerEnd="url(#flowArrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.85 }}
            />
          </svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-9 text-center font-mono text-[9px] uppercase tracking-wide text-bronze-shine/70 w-28"
          >
            Circular Metal Trade
          </motion.p>

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              style={{ top: s.pos.top, left: s.pos.left }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.25 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 bg-ink border border-bronze-shine/30 rounded-lg shadow-lg px-3 py-2 w-32 text-center"
            >
              <p className="font-mono text-[10px] text-bronze-shine">{s.n}</p>
              <p className="text-xs font-semibold text-cream leading-tight mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}