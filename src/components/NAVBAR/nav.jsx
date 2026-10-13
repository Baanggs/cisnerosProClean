export default function Navbar() {
  const menuItems = ['Inicio', 'Servicios', 'Resultados', 'Nosotros', 'Contacto']

  return (
    <header className="navbar">
      <img
        className="brand-logo"
        src="logo.png"
        alt="Cisneros Pro Clean"
      />

      <nav className="menu" aria-label="Navegación principal">
     <a href="">Home</a>
     <a href="">Servicios</a>
     <a href="">Paquetes</a>
     
      </nav>

    <a
  className="whatsapp-btn"
  aria-label="WhatsApp"
  href="https://wa.me/3535353688?text=Hola%20quiero%20info"
  target="_blank"
  rel="noopener"
  sx={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
  }}
>
  <span className="whatsapp-icon">◔</span>
  Contactar por WhatsApp
</a>   
    </header>
  )
}