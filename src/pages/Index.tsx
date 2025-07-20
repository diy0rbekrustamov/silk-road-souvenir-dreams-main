import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CitiesGallery from '@/components/CitiesGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CitiesGallery />
      <Footer />
    </div>
  );
};

export default Index;
