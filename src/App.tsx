import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <WhyUs />
      <Coverage />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
