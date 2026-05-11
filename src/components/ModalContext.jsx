import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const ModalContext = createContext(null)

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}

export function ModalProvider({ children }) {
  const [image, setImage] = useState(null)

  const open = useCallback((src, alt = '') => {
    setImage({ src, alt })
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setImage(null)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    if (!image) return
    const handleKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [image, close])

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {image && <Lightbox src={image.src} alt={image.alt} onClose={close} />}
    </ModalContext.Provider>
  )
}

function Lightbox({ src, alt, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="lightbox-backdrop" onClick={handleBackdropClick}>
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="lightbox-image-wrap">
        <img src={src} alt={alt} className="lightbox-image" />
      </div>
    </div>
  )
}