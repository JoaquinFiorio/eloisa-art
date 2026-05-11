import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useModal } from './ModalContext'

import perroNegro from '../assets/img/perro-negro.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { open } = useModal()

  return (
    <section id="about" className="about-section section-padding" ref={ref}>
      <div className="about-grid">
        <motion.div
          className="about-image-container"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          onClick={() => open(perroNegro, 'Eloisa')}
          style={{ cursor: 'none' }}
        >
          <img
            src={perroNegro}
            alt="Eloisa en su estudio"
            className="about-image"
            loading="lazy"
          />
          <div className="about-image-frame" />
        </motion.div>

        <motion.div
          className="about-text-block"
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="section-number">02 — Sobre mí</div>
          <p className="about-quote">
            &ldquo;No pinto lo que veo. Pinto lo que me <em>atraviesa</em>&rdquo;
          </p>
          <p className="about-description">
            Empecé a pintar porque no encontraba otra forma de decir lo que sentía.
            Cada obra es un pedazo de algo que viví, algo que me rompió o me arregló.
            No busco perfección — busco verdad. Y la verdad a veces es torcida,
            a veces es fea, a veces es tan frágil que apenas se sostiene en la tela.
            Pero ahí está. Eso es lo que dejo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}