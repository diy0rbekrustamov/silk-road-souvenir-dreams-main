import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import khorazmImage from "@/assets/xorazm.png";

const Khorazm = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${khorazmImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Khorazm
          </h1>
          <p className="text-xl">The Ancient Oasis</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-uzbek-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-uzbek-blue hover:text-uzbek-blue/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-background p-8 rounded-lg shadow-heritage border border-uzbek-sand">
            <div className="font-serif text-lg leading-relaxed space-y-6 text-foreground">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-uzbek-blue first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Khorazm, one of the most ancient regions of Central Asia, has
                been a cradle of civilization for over 2,500 years. This
                historic oasis in the Amu Darya delta was once the heart of a
                powerful empire that stretched from the Caspian Sea to the
                borders of India.
              </p>

              <p>
                The region is renowned for its unique architectural heritage,
                including the ancient city of Khiva, which stands as a perfectly
                preserved medieval trading post. The mud-brick fortresses and
                intricate tilework of Khorazm represent some of the finest
                examples of Islamic architecture in Central Asia.
              </p>

              <p>
                Khorazm was the birthplace of great scholars and mathematicians,
                including Al-Khwarizmi, who gave his name to the word
                "algorithm." The region's strategic location made it a crucial
                link between the civilizations of the East and West.
              </p>

              <div className="bg-uzbek-sand p-6 rounded-lg my-8">
                <h3 className="font-serif text-2xl font-bold text-uzbek-blue mb-4">
                  Historic Highlights
                </h3>
                <ul className="space-y-2">
                  <li>• Itchan Kala - The walled inner city of Khiva</li>
                  <li>• Kalta Minor - The unfinished blue minaret</li>
                  <li>• Tash Hauli Palace - Royal residence of Khiva khans</li>
                  <li>• Juma Mosque - Famous for its 200 wooden columns</li>
                  <li>• Islam Khoja Minaret - The tallest minaret in Khiva</li>
                </ul>
              </div>

              <p>
                Today, Khorazm continues to fascinate visitors with its
                well-preserved monuments and traditional crafts. The region's
                carpet weaving, wood carving, and metalwork traditions have been
                passed down through generations, maintaining the artistic legacy
                of this ancient land.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button variant="silk" size="lg" asChild>
                <Link to="/souvenirs">Shop Khorazm Souvenirs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Khorazm;
