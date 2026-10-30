
import { createRoot } from 'react-dom/client'
import HomePage from './pages/home/HomePage.jsx'
import ServicesPage from './pages/services/ServicesPage.jsx'
import './styles.css'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = path === '/servicios' ? ServicesPage : HomePage

createRoot(document.getElementById('root')).render(<Page />)
