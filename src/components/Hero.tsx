import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import uzbekistanHero from "../assets/uzbekistan-hero.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${uzbekistanHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Uzbekistan
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in delay-300">
          Discover the magical Silk Road cities, ancient heritage, and timeless
          beauty of Central Asia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button
            variant="silk"
            size="lg"
            onClick={scrollToAbout}
            className="text-lg px-8 py-3"
          >
            Explore Heritage
          </Button>
          <Button
            onClick={() => navigate("/souvenirs")}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 border-white text-black hover:bg-white hover:text-foreground"
          >
            Shop Souvenirs
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="h-6 w-6 text-white cursor-pointer"
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default Hero;
