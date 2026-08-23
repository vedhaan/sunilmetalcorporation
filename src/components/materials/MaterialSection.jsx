import { motion } from 'motion/react'

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
}
const chip = {
    hidden: { opacity: 0, y: 8, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function MaterialSection({
    id, index, code, name, flagship, accent, bg, description, forms, formsLabel = 'Typical Forms Accepted', whatsappLabel,
}) {
    const waMessage = encodeURIComponent(`Hi, I'd like to enquire about ${name}.`)
    const waHref = `https://wa.me/919824086604?text=${waMessage}`

    return (
        <section
            id={id}
            className={`scroll-mt-16 relative py-20 md:py-24 overflow-hidden ${bg === 'tint' ? 'bg-bronze-shine/[0.06]' : 'bg-cream'}`}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 8% 15%, ${accent}1f, transparent 40%),
            radial-gradient(circle at 95% 85%, #B5502A14, transparent 45%)
          `,
                }}
            />

            <div className="relative max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative shrink-0 w-20 h-20 md:w-24 md:h-24"
                    >
                        <motion.div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-2xl blur-lg"
                            style={{ background: `linear-gradient(135deg, ${accent}, #EAC98A)` }}
                            animate={{ opacity: [0.25, 0.45, 0.25] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <div
                            className="relative w-full h-full rounded-2xl flex flex-col items-center justify-center"
                            style={{
                                background: `linear-gradient(135deg, ${accent}22, #EAC98A14)`,
                                border: `2px solid ${accent}`,
                            }}
                        >
                            <span
                                className="font-display font-bold text-2xl md:text-3xl bg-clip-text text-transparent"
                                style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #6E4419)` }}
                            >
                                {code}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-wide text-ink/40 mt-0.5">
                                {String(index).padStart(2, '0')}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-3 flex-wrap">
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                                {name}
                            </h2>
                            {flagship && (
                                <span
                                    className="font-mono text-[10px] uppercase tracking-wide rounded-full px-3 py-1 border text-cream"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #9C6B2E, #B5502A)', borderColor: 'transparent' }}
                                >
                                    Core Specialisation
                                </span>
                            )}
                        </div>

                        <p className="mt-4 text-ink/70 leading-relaxed max-w-2xl">
                            {description}
                        </p>

                        <div className="mt-6">
                            <p className="font-mono text-[11px] uppercase tracking-wide text-bronze-deep mb-2.5">
                                {formsLabel}
                            </p>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={container}
                                className="flex flex-wrap gap-2"
                            >
                                {forms.map((f) => (
                                    <motion.span
                                        key={f}
                                        variants={chip}
                                        whileHover={{ y: -2, borderColor: accent, color: accent }}
                                        className="text-sm text-ink/70 bg-ink/[0.04] border border-ink/10 rounded-full px-3.5 py-1.5 transition-colors cursor-default"
                                    >
                                        {f}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        <motion.a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: `0 12px 24px -8px ${accent}80` }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                            className="inline-flex items-center gap-2 mt-8 font-semibold text-cream px-6 py-3 rounded-full"
                            style={{ backgroundImage: 'linear-gradient(135deg, #9C6B2E, #B5502A)' }}
                        >
                            {whatsappLabel}
                            <span>↗</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}