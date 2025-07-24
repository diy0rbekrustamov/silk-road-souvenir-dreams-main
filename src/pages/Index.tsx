import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CitiesGallery from "@/components/CitiesGallery";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
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
