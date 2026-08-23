import { motion } from 'motion/react'
import { mission, vision } from '../../data/missionVision'

const documents = [
  { label: 'Our Mission', text: mission },
  { label: 'Our Vision', text: vision },
]

function CornerFlourish({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute w-8 h-8 ${className}`}>
      <path d="M2 20 Q2 2 20 2" fill="none" stroke="#9C6B2E" strokeWidth="1.5" />
      <circle cx="20" cy="2" r="2" fill="#9C6B2E" />
      <circle cx="2" cy="20" r="2" fill="#9C6B2E" />
    </svg>
  )
}

function CertificateCard({ doc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-cream border border-bronze-core/40 rounded-lg px-8 py-12 md:px-10 md:py-14 text-center shadow-sm"
    >
      {/* ornamental corners, rotated per corner */}
      <CornerFlourish className="top-3 left-3" />
      <CornerFlourish className="top-3 right-3 -scale-x-100" />
      <CornerFlourish className="bottom-3 left-3 -scale-y-100" />
      <CornerFlourish className="bottom-3 right-3 -scale-x-100 -scale-y-100" />

      {/* inner rule line, like a certificate's document border */}
      <div className="absolute inset-4 border border-bronze-core/15 rounded pointer-events-none" />

      {/* seal ribbon overlapping the top edge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bronze-shine to-bronze-core border-4 border-cream shadow-md flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-cream" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2 L14.5 8.5 L21 9.5 L16.5 14 L17.7 20.5 L12 17.3 L6.3 20.5 L7.5 14 L3 9.5 L9.5 8.5 Z" />
          </svg>
        </div>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bronze-deep mt-4 mb-5">
        {doc.label}
      </p>

      <p className="font-display text-xl md:text-2xl text-ink leading-relaxed max-w-md mx-auto">
        &ldquo;{doc.text}&rdquo;
      </p>

      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="w-8 h-px bg-bronze-core/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-oxide" />
        <span className="w-8 h-px bg-bronze-core/40" />
      </div>
    </motion.div>
  )
}

export default function CommitmentSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Our Commitment
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            Mission &amp; Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-4xl mx-auto">
          {documents.map((doc, i) => (
            <CertificateCard key={doc.label} doc={doc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}