import Navbar from '../../components/navigation/Navbar.jsx'
import Hero from '../../components/hero/Hero.jsx'
import ServicesSection from '../../components/services/ServicesSection.jsx'
import Button from '../../components/ui/Button.tsx'

const reasons = [
  'Equipo profesional con atención cuidadosa y puntual.',
  'Productos seguros para hogares, oficinas y espacios comerciales.',
  'Resultados visibles desde la primera visita.'
]

const stats = [
  { value: '+500', label: 'espacios atendidos' },
  { value: '24h', label: 'respuesta rápida' },
  { value: '100%', label: 'compromiso con la calidad' }
]

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />

      <main className="page-shell">
        <Hero />
        <ServicesSection />

        <section className="section about" id="nosotros">
          <div className="about-copy">
            <p className="eyebrow">Sobre nosotros</p>
            <h2>Una limpieza que cuida cada detalle.</h2>
            <p>
              En Cisneros Pro Clean combinamos experiencia, productos seguros y un servicio
              responsable para dejar cada espacio impecable, confortable y listo para usar.
            </p>

            <div className="reasons-list">
              {reasons.map((reason) => (
                <div key={reason} className="reason-item">
                  <span>✓</span>
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="stats-card" aria-label="Estadísticas de la empresa">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat-item">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section cta-section" id="contacto">
          <div className="cta-content">
            <p className="eyebrow">Agenda tu cita</p>
            <h2>Tu espacio merece un cuidado profesional.</h2>
          </div>

          <Button className="primary-btn">
            Cotiza ahora <span>→</span>
          </Button>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Cisneros Pro Clean</p>
        <div className="footer-links">
          na
        </div>
      </footer>
    </div>
  )
}
