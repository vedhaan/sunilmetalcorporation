import { motion } from 'motion/react'

const address = '103, Neelkanth Plaza, Opp. New Madhupura Market, Shahibaug, Ahmedabad – 380 004, Gujarat, India'
const mapEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d891.8908029997133!2d72.65259196294497!3d23.020072029681124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAxJzEzLjQiTiA3MsKwMzknMTIuMyJF!5e0!3m2!1sen!2sin!4v1788169635702!5m2!1sen!2sin'
const mapQuery = address.replace(/\s+/g, '+')

export default function FactoryLocation() {
  return (
    <section className="bg-bronze-shine/[0.06] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 md:order-1 min-h-[320px] md:min-h-full rounded-2xl overflow-hidden border border-ink/10 shadow-md"
          >
            <iframe
              title="Sunil Metal Corporation — Office Location"
              src={mapEmbedSrc}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
              Our Facility
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              Factory
            </h2>
            <p className="font-display text-lg text-bronze-deep mt-1 mb-6">
              Odhav GIDC, Ahmedabad
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-bronze-core/10 border border-bronze-core/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-bronze-deep" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-bronze-deep/70 mb-1">Address</p>
                  <p className="text-ink/80 leading-relaxed">{address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-bronze-core/10 border border-bronze-core/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-bronze-deep" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-bronze-deep/70 mb-1">Telephone</p>
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:+917922871981" className="text-ink/80 hover:text-oxide transition-colors">
                      (+91 79) 2287 1981
                    </a>
                    <a href="tel:+917922874747" className="text-ink/80 hover:text-oxide transition-colors">
                      (+91 79) 2287 4747
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapEmbedSrc}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 font-semibold text-ink border-2 border-ink rounded-full px-6 py-2.5 hover:bg-ink hover:text-cream transition-colors w-fit group"
            >
              Get Directions
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}