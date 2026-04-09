import { useFadeIn } from '../hooks/useFadeIn'

const packages = [
  {
    name: 'Mini',
    price: '2 999 kr',
    originalPrice: '3 999 kr',
    desc: '1 sida',
    features: ['Custom design & bygge', 'Källkod levererad', 'Driftsättningsguide ingår'],
    popular: false,
  },
  {
    name: 'Standard',
    price: '4 999 kr',
    originalPrice: '6 499 kr',
    desc: 'Upp till 5 sidor',
    features: ['Allt i Mini', 'Kontaktformulär', 'SEO-grund'],
    popular: true,
  },
  {
    name: 'Pro',
    price: '7 999 kr',
    originalPrice: '9 999 kr',
    desc: 'Upp till 10 sidor',
    features: ['Allt i Standard', 'Animationer inkluderade'],
    popular: false,
  },
  {
    name: 'Max',
    price: '19 999 kr',
    originalPrice: '25 999 kr',
    desc: 'Upp till 20 sidor',
    features: ['Allt i Pro', 'Prioriterat bygge'],
    popular: false,
  },
]

const addons = [
  { name: '3D-element', price: '+2 000 kr' },
  { name: 'Animationer', price: '+1 000 kr', note: 'ingår i Pro & Max' },
  { name: 'Hosting via Vercel', price: '179 kr/mån' },
]

function PricingCard({ pkg, index }: { pkg: (typeof packages)[number]; index: number }) {
  const { ref, style } = useFadeIn<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{
        ...style,
        transitionDelay: `${index * 0.08}s`,
        borderColor: pkg.popular ? '#111111' : '#E5E5E5',
      }}
      className="border p-8 flex flex-col gap-4 relative"
    >
      {pkg.popular && (
        <span
          className="absolute top-0 right-0 text-[10px] tracking-[0.12em] uppercase bg-[#111111] text-white px-3 py-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Populärast
        </span>
      )}

      <div>
        <h3
          className="text-[#111111] tracking-[0.02em] mb-1"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: '1.5rem',
          }}
        >
          {pkg.name}
        </h3>
        <p className="text-xs text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
          {pkg.desc}
        </p>
      </div>

      <div>
        <span
          className="text-[#888888] text-xs line-through mr-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {pkg.originalPrice}
        </span>
        <span
          className="text-[#111111]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 300 }}
        >
          {pkg.price}
        </span>
      </div>

      <ul className="flex flex-col gap-2 flex-1">
        {pkg.features.map(f => (
          <li
            key={f}
            className="text-sm text-[#888888] flex items-start gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-[#111111] mt-0.5 shrink-0">—</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className="mt-2 text-center text-sm tracking-[0.06em] border border-[#111111] px-6 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-200"
        style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
      >
        Välj {pkg.name}
      </a>
    </div>
  )
}

export default function Pricing() {
  const { ref: headRef, style: headStyle } = useFadeIn<HTMLDivElement>()
  const { ref: addonsRef, style: addonsStyle } = useFadeIn<HTMLDivElement>()

  return (
    <section id="priser" className="px-6 md:px-12 lg:px-20 py-24 lg:py-36">
      <div
        ref={headRef}
        style={headStyle}
        className="mb-16"
      >
        <p
          className="text-xs tracking-[0.12em] text-[#888888] uppercase mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          priser
        </p>
        <h2
          className="text-[#111111] tracking-[0.02em] leading-[1.1]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          }}
        >
          Engångsbetalning.
          <br />
          Du äger koden.
        </h2>
      </div>

      {/* Packages grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] mb-16">
        {packages.map((pkg, i) => (
          <div key={pkg.name} className="bg-[#FAFAFA]">
            <PricingCard pkg={pkg} index={i} />
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div
        ref={addonsRef}
        style={addonsStyle}
        className="border-t border-[#E5E5E5] pt-10"
      >
        <p
          className="text-xs tracking-[0.12em] text-[#888888] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          tillägg & hosting
        </p>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-px bg-transparent sm:bg-[#E5E5E5]">
          {addons.map(a => (
            <div
              key={a.name}
              className="bg-[#FAFAFA] px-6 py-5 flex justify-between items-baseline border-t border-[#E5E5E5] sm:border-t-0 sm:flex-1"
            >
              <span
                className="text-sm text-[#888888]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {a.name}
                {a.note && (
                  <span className="block text-xs text-[#888888] opacity-60">{a.note}</span>
                )}
              </span>
              <span
                className="text-sm text-[#111111]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {a.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
