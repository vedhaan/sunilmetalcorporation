import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const photos = [
  { src: '/gallery/facility-1.jpg', alt: 'Sunil Metal Corporation processing facility', rotate: '-rotate-6', z: 'z-10', offset: '' },
  { src: '/gallery/facility-2.jpg', alt: 'Sunil Metal Corporation facility floor', rotate: 'rotate-0', z: 'z-20', offset: 'md:-mt-6' },
  { src: '/gallery/facility-3.jpg', alt: 'Sunil Metal Corporation quality control area', rotate: 'rotate-6', z: 'z-10', offset: '' },
]

export default function CertificationsTeaser() {
  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Inside SMC
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            See Our Facility
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            From our processing floor in Odhav GIDC to our MRAI and ANMA
            membership certificates — a look at the operation behind four
            decades of trade.
          </p>

          <Link
            to="/certifications-facility-gallery"
            className="inline-flex items-center gap-2 font-semibold text-ink border-2 border-ink rounded-full px-6 py-2.5 mt-8 hover:bg-ink hover:text-cream transition-colors group"
          >
            See inside our facility
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-start"
        >
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 30 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className={`relative ${p.z} ${p.offset} ${i > 0 ? '-ml-8 md:-ml-10' : ''} ${p.rotate} bg-cream p-2 pb-6 shadow-xl border border-ink/10 rounded-sm`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-32 h-40 md:w-40 md:h-52 object-cover bg-ink/5"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}