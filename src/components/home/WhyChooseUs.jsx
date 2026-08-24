import { motion } from 'motion/react'

const reasons = [
  {
    n: '01',
    title: '40 Years in Metal Trading',
    desc: 'Established in 1985 — four decades of continuous operation in ferrous and non-ferrous metal scrap.',
  },
  {
    n: '02',
    title: 'Certified & Compliant',
    desc: 'Certified member of MRAI and ANMA, India\u2019s national metal recycling and trade bodies.',
  },
  {
    n: '03',
    title: 'Two Dedicated Sites in Ahmedabad',
    desc: 'A dedicated office in Shahibaug and a processing factory in Odhav GIDC, both purpose-built for the trade.',
  },
  {
    n: '04',
    title: 'Import-Export Capability',
    desc: 'Importers of ferrous and non-ferrous metal scrap, serving buyers and suppliers across borders.',
  },
  {
    n: '05',
    title: 'A Family-Run Partnership',
    desc: 'Direct access to decision-makers — Suresh Baheti, Manoj Baheti and Sunil Baheti — not a call centre.',
  },
  {
    n: '06',
    title: 'Fast, Transparent RFQs',
    desc: 'Transparent pricing and a fast turnaround from enquiry to quote.',
  },
]

function Row({ r }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start py-8 md:py-10 pl-5 border-t border-cream/10 first:border-t-0"
    >
      <span className="absolute left-0 top-8 md:top-10 bottom-0 w-0.5 bg-oxide scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-bold text-4xl md:text-6xl text-bronze-shine/25 group-hover:text-bronze-shine/60 transition-colors duration-300 leading-none tabular-nums"
      >
        {r.n}
      </motion.span>

      <div className="pl-4 md:pl-0">
        <h3 className="font-display text-xl md:text-2xl font-bold text-cream">
          {r.title}
        </h3>
        <p className="text-cream/60 mt-2 max-w-xl leading-relaxed">
          {r.desc}
        </p>
      </div>
    </motion.div>
  )
}

function AtAGlance() {
  return (
    <div className="sticky top-28 border border-cream/15 rounded-lg p-6">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-bronze-shine/70 mb-5">
        SMC at a Glance
      </p>

      <div className="grid grid-cols-2 gap-5 mb-6">
        <div>
          <p className="font-display text-2xl font-bold text-cream">1985</p>
          <p className="text-[11px] text-cream/50 mt-0.5">Founded</p>
        </div>
        <div>
          <p className="font-display text-2xl font-bold text-cream">40+</p>
          <p className="text-[11px] text-cream/50 mt-0.5">Years Trading</p>
        </div>
      </div>

      <div className="border-t border-cream/10 pt-5 space-y-4">
        <div>
          <p className="text-xs font-semibold text-bronze-shine/80">Office</p>
          <p className="text-xs text-cream/50 mt-0.5">Shahibaug, Ahmedabad</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-bronze-shine/80">Factory</p>
          <p className="text-xs text-cream/50 mt-0.5">Odhav GIDC, Ahmedabad</p>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-5 pt-5 flex gap-3">
        <span className="font-mono text-[10px] uppercase tracking-wide text-cream/60 border border-cream/20 rounded-full px-3 py-1">
          MRAI Member
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-cream/60 border border-cream/20 rounded-full px-3 py-1">
          ANMA Member
        </span>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_280px] gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-shine/70 mb-3">
              Why SMC
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              Why Buyers &amp; Suppliers Choose Us
            </h2>
          </motion.div>

          <div>
            {reasons.map((r) => (
              <Row key={r.n} r={r} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <AtAGlance />
        </div>
      </div>
    </section>
  )
}