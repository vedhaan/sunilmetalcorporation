import { motion } from 'motion/react'

const certifications = [
  {
    code: 'MRAI',
    name: 'Material Recycling Association of India',
    desc: 'The apex national body representing India\u2019s recycling industry — MRAI sets standards and advocates for the metal recycling sector nationwide.',
    image: '/certificates/mrai-certificate.jpg',
  },
  {
    code: 'ANMA',
    name: 'All India Non-Ferrous Metal Exim Association',
    desc: 'Representing India\u2019s non-ferrous metals recycling and trading sector, with a focus on import-export standards and industry advocacy.',
    image: '/certificates/anma-certificate.jpg',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function CertCard({ c }) {
  return (
    <motion.div variants={item} className="group relative">
      {/* ambient glow behind the frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle, #EAC98A, transparent 70%)' }}
      />

      <motion.div
        whileHover={{ rotate: -0.6, scale: 1.015, y: -6 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="relative bg-cream border border-bronze-core/30 rounded-2xl p-2.5 shadow-md group-hover:shadow-2xl transition-shadow duration-500"
      >
        {/* inner double-border mat, like a real certificate frame */}
        <div className="relative border border-bronze-core/25 rounded-xl p-2">
          <div className="relative h-64 sm:h-80 md:h-96 bg-ink/[0.03] border-2 border-bronze-deep/20 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={c.image}
              alt={`${c.name} certificate`}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <a
            href={c.image}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-2 rounded-lg flex items-center justify-center bg-ink/0 group-hover:bg-ink/45 transition-colors duration-300"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs uppercase tracking-wide text-cream border border-cream/60 rounded-full px-4 py-2">
              View Full Certificate ↗
            </span>
          </a>
        </div>

        {/* floating seal badge, overlapping the frame corner */}
        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-bronze-shine to-bronze-core border-4 border-cream shadow-lg flex items-center justify-center">
          <span className="font-display font-bold text-sm text-ink">{c.code}</span>
        </div>
      </motion.div>

      <div className="mt-8 text-center px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-oxide">
          Certified Member
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mt-2 leading-snug">
          {c.name}
        </h3>
        <div className="w-10 h-0.5 bg-oxide mx-auto mt-4 mb-4" />
        <p className="text-ink/60 leading-relaxed max-w-md mx-auto">
          {c.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function CertificationsSection() {
  return (
    <section
      className="relative bg-cream pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 10%, rgba(234,201,138,0.22), transparent 45%),
          radial-gradient(circle at 85% 90%, rgba(181,80,42,0.1), transparent 50%),
          repeating-linear-gradient(45deg, rgba(110,68,25,0.025) 0px, rgba(110,68,25,0.025) 1px, transparent 1px, transparent 10px)
        `,
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Credentials
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            Our Certifications &amp; Memberships
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto items-start"
        >
          {certifications.map((c) => (
            <CertCard key={c.code} c={c} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}