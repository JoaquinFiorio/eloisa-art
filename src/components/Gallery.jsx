import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useModal } from './ModalContext'
import perroBlanco from '../assets/img/perro-blanco.jpeg'
import flor from '../assets/img/flor.jpeg'
import tatuaje from '../assets/img/tatuaje.jpeg'
import nena from '../assets/img/nena.jpeg'

const galleryItems = [
  {
    src: perroBlanco,
    title: 'Lo que no dije',
    medium: 'Óleo sobre lienzo · 120×150cm',
    cols: '1 / 6',
    rows: '1 / 3',
  },
  {
    src: flor,
    title: 'El lugar donde duele',
    medium: 'Acrílico mixto · 80×100cm',
    cols: '6 / 9',
    rows: '1',
  },
  {
    src: tatuaje,
    title: 'Casi te nombro',
    medium: 'Técnica mixta · 140×180cm',
    cols: '9 / 13',
    rows: '1 / 3',
  },
  {
    src: nena,
    title: 'Pedazos de algo',
    medium: 'Collage sobre papel · 60×80cm',
    cols: '6 / 9',
    rows: '2',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { open } = useModal()

  return (
    <section id="gallery" className="gallery-section section-padding" ref={ref}>
      <motion.div
        className="section-header"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div>
          <div className="section-number">01 — Obras</div>
          <h2 className="section-title">Un poco de mi <em>Arte</em></h2>
        </div>
        <p className="section-subtitle">
          Cosas que no sabía que llevaba adentro hasta que las vi en el lienzo
        </p>
      </motion.div>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            style={{ gridColumn: item.cols, gridRow: item.rows }}
            custom={0.1 + i * 0.15}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => open(item.src, item.title)}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <div className="gallery-item-overlay">
              <div className="gallery-item-title">{item.title}</div>
              <div className="gallery-item-medium">{item.medium}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}