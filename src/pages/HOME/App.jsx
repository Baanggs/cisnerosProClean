import NavBar from '../../components/NAVBAR/nav.jsx'
import NavbarButton from '../../components/NAVBAR/buton.tsx'
import '../../styles.css'

const features = ['Resultados visibles', 'Productos seguros', 'A domicilio']

const services = [
  {
    title: 'Limpieza profunda de salas',
    description: 'Eliminamos suciedad acumulada, manchas y malos olores para devolverle brillo y frescura al ambiente.'
  },
  {
    title: 'Muebles y superficies',
    description: 'Tratamos sillas, mesas y superficies con productos que cuidan materiales y dejan una apariencia impecable.'
  },
  {
    title: 'Servicio a domicilio',
    description: 'Atendemos con rapidez y discreción para que tu espacio vuelva a sentirse cómodo, limpio y listo para usar.'
  }
]

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
      <NavBar />

      <main className="page-shell">
        <section className="hero" id="inicio">
          <div className="hero__copy">
            <p className="eyebrow">Limpieza profunda de salas</p>
            <h1>
              Tu sala,<br />
              como <span>nueva</span>
            </h1>

            <p className="lead">
              Eliminamos la suciedad, las manchas y los malos olores con tecnología
              profesional y productos seguros.
            </p>

            <div className="feature-list">
              {features.map((item) => (
                <div key={item} className="feature-item">
                  <span className="feature-icon">✦</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="cta-row">
              <NavbarButton className="primary-btn" variant="contained">
                Solicita tu cotización <span>→</span>
              </NavbarButton>
              <button type="button" className="secondary-btn">
                Conoce nuestros servicios <span>→</span>
              </button>
            </div>
          </div>

          <div className="hero__panel" aria-label="Resumen de servicios">
            <div className="panel-card">
              <p className="panel-label">Atención rápida</p>
              <h2>100% profesional</h2>
              <ul>
                <li>Servicio seguro y confiable</li>
                <li>Ambientes frescos y renovados</li>
                <li>Solución adaptada a cada espacio</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section services" id="servicios">
          <div className="section-heading">
            <p className="eyebrow">Nuestros servicios</p>
            <h2>Todo lo que tu espacio necesita</h2>
          </div>

          <div className="service-grid">
            {services.map(({ title, description }) => (
              <article key={title} className="service-card">
                <div className="service-badge">✦</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

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

          <NavbarButton className="primary-btn" variant="contained">
            Cotiza ahora <span>→</span>
          </NavbarButton>
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