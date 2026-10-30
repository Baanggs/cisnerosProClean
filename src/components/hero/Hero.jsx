import Button from '../ui/Button.tsx'

const features = ['Resultados visibles', 'Productos seguros', 'A domicilio']

export default function Hero() {
  return (
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
          <Button className="primary-btn">
            ver servicios           </Button>
        <Button className="primary-btn">
          
        </Button>
       
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
  )
}
