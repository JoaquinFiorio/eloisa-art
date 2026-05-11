import { useEffect, useRef } from 'react'
import { useModal } from './ModalContext'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const { image } = useModal()

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleHoverStart = () => {
      dotRef.current?.classList.add('hovering')
      ringRef.current?.classList.add('hovering')
    }

    const handleHoverEnd = () => {
      dotRef.current?.classList.remove('hovering')
      ringRef.current?.classList.remove('hovering')
    }

    window.addEventListener('mousemove', handleMouseMove)

    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .collection-card, input, textarea, .collection-work-image-wrap, .hero-floating-image, .about-image-container, .collection-trigger-cover')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    let rafId
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (image) {
    if (dotRef.current) dotRef.current.style.display = 'none'
    if (ringRef.current) ringRef.current.style.display = 'none'
  } else {
    if (dotRef.current) dotRef.current.style.display = ''
    if (ringRef.current) ringRef.current.style.display = ''
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}