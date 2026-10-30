import Navbar from '../../components/navigation/Navbar.jsx'
import ServicesSection from '../../components/services/ServicesSection.jsx'

export default function ServicesPage() {
  return (
    <div className="home-page services-page">
      <Navbar />
      <main className="page-shell">
        <ServicesSection />
      </main>
    </div>
  )
}
