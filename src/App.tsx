import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './pages/components/Header';
import { Footer } from './pages/components/Footer';
import { BackToTop } from './pages/components/BackToTop';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Construction } from './pages/services/Construction';
import { LandServices } from './pages/services/LandServices';
import { SalePurchase } from './pages/services/SalePurchase';
import { Consulting } from './pages/services/Consulting';
import { Testimonials } from './pages/Testimonials';
import { CallToAction } from './pages/components/CallToAction';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/land-services" element={<LandServices />} />
            <Route path="/sale-purchase" element={<SalePurchase />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<CallToAction />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}