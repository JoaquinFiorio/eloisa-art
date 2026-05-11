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

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact-section section-padding" ref={ref}>
      <div className="contact-grid">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="section-number">04 — Contacto</div>
          <h2 className="contact-info-title">
            Si algo de esto te <em>llegó</em>, hablemos
          </h2>

          <div className="contact-info-item">
            <div className="contact-info-label">Email</div>
            <div className="contact-info-value">hola@eloisa.art</div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-label">Estudio</div>
            <div className="contact-info-value">Buenos Aires, Argentina</div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-label">Teléfono</div>
            <div className="contact-info-value">+54 9 2477 599614</div>
          </div>

          <div className="contact-socials">
            <a href="https://www.instagram.com/eloisa.r.art" target='_blank' className="contact-social-link">Instagram</a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <button type="button" className="submit-btn">
            Enviar mensaje <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}