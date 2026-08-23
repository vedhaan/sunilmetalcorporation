import { motion } from 'motion/react'
import { partners } from '../../data/partners'

const phoneNumbers = {
  'Suresh Baheti': { display: '+91 98240 76763', tel: '+919824076763', whatsapp: null },
  'Manoj Baheti': { display: '+91 98240 76604', tel: '+919824076604', whatsapp: '919824076604' },
  'Sunil Baheti': { display: '+91 98240 86604', tel: '+919824086604', whatsapp: '919824086604' },
}

const EMAIL = 'sunilmetal@yahoo.com'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

function ContactCard({ p, contact }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="border border-ink/10 rounded-xl p-6 bg-cream"
    >
      <div className="w-11 h-11 rounded-full border border-bronze-core/40 flex items-center justify-center mb-4">
        <span className="font-display font-bold text-sm text-bronze-deep">
          {p.name.split(' ').map((w) => w[0]).join('')}
        </span>
      </div>

      <h3 className="font-display font-bold text-lg text-ink">{p.name}</h3>
      <p className="font-mono text-[10px] uppercase tracking-wide text-bronze-deep mt-1">
        {p.role} &middot; Partner
      </p>

      <a
        href={`tel:${contact.tel}`}
        className="block text-ink/70 hover:text-oxide transition-colors mt-4 text-sm"
      >
        {contact.display}
      </a>

      <div className="flex gap-2 mt-4">
        <a
          href={`tel:${contact.tel}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink border border-ink/20 rounded-full px-3.5 py-1.5 hover:bg-ink hover:text-cream transition-colors"
        >
          Call
        </a>
        {contact.whatsapp && (
        <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi, I\u2019d like to get in touch regarding metal scrap trading.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream bg-oxide hover:bg-bronze-deep rounded-full px-3.5 py-1.5 transition-colors"
          >
            WhatsApp
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function DirectContacts() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Direct Contacts
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            Talk to Us Directly
          </h2>
          <p className="mt-3 text-ink/60">
            Not a call centre — reach a partner directly.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {partners.map((p) => (
            <ContactCard key={p.name} p={p} contact={phoneNumbers[p.name]} />
          ))}

          <motion.div
            variants={item}
            className="border border-ink/10 rounded-xl p-6 bg-ink text-cream flex flex-col justify-center"
          >
            <p className="font-mono text-[10px] uppercase tracking-wide text-bronze-shine/70 mb-2">
              Email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display font-bold text-lg break-all hover:text-bronze-shine transition-colors"
            >
              {EMAIL}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}