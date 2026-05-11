import { motion } from 'framer-motion'
import { useModal } from './ModalContext'
import chica from '../assets/img/chiquita.jpeg'

const lineVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: 0,
    transition: {
      duration: 1,
      delay: 1.8 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const { open } = useModal()

  return (
    <section className="hero">
      <div className="hero-decoration" aria-hidden="true">E</div>

      <div className="hero-content">
        <motion.div
          className="hero-label"
          custom={2.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Lo que nace del pecho
        </motion.div>

        <h1 className="hero-title">
          <span className="line">
            <motion.span className="line-inner" custom={0} variants={lineVariants} initial="hidden" animate="visible">
              Pinto lo que
            </motion.span>
          </span>
          <span className="line">
            <motion.span className="line-inner" custom={1} variants={lineVariants} initial="hidden" animate="visible">
              <em>no se puede</em>
            </motion.span>
          </span>
          <span className="line">
            <motion.span className="line-inner" custom={2} variants={lineVariants} initial="hidden" animate="visible">
              decir con palabras
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero-subtitle"
          custom={2.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Porque hay cosas que solo el color las puede abrazar. Porque cuando el silencio es demasiado, la mano encuentra el camino.
        </motion.p>
      </div>

      <motion.div
        className="hero-floating-image"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => open(chica, 'Obra destacada')}
        style={{ cursor: 'none' }}
      >
        <img
          src={chica}
          alt="Obra destacada"
          loading="eager"
        />
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}