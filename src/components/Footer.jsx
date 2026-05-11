export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Eloisa</div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} Eloisa. Todos los derechos reservados.</div>
        <div className="footer-links">
          <a href="https://www.instagram.com/eloisa.r.art" target='_blank'>Instagram</a>
        </div>
      </div>
    </footer>
  )
}