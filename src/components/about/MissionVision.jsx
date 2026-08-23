import { motion } from 'motion/react'

export default function MissionVision() {
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(234,201,138,0.08), transparent 45%), radial-gradient(circle at 80% 80%, rgba(181,80,42,0.1), transparent 45%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-shine/70 mb-3">
            What Drives Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
            Mission &amp; Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission — pulsing link between two nodes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden border border-cream/15 border-l-4 border-l-oxide rounded-xl p-8 md:p-10"
          >
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle, #B5502A, transparent 70%)' }}
            />

            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#B5502A" strokeOpacity="0.3" strokeWidth="1.5" />
              </svg>

              <div className="relative w-14 h-3.5 flex items-center">
                <span className="absolute left-0 w-3.5 h-3.5 rounded-full bg-bronze-shine shadow-[0_0_10px_2px_rgba(234,201,138,0.5)]" />
                <div className="absolute left-1.5 right-1.5 top-1/2 -translate-y-1/2 h-0.5 bg-cream/20" />
                <span className="absolute right-0 w-3.5 h-3.5 rounded-full bg-oxide shadow-[0_0_10px_2px_rgba(181,80,42,0.5)]" />
                <motion.span
                  className="absolute w-2.5 h-2.5 rounded-full bg-cream shadow-[0_0_8px_2px_rgba(250,246,239,0.6)]"
                  style={{ top: '50%', translateY: '-50%' }}
                  animate={{ left: ['2px', '48px', '2px'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>

            <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-oxide mb-3">
              Mission
            </p>
            <p className="relative font-display text-2xl md:text-3xl font-bold text-cream leading-snug">
              A Dependable Link
            </p>
            <p className="relative text-cream/60 mt-4 leading-relaxed">
              To be a dependable link between metal scrap suppliers and
              manufacturers, trading with integrity and full regulatory
              compliance.
            </p>
          </motion.div>

          {/* Vision — visible expanding pulse around a solid core */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden border border-cream/15 border-l-4 border-l-bronze-shine rounded-xl p-8 md:p-10"
          >
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle, #EAC98A, transparent 70%)' }}
            />

            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full border-2 border-bronze-shine"
                  initial={{ width: 14, height: 14, opacity: 0.9 }}
                  animate={{ width: 76, height: 76, opacity: 0 }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.9, ease: 'easeOut' }}
                />
              ))}
              <span className="w-4 h-4 rounded-full bg-bronze-shine shadow-[0_0_14px_4px_rgba(234,201,138,0.55)]" />
            </div>

            <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-shine mb-3">
              Vision
            </p>
            <p className="relative font-display text-2xl md:text-3xl font-bold text-cream leading-snug">
              Gujarat's Most Trusted Name
            </p>
            <p className="relative text-cream/60 mt-4 leading-relaxed">
              To grow as one of Gujarat's most trusted ferrous &amp;
              non-ferrous metal trading houses, supporting India's circular
              metal economy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}