import { useFadeIn } from '../hooks/useFadeIn'

export default function CtaSection() {
  const { ref, style } = useFadeIn<HTMLElement>()

  return (
    <section
      id="kontakt"
      ref={ref}
      style={style}
      className="px-6 md:px-12 lg:px-20 py-24 lg:py-36 text-center"
    >
      <div className="max-w-xl mx-auto">
        <h2
          className="text-[#111111] tracking-[0.02em] leading-[1.1] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          }}
        >
          Vill du ha en sida som detta?
        </h2>

        <p
          className="text-[#888888] text-base leading-[1.75] mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Kontakta oss — vi tar ett kort samtal och ser vad som passar dig.
        </p>

        <a
          href="mailto:Elias.kristensson.08@gmail.com"
          className="inline-block bg-[#111111] text-white text-sm tracking-[0.06em] px-8 py-4 hover:bg-[#333333] transition-colors duration-200"
          style={{
            fontFamily: "'Inter', sans-serif",
            borderRadius: 0,
          }}
        >
          Kom igång
        </a>

        <p
          className="text-[#888888] text-xs mt-6 tracking-[0.02em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <a
            href="mailto:Elias.kristensson.08@gmail.com"
            className="hover:text-[#111111] transition-colors duration-200"
          >
            Elias.kristensson.08@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
