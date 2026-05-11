import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useModal } from './ModalContext'

import avatar1 from '../assets/img/avatar1.jpeg';
import avatar2 from '../assets/img/avatar2.jpeg';
import avatar3 from '../assets/img/avatar3.jpeg';

import mariposa1 from '../assets/img/mariposa1.jpeg';
import mariposa2 from '../assets/img/mariposa2.jpeg';
import mariposa3 from '../assets/img/mariposa3.jpeg';

const collections = [
  {
    src: avatar2,
    title: 'Trilogía de los Elementos',
    year: 'Colección 2026',
    description: 'El cuerpo femenino se fusiona con la mariposa en un gesto íntimo de introspección y cambio.',
    works: [
      { src: avatar1, title: 'Aire', medium: 'Lapiz sobre lienzo · 25x35cm' },
      { src: avatar2, title: 'Agua', medium: 'Lapiz sobre lienzo · 25x35cm' },
      { src: avatar3, title: 'Fuego', medium: 'Lapiz sobre lienzo · 25x35cm' },
    ],
  },
  {
    src: mariposa1,
    title: 'Mujeres Mariposas',
    year: 'Colección 2025',
    description: 'El cuerpo femenino se fusiona con la mariposa en un gesto íntimo de introspección y cambio.',
    works: [
      { src: mariposa1, title: 'Frontera', medium: 'Lapiz sobre lienzo · 21x30cm' },
      { src: mariposa2, title: 'Horizonte', medium: 'Lapiz sobre lienzo · 21x30cm' },
      { src: mariposa3, title: 'Desplazamiento', medium: 'Lapiz sobre lienzo · 21x30cm' },
    ],
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

function CollectionItem({ item, index, isOpen, onToggle }) {
  const { open } = useModal()

  return (
    <motion.div
      className={`collection-item ${isOpen ? 'collection-item--open' : ''}`}
      custom={0.05 + index * 0.08}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <button className="collection-trigger" onClick={onToggle}>
        <div className="collection-trigger-left">
          <span className="collection-trigger-number">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="collection-trigger-cover" onClick={(e) => { e.stopPropagation(); open(item.src, item.title) }} style={{ cursor: 'none' }}>
          <img src={item.src} alt={item.title} />
        </div>
        <div className="collection-trigger-text">
          <h3 className="collection-trigger-title">{item.title}</h3>
          <span className="collection-trigger-year">{item.year}</span>
          <p className="collection-trigger-desc">{item.description}</p>
        </div>
        <div className="collection-trigger-arrow">
          <motion.svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <path d="M6 9L12 15L18 9" />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="collection-works"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="collection-works-inner">
              <div className="collection-works-line" />
              <div className="collection-works-grid">
                {item.works.map((work, i) => (
                  <motion.div
                    key={i}
                    className="collection-work-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="collection-work-image-wrap" onClick={() => open(work.src, work.title)} style={{ cursor: 'none' }}>
                      <img src={work.src} alt={work.title} loading="lazy" />
                    </div>
                    <div className="collection-work-info">
                      <span className="collection-work-title">{work.title}</span>
                      <span className="collection-work-medium">{work.medium}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Collection() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="collection" className="collection-section section-padding" ref={ref}>
      <motion.div
        className="section-header"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div>
          <div className="section-number">03 — Colecciones</div>
<h2 className="section-title">Las <em>colecciones</em></h2>
        </div>
        <p className="section-subtitle">
          Cada una nació de algo que no paró de doler hasta convertirse en color
        </p>
      </motion.div>

      <div className="collection-list">
        {collections.map((item, i) => (
          <CollectionItem
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}