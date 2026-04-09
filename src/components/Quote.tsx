import { useFadeIn } from '../hooks/useFadeIn'

export default function Quote() {
  const { ref, style } = useFadeIn<HTMLElement>()

  return (
    <section
      ref={ref}
      style={style}
      className="w-full px-6 md:px-12 lg:px-20 py-24 lg:py-40 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <blockquote
          className="text-[#111111] leading-[1.2] tracking-[0.02em] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          }}
        >
          "Det är inte vad du lägger till. Det är vad du tar bort."
        </blockquote>
        <p
          className="text-[#888888] text-sm tracking-[0.04em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          — Filosofin bakom varje sida vi bygger
        </p>
      </div>
    </section>
  )
}
