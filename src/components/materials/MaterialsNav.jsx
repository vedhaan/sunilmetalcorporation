const items = [
  { id: 'aluminium', label: 'Aluminium' },
  { id: 'copper', label: 'Copper' },
  { id: 'lead', label: 'Lead' },
  { id: 'zinc', label: 'Zinc' },
  { id: 'stainless-steel', label: 'Stainless Steel' },
  { id: 'ingot', label: 'Ingot' },
]

export default function MaterialsNav() {
  return (
    <div className="sticky top-0 z-30 bg-cream/90 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="shrink-0 font-mono text-xs uppercase tracking-wide text-ink/60 hover:text-oxide hover:border-oxide border border-ink/15 rounded-full px-4 py-1.5 transition-colors whitespace-nowrap"
          >
            {it.label}
          </a>
        ))}
      </div>
    </div>
  )
}