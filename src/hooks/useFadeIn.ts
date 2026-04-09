import { useEffect, useRef, useState } from 'react'

/**
 * Fade-in on scroll. Uses IntersectionObserver with a scroll-event
 * fallback (no rAF) for environments where IO doesn't fire.
 */
export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let revealed = false
    const reveal = () => {
      if (revealed) return
      revealed = true
      setVisible(true)
    }

    const isInView = () => {
      const { top, bottom, height } = el.getBoundingClientRect()
      return height > 0 && bottom > 0 && top < window.innerHeight * 0.95
    }

    // IntersectionObserver — primary (real browsers)
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal()
        },
        { threshold: 0.05 }
      )
      observer.observe(el)
    }

    // Scroll fallback — synchronous check, no rAF
    const onScroll = () => {
      if (isInView()) reveal()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Check on mount (catches above-fold elements)
    const mountTimer = setTimeout(() => {
      if (isInView()) reveal()
    }, 80)

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearTimeout(mountTimer)
    }
  }, [])

  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.6s ease',
    } as React.CSSProperties,
  }
}
