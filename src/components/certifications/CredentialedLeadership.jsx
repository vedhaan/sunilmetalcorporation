import { motion } from 'motion/react'
import { partners } from '../../data/partners'

const accents = ['#EAC98A', '#9C6B2E', '#B5502A']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function PartnerCard({ p, accent }) {
  return (
    <motion.div variants={item} className="group relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
      />

      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="relative bg-cream border border-bronze-core/25 rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-500"
      >
        {/* colored top bar, unique per partner */}
        <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${accent}, #B5502A)` }} />

        <div className="p-2.5">
          <div className="relative border border-bronze-core/25 rounded-xl p-2">
            <div className="aspect-[4/5] bg-ink/5 border-2 border-bronze-deep/20 rounded-lg overflow-hidden">
              <img
                src={p.photo}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-5 right-5 w-14 h-14 rounded-full border-4 border-cream shadow-lg flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${accent}, #B5502A)` }}
        >
          <span className="font-display font-bold text-xs text-cream">{p.initials}</span>
        </div>

        <div className="px-6 pb-7 pt-1 text-center">
          <span
            aria-hidden="true"
            className="font-display font-bold text-5xl leading-none block mb-1"
            style={{ color: `${accent}55` }}
          >
            "
          </span>
          <h3 className="font-display text-lg font-bold text-ink -mt-3">{p.name}</h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: accent }}>
            {p.role} &middot; Partner, SMC
          </p>
          <div className="w-8 h-0.5 mx-auto mt-3 mb-3" style={{ backgroundColor: accent }} />
          <p className="text-sm text-ink/60 leading-relaxed">{p.bio}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CredentialedLeadership() {
  return (
    <section
      className="relative bg-ink py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 10%, rgba(234,201,138,0.1), transparent 45%),
          radial-gradient(circle at 85% 90%, rgba(181,80,42,0.14), transparent 50%),
          linear-gradient(rgba(234,201,138,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(234,201,138,0.04) 1px, transparent 1px)
        `,
        backgroundSize: 'auto, auto, 40px 40px, 40px 40px',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-shine/70 mb-4">
            Leadership
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
            The People Behind Our Credentials
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {partners.map((p, i) => (
            <PartnerCard key={p.name} p={p} accent={accents[i]} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}