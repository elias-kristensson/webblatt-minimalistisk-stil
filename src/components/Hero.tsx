import { useFadeIn } from '../hooks/useFadeIn'

export default function Hero() {
  const { ref, style } = useFadeIn<HTMLDivElement>()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative large number */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(10rem, 20vw, 18rem)',
          fontWeight: 300,
          color: '#111111',
          opacity: 0.04,
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        01
      </span>

      <div
        ref={ref}
        style={style}
        className="relative z-10 px-6 md:px-12 lg:px-20 pt-24 pb-16"
      >
        <p
          className="text-xs tracking-[0.12em] text-[#888888] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          minimalistisk design
        </p>

        <h1
          className="text-[#111111] leading-[1.05] tracking-[0.02em] mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(3.5rem, 10vw, 6rem)',
          }}
        >
          Enkelt.
          <br />
          Tydligt.
          <br />
          Effektivt.
        </h1>

        <p
          className="text-[#888888] text-base leading-[1.75] mb-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            maxWidth: '400px',
          }}
        >
          En minimalistisk hemsida tar bort allt som stör — och låter ditt
          erbjudande tala för sig självt.
        </p>

        <a
          href="#kontakt"
          className="text-[#111111] text-base underline underline-offset-4 decoration-[#111111] hover:text-[#888888] hover:decoration-[#888888] transition-colors duration-200"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Se vad vi kan göra för dig →
        </a>
      </div>
    </section>
  )
}
