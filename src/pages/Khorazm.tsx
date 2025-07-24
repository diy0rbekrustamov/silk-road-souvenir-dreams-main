import Navigation from "@/components/Navigation";
import { Link, useLocation } from "react-router-dom";
import Bodey from "../assets/Body.png";
import FooterI from "../assets/Footer.png";
import Header from "../assets/Header.png";
// Importing images for the Khorazm page
import { useEffect } from "react";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";

// Khorazm component

const Khorazm = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-900 font-sans">
      <Navigation />

      {/* Hero Section
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

      {/* Content 
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

      <Footer /> */}

      <div className="flex-1 flex flex-col gap-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header Section */}
        <div className="flex justify-center">
          <div className="bg-black flex-1 h-16 hidden md:block"></div>
          <div
            className="w-full max-w-[796px] h-16 bg-no-repeat"
            style={{
              backgroundImage: `url(${Header})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
          <div className="bg-black flex-1 h-16 hidden md:block"></div>
        </div>

        {/* Main Content */}
        <div className="flex justify-center flex-1">
          <div className="bg-black flex-1 hidden md:block"></div>
          <div
            className="w-full max-w-[796px] bg-no-repeat px-4 py-8"
            style={{
              backgroundImage: `url(${Bodey})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="mx-auto max-w-prose px-4 sm:px-6">
              <h3 className="text-center text-red-600 text-xl font-['Papyrus']">
                Overview of Khorezm's history{" "}
              </h3>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Khorezm (also spelled Khwarazm) is one of the most ancient
                regions of Central Asia, located along the lower Amu Darya
                River. Its history dates back more than 2,500 years and it
                played a key role in the development of culture, science, and
                trade in the region. The region was once an independent
                civilization and home to the Khorezmian Empire, which flourished
                between the 9th and 13th centuries. The capital cities of
                ancient Khorezm, such as Toprak-Kala and Kyzyl-Kala, were
                centers of learning and administration. Khorezm was also known
                for its advanced irrigation system, which made agriculture
                possible in the desert environment.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={i5}
                  alt="Bukhara wall"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                The region faced a turning point in the 13th century when it was
                devastated by Genghis Khan’s Mongol invasion, leading to the
                fall of the Khorezmian Empire. Later, the region came under the
                control of Timurids, then Shaybanids, and eventually became part
                of the Khanate of Khiva, centered in the city of Khiva. In the
                19th century, Khiva became a protectorate of the Russian Empire,
                and during the Soviet era, it was part of the Uzbek SSR. Since
                Uzbekistan’s independence in 1991, Khorezm Region has been an
                important part of the country, with Khiva recognized as a UNESCO
                World Heritage Site.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={i6}
                  alt="Bukhara building"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Today, Khorezm is known for its unique culture, music, dance,
                and traditional clothing. The region’s people are famous for
                lazgi – a fast-paced, energetic traditional dance that is
                recognized by UNESCO as intangible cultural heritage. The
                Khorezm dialect of Uzbek also differs slightly from the
                standard, reflecting the region’s deep-rooted identity.
              </p>

              <div className="flex justify-center my-4">
                <img
                  src={i7}
                  alt="Bukhara csaray"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Khiva, the heart of modern-day Khorezm, is an open-air museum
                city. Its Ichan Qala (Inner Fortress) is home to beautifully
                preserved madrasahs, mosques, palaces, and minarets from the
                18th and 19th centuries. Some of the most famous sites include
                the Kalta Minor, Juma Mosque, and Kunya Ark. Tourists who visit
                Khorezm are amazed by the hospitality, colorful bazaars,
                handwoven carpets, and traditional cuisine like shivit oshi
                (green noodle dish). It’s a place where ancient history meets
                vibrant modern culture.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={i8}
                  alt="Bukhara building"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
            </div>
          </div>
          <div className="bg-black flex-1 hidden md:block"></div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-center">
          <div className="bg-black flex-1 hidden md:block"></div>
          <div
            className="w-full max-w-[796px] h-[75px] bg-no-repeat flex justify-center items-center gap-2 px-4 sm:px-6 flex-wrap"
            style={{
              backgroundImage: `url(${FooterI})`,
              backgroundSize: "100% 100%",
            }}
          >
            <Link
              to="/"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Home
            </Link>
            <span className="text-sm">::</span>
            <Link
              to="/arts"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Arts
            </Link>
            <span className="text-sm">::</span>
            <Link
              to="/bukharan-jews"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Bukharan Jews
            </Link>
            <span className="text-sm">::</span>
            <a
              href="http://ikhtiyor.bukharacity.com/"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Carpets
            </a>
            <span className="text-sm">::</span>
            <a
              href="http://nazira.bukharacity.com/"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Hotel
            </a>
            <span className="text-sm">::</span>
            <Link
              to="/photo-album"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Photo album
            </Link>
            <span className="text-sm">::</span>
            <Link
              to="/travel"
              className="font-['Lucida_Sans_Unicode',Arial] text-sm text-[#f15555] hover:text-red-600 hover:underline"
            >
              Travel info
            </Link>
          </div>
          <div className="bg-black flex-1 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Khorazm;
