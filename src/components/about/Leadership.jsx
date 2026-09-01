import { motion } from 'motion/react'

const partners = [
  {
    name: 'Suresh Baheti',
    role: 'Owner',
    photo: '/team/suresh.png',
    bio: "Suresh Baheti has led Sunil Metal Corporation since 1985, guiding the company's top management and aligning individual goals with the organisation's own. A results-oriented leader, he has built the management teams that run SMC today.",
  },
  {
    name: 'Manoj Baheti',
    role: 'Trade Manager',
    photo: '/team/manoj.png',
    bio: "Manoj Baheti brings strong market knowledge and team management to SMC, overseeing the Marketing and Sales department in full. He's driven to grow the business's reputation while keeping the team motivated and engaged.",
  },
  {
    name: 'Sunil Baheti',
    role: 'Trade Manager',
    photo: '/team/sunil.png',
    bio: "Sunil Baheti manages SMC's production and purchasing operations, with a sharp eye for sourcing quality scrap and overseeing the workforce that turns it into finished product. His focus is on growing the business globally.",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function Card({ p }) {
  return (
    <motion.div variants={item} className="group">
       <div className="relative">
        <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-bronze-core z-10 rounded-tl-lg" />
        <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-bronze-core z-10 rounded-tr-lg" />
        <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-bronze-core z-10 rounded-bl-lg" />
        <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-bronze-core z-10 rounded-br-lg" />

        <div className="aspect-[4/5] bg-ink/5 border border-ink/10 rounded-lg overflow-hidden">
          <img
            src={p.photo}
            alt={p.name}
            className="w-full h-full object-cover scale-105 group-hover:scale-115 group-hover:-translate-y-1 transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-xl font-bold text-ink">{p.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-6 h-px bg-oxide" />
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bronze-deep">
            {p.role} &middot; Partner, SMC
          </p>
        </div>
        <p className="text-sm text-ink/60 mt-3 leading-relaxed">{p.bio}</p>
      </div>
    </motion.div>
  )
}

export default function Leadership() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Leadership
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            The People Behind SMC
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {partners.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}