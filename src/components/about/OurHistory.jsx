import { motion } from 'motion/react'

const milestones = [
  {
    year: '1985',
    title: 'Founded in Ahmedabad',
    desc: 'A simple focus: reliable, honest trading in ferrous and non-ferrous metal scrap.',
  },
  {
    year: 'Growth',
    title: 'Full Import-Export Operation',
    desc: 'Expanded across aluminium, copper, lead, zinc, nickel and stainless steel.',
  },
  {
    year: 'Membership',
    title: 'MRAI & ANMA Certified',
    desc: 'Backed by membership with India\u2019s leading metal recycling and trade associations.',
  },
  {
    year: 'Today',
    title: 'Two Dedicated Sites',
    desc: 'An office in Shahibaug and a processing factory in Odhav GIDC, serving buyers and suppliers across India and abroad.',
  },
]

const stickers = [
  { symbol: 'Al', top: '8%', left: '6%', size: 'w-14 h-14', rotate: -12, duration: 7, delay: 0 },
  { symbol: 'Cu', top: '18%', left: '85%', size: 'w-12 h-12', rotate: 10, duration: 8, delay: 0.6 },
  { symbol: 'Pb', top: '70%', left: '8%', size: 'w-11 h-11', rotate: 8, duration: 6.5, delay: 1.1 },
  { symbol: 'Zn', top: '82%', left: '86%', size: 'w-14 h-14', rotate: -8, duration: 7.5, delay: 0.4 },
  { symbol: 'Ni', top: '4%', left: '55%', size: 'w-10 h-10', rotate: 14, duration: 6, delay: 1.4 },
  { symbol: 'Fe', top: '92%', left: '48%', size: 'w-12 h-12', rotate: -10, duration: 8.5, delay: 0.9 },
]

function Sticker({ s }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`hidden md:flex absolute ${s.size} rounded-full border border-bronze-core/25 items-center justify-center bg-cream/40 backdrop-blur-[1px]`}
      style={{ top: s.top, left: s.left, rotate: s.rotate }}
      animate={{ y: [0, -14, 0], rotate: [s.rotate, s.rotate + 4, s.rotate] }}
      transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="font-mono text-xs font-semibold text-bronze-deep/50">{s.symbol}</span>
    </motion.div>
  )
}

export default function OurHistory() {
  return (
    <section
      className="relative bg-cream py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 12% 15%, rgba(234,201,138,0.28), transparent 42%),
          radial-gradient(circle at 88% 85%, rgba(181,80,42,0.12), transparent 48%),
          repeating-linear-gradient(45deg, rgba(110,68,25,0.025) 0px, rgba(110,68,25,0.025) 1px, transparent 1px, transparent 10px)
        `,
      }}
    >
      {stickers.map((s) => (
        <Sticker key={s.symbol} s={s} />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 md:mb-24"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Our History
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            A Simple Focus, Since 1985
          </h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Founded in 1985 in Ahmedabad, Gujarat, Sunil Metal Corporation
            began with a simple focus: reliable, honest trading in ferrous
            and non-ferrous metal scrap. Over four decades, that focus grew
            into a full import-export operation.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline, alternating above/below the spine */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-bronze-core/20" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-oxide origin-left"
          />

          <div className="grid grid-cols-4 gap-6">
            {milestones.map((m, i) => {
              const isAbove = i % 2 === 0
              return (
                <div key={m.year} className="relative flex flex-col items-center" style={{ minHeight: '260px' }}>
                  <motion.div
                    initial={{ opacity: 0, y: isAbove ? 16 : -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute w-full px-3 text-center ${isAbove ? 'bottom-[calc(50%+1.5rem)]' : 'top-[calc(50%+1.5rem)]'}`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wide text-oxide mb-1">{m.year}</p>
                    <h3 className="font-display font-bold text-ink text-sm leading-snug">{m.title}</h3>
                    <p className="text-xs text-ink/60 mt-1.5 leading-relaxed">{m.desc}</p>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.15, type: 'spring', stiffness: 300, damping: 15 }}
                    className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-oxide border-2 border-cream shadow-sm"
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline, own layout, not a hidden desktop feature */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-bronze-core/20" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-oxide origin-top"
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-oxide border-2 border-cream shadow-sm" />
                <p className="font-mono text-[10px] uppercase tracking-wide text-oxide mb-1">{m.year}</p>
                <h3 className="font-display font-bold text-ink text-base">{m.title}</h3>
                <p className="text-sm text-ink/60 mt-1.5 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}