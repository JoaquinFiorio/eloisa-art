import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

const marqueeWords = [
  { text: 'Piel', italic: false },
  { text: 'Sangre', italic: true },
  { text: 'Silencio', italic: false },
  { text: 'Grito', italic: true },
  { text: 'Memoria', italic: false },
  { text: 'Hambre', italic: true },
  { text: 'Raíz', italic: false },
  { text: 'Fuego', italic: true },
]

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords]

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>
            {item.italic ? <em>{item.text}</em> : item.text}
          </span>
        ))}
        {items.map((_, i) => (
          <span key={`dot-${i}`} className="separator" />
        ))}
      </div>
    </section>
  )
}