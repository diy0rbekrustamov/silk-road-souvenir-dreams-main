import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import tashkentImage from "../assets/Tashkenthero.png";
import { useEffect } from "react";

const Tashkent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tashkentImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Tashkent
          </h1>
          <p className="text-xl">The Stone City</p>
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
              <h2 className="font-serif text-3xl font-bold text-uzbek-blue mb-6">
                History of Tashkent
              </h2>

              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-uzbek-blue first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                The first mention of Tashkent in chronicles is found in the 2nd
                century BC under various names: Shash-tepa, Chach-tepa, Shi,
                Zheshi and Yueni. It was a thriving trading city on the Great
                Silk Road from China to the Mediterranean. The invasion of the
                Arabs in the 8th century turned it into ruins. The army under
                the green banner of the Prophet Muhammad defeated the
                Zoroastrianism here and established Islam as the dominant
                religion in the area.
              </p>

              <p>
                During the 11th century, the name Tashkent appeared, which means
                a "Stone City", as from Uzbek "tosh" is translated as stone. In
                the Middle Ages, the city was a part of the empire of Timur
                (Tamerlane). At the end of the 18th century, the government
                Yunuszha proclaimed the city and vast lands in the district as
                the Tashkent state, but it did not last long and was defeated by
                the neighboring Kokand Khanate which was then later defeated by
                the Russian army.
              </p>

              <p>
                Tashkent was surrounded by a fortress wall that had 12 gates
                with some of them named according to the city the road from the
                gate was leading to, such as Samarkand or Kokand. Sadly, none of
                the original gates have survived but there are plans to
                reconstruct the Tashkent gates by 2026.
              </p>

              <div className="bg-uzbek-sand p-6 rounded-lg my-8">
                <h3 className="font-serif text-2xl font-bold text-uzbek-blue mb-4">
                  Modern Era
                </h3>
                <p className="mb-4">
                  The modern history of Tashkent starts in the late 18th century
                  again with the rise in trade but this time from tsarist
                  Russia. On April 26, 1966, an earthquake with the magnitude of
                  7.5 destroyed the city almost totally. Only very few
                  historical buildings, mosques and mausoleums from old Tashkent
                  survived the earthquake.
                </p>
                <p>
                  The whole world helped to rebuild Tashkent, the architects and
                  engineers from almost all countries of the former USSR were
                  sent to assist Uzbekistan and consequently many of them
                  finally settled in the hospitable city. As a result, Tashkent
                  was rebuilt within the next three years.
                </p>
              </div>

              <p>
                As Tashkent was part of the Soviet Union, Stalin's mass
                relocations brought Koreans, Volga Germans, and Crimean Tatars
                to the city. The results of this reconstruction can be seen very
                well in a lavish amount of Soviet style buildings and
                exceptional Soviet architecture and mosaics.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button variant="silk" size="lg" asChild>
                <Link to="/souvenirs">Shop Tashkent Souvenirs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tashkent;
