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

export default function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="testimonial-section section-padding" ref={ref}>
      <div className="testimonial-decoration left" aria-hidden="true">&ldquo;</div>
      <div className="testimonial-decoration right" aria-hidden="true">&rdquo;</div>

      <motion.blockquote
        className="testimonial-quote"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        Cuando estoy frente a una de sus obras, <em>siento</em> antes de entender.
        Y eso es lo que siempre busco en el arte — que me <em>toque</em> sin pedir permiso.
      </motion.blockquote>

      <motion.div
        className="testimonial-author"
        custom={0.3}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="testimonial-author-name">Valentina Reyes</div>
        <div className="testimonial-author-role">Coleccionista — Buenos Aires</div>
      </motion.div>
    </section>
  )
}