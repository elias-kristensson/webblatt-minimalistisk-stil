import { useFadeIn } from '../hooks/useFadeIn'

const principles = [
  {
    number: '01',
    heading: 'Ingenting som inte behövs',
    body: 'Varje element på sidan har en anledning att finnas där.',
  },
  {
    number: '02',
    heading: 'Snabbt och tydligt',
    body: 'Besökaren förstår vad du erbjuder inom tre sekunder.',
  },
  {
    number: '03',
    heading: 'Tidlöst',
    body: 'En minimalistisk sida åldras inte. Den fungerar lika bra om tio år.',
  },
]

function PrincipleItem({ number, heading, body }: (typeof principles)[number]) {
  const { ref, style } = useFadeIn<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={style}
      className="border-t border-[#E5E5E5] pt-10 pb-10"
    >
      <span
        className="text-xs text-[#888888] tracking-[0.1em] mb-4 block"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {number}
      </span>
      <h2
        className="text-[#111111] mb-3 tracking-[0.02em] leading-[1.15]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: '1.75rem',
        }}
      >
        {heading}
      </h2>
      <p
        className="text-[#888888] text-base leading-[1.75]"
        style={{ fontFamily: "'Inter', sans-serif", maxWidth: '520px' }}
      >
        {body}
      </p>
    </div>
  )
}

export default function Principles() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 lg:py-36">
      <div className="max-w-2xl">
        {principles.map((p) => (
          <PrincipleItem key={p.number} {...p} />
        ))}
        <div className="border-t border-[#E5E5E5]" />
      </div>
    </section>
  )
}
