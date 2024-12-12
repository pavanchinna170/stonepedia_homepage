import React from 'react';
import Navbar from './Components/Navbar'; // Adjust the path accordingly
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;