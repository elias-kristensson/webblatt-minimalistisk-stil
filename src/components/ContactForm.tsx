import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { useFadeIn } from '../hooks/useFadeIn'

const SERVICE_ID  = 'service_bovh24z'
const TEMPLATE_ID = 'template_pjh6lxk'
const PUBLIC_KEY  = 'P-mhT4M3qVyVYdt0d'

export default function ContactForm() {
  const { ref, style } = useFadeIn<HTMLElement>()

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    hasWebsite: '',
    websiteUrl: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          company_name: form.company,
          from_email:   form.email,
          phone:        form.phone,
          message:      form.message,
          has_website:  form.hasWebsite,
          website_url:  form.websiteUrl || '—',
          timestamp:    new Date().toLocaleString('sv-SE'),
          to_email:     'Elias.kristensson.08@gmail.com',
        },
        PUBLIC_KEY,
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="kontakt"
      ref={ref}
      style={style}
      className="px-6 md:px-12 lg:px-20 py-24 lg:py-36"
    >
      <div className="max-w-xl">
        <p
          className="text-xs tracking-[0.12em] text-[#888888] uppercase mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          kontakt
        </p>
        <h2
          className="text-[#111111] tracking-[0.02em] leading-[1.1] mb-12"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          }}
        >
          Vill du ha en sida som detta?
        </h2>

        {status === 'success' ? (
          <div className="border-t border-[#E5E5E5] pt-10">
            <p
              className="text-[#111111] text-sm mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Tack — vi hör av oss inom 24 timmar på vardagar.
            </p>
            <button
              onClick={() => { setStatus('idle'); setForm({ name:'', company:'', email:'', phone:'', message:'', hasWebsite:'', websiteUrl:'' }) }}
              className="text-xs text-[#888888] underline underline-offset-4 mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Skicka ett nytt meddelande
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name & Company row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs text-[#888888] tracking-[0.08em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Namn *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="border-b border-[#E5E5E5] bg-transparent py-2 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="company"
                  className="text-xs text-[#888888] tracking-[0.08em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Företagsnamn
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="border-b border-[#E5E5E5] bg-transparent py-2 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
                />
              </div>
            </div>

            {/* Email & Phone row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs text-[#888888] tracking-[0.08em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  E-postadress *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="border-b border-[#E5E5E5] bg-transparent py-2 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs text-[#888888] tracking-[0.08em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Telefonnummer
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="border-b border-[#E5E5E5] bg-transparent py-2 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs text-[#888888] tracking-[0.08em]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Vad behöver du hjälp med?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="border-b border-[#E5E5E5] bg-transparent py-2 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200 resize-y"
                style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
              />
            </div>

            {/* Has website? */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs text-[#888888] tracking-[0.08em]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Har du en befintlig hemsida?
              </label>
              <div className="flex gap-6 pt-1">
                <label className="flex items-center gap-2 text-sm text-[#111111] cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <input
                    type="radio"
                    name="hasWebsite"
                    value="Ja"
                    checked={form.hasWebsite === 'Ja'}
                    onChange={handleChange}
                    className="accent-[#111111]"
                  />
                  Ja
                </label>
                <label className="flex items-center gap-2 text-sm text-[#111111] cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <input
                    type="radio"
                    name="hasWebsite"
                    value="Nej"
                    checked={form.hasWebsite === 'Nej'}
                    onChange={handleChange}
                    className="accent-[#111111]"
                  />
                  Nej
                </label>
              </div>
              {form.hasWebsite === 'Ja' && (
                <div className="flex flex-col gap-1.5 mt-3">
                  <label
                    htmlFor="websiteUrl"
                    className="text-xs text-[#888888] tracking-[0.08em]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Länk till din nuvarande hemsida
                  </label>
                  <input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="url"
                    placeholder="https://example.com"
                    value={form.websiteUrl}
                    onChange={handleChange}
                    className="border-b border-[#E5E5E5] bg-transparent py-2 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
                  />
                </div>
              )}
            </div>

            {status === 'error' && (
              <p className="text-xs text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Något gick fel. Försök igen eller maila{' '}
                <a href="mailto:Elias.kristensson.08@gmail.com" className="underline underline-offset-2">
                  Elias.kristensson.08@gmail.com
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start bg-[#111111] text-white text-sm tracking-[0.06em] px-8 py-4 hover:bg-[#333333] transition-colors duration-200 disabled:opacity-40"
              style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
            >
              {status === 'sending' ? 'Skickar…' : 'Skicka'}
            </button>

            <p
              className="text-xs text-[#888888]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Eller maila direkt:{' '}
              <a
                href="mailto:Elias.kristensson.08@gmail.com"
                className="hover:text-[#111111] transition-colors duration-200"
              >
                Elias.kristensson.08@gmail.com
              </a>
              {' '}· 079 340 42 02
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
