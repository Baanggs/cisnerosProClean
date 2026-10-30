export default function Navbar() {
  const menuItems = [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Servicios', href: '/servicios' },
  ]

  return (
    <header className="navbar">
      <img className="brand-logo" src="logo.png" alt="Cisneros Pro Clean" />

      <nav className="menu" aria-label="Navegación principal">
        {menuItems.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <a
        className="whatsapp-btn"
        aria-label="WhatsApp"
        href="https://wa.me/3535353688?text=Hola%20quiero%20info"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whatsapp-icon">◔</span>
        Contactar por WhatsApp
      </a>
    </header>
  )
}
