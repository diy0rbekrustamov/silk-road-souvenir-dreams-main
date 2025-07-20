import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import bukharaImage from '@/assets/bukhara.jpg';

const Bukhara = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bukharaImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Bukhara</h1>
          <p className="text-xl">The Noble and Holy</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-uzbek-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-uzbek-blue hover:text-uzbek-blue/80 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-background p-8 rounded-lg shadow-heritage border border-uzbek-sand">
            <div className="font-serif text-lg leading-relaxed space-y-6 text-foreground">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-uzbek-blue first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Bukhara, one of the most ancient cities in Central Asia, has been a center of trade, scholarship, culture and religion for over a millennium. 
                Known as "Bukhoro-i-Sharif" (Noble Bukhara), this sacred city was once one of the most important centers of Islamic learning.
              </p>

              <p>
                The historic center of Bukhara, listed as a UNESCO World Heritage Site, contains numerous mosques, madrasas, and monuments that have been preserved for centuries. 
                The city's architectural ensemble includes the famous Kalyan Minaret, known as the "Tower of Death," which has stood for nearly 900 years.
              </p>

              <p>
                Walking through Bukhara's narrow streets feels like traveling back in time. The city's trading domes (toki) still house craftsmen and merchants, 
                continuing traditions that date back to the days when Bukhara was a major stop on the Silk Road.
              </p>

              <div className="bg-uzbek-sand p-6 rounded-lg my-8">
                <h3 className="font-serif text-2xl font-bold text-uzbek-blue mb-4">Historic Highlights</h3>
                <ul className="space-y-2">
                  <li>• The Ark of Bukhara - Ancient royal fortress</li>
                  <li>• Kalyan Mosque and Minaret - Architectural masterpiece</li>
                  <li>• Poi Kalyan Complex - Sacred religious center</li>
                  <li>• Trading Domes - Traditional covered markets</li>
                  <li>• Chor-Minor - Unique four-minaret structure</li>
                </ul>
              </div>

              <p>
                Today, Bukhara continues to be a living museum where ancient traditions blend seamlessly with modern life. 
                The city's craftsmen still create beautiful textiles, ceramics, and metalwork using techniques passed down through generations.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button variant="silk" size="lg" asChild>
                <Link to="/souvenirs">Shop Bukhara Souvenirs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bukhara;