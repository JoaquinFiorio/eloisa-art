import { useState, useCallback } from 'react'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Marquee from './components/Marquee'
import About from './components/About'
import Collection from './components/Collection'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ModalProvider } from './components/ModalContext'
import './index.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <PageLoader onComplete={handleLoadComplete} />
      {!loading && (
        <ModalProvider>
          <CustomCursor />
          <GrainOverlay />
          <Navbar />
          <main>
            <Hero />
            <div className="divider" />
            <Gallery />
            <Marquee />
            <div className="divider" />
            <About />
            <Collection />
            <Testimonial />
            <div className="divider" />
            <Contact />
          </main>
          <Footer />
        </ModalProvider>
      )}
    </>
  )
}