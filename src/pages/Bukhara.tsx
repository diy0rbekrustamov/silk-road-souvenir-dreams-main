import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import bukharaImage from "@/assets/bukhara.jpg";
import Header from "../assets/Header.png";
import Bodey from "../assets/Body.png";
import FooterI from "../assets/Footer.png";
import img5 from "../assets/img5.webp";
import image4 from "../assets/image4.png";
import img2 from "../assets/img2.png";
import img1 from "../assets/img1.png";
import { useEffect } from "react";
const Bukhara = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-900 font-sans">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="relative h-96 flex items-center justify-center overflow-hidden">
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

      {/* Content 
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
      </section> */}

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
                Overview of Bukhara's history
              </h3>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Bukhara is an ancient oasis city along the fabled Silk Road and
                it is said that the sun shines up from the city for it is so
                noble. For centuries it was a centre of trade and Islam, earning
                the title Bukhoro-i-Sharif, or "Noble Bukhara" among Muslims
                (one of the seven holy cities of Islam). The city itself boasts
                impressive architecture and history. It is one of the few places
                in Central Asia where one can feel the heartbeat of ancient
                Central Asia. Most of the city remains intact and most of the
                250,000 inhabitants are members of families who have lived there
                for generations upon generations.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={img5}
                  alt="Bukhara wall"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                The city was founded in the 1st century AD. By the time of its
                capture by Arabs in the early 8th century, Bukhara had become an
                important trade and cultural center. It was a leading center of
                Islamic learning under the Arabs and the Persian Samanid
                dynasty, which held the city in the 9th and 10th centuries. It
                later was captured successively by the Qarakhanids and Tatars,
                and in 1555 it became the capital of an Uzbek emirate. The
                emirate was conquered in 1866 by Russia, which held it as a
                protectorate from 1868 to 1920; then the emir was removed, and
                the city was made the capital of the Bukhara People's Soviet
                Republic. From 1924 to 1991 the city was incorporated into the
                Uzbek Soviet Socialist Republic (UzSSR). Uzbekistan became an
                independent republic in 1991.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={image4}
                  alt="Bukhara building"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                The Bukharan region produces natural gas, cotton, fruit and
                silk. There is also a textile industry producing karakul pelts,
                local{" "}
                <a
                  href="http://ikhtiyor.bukharacity.com/"
                  className="font-['Papyrus',Arial] text-[#f15555] hover:text-red-600 hover:underline"
                >
                  carpets
                </a>{" "}
                and clothing. At the end of the Zarafshan river, Bukhara is also
                on the edge of Uzbekistan's agricultural belt and the large
                Kyzyl Kum and Kara Kum deserts (Red Sand and Black Sand
                deserts).
              </p>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Most impressive to the foreigner are the buildings which date to
                the 9th-10th centuries, and the overall atmosphere.
                Unfortunately Ghenghis Khan destroyed most of the city during
                his sojourn in the 13th century. The two buildings he didn't
                destroy are the Kalyan Minaret (12th century) and the Ismail
                Samani mausoleum (9th-10th century). Perhaps the most famous
                event from a western point of view that occurred in Bukhara was
                the beheading of two British government agents in 1842 after two
                years of captivity, much of which was endured in an insect and
                rat infested pit at the city jail, today known as the "Bug Pit".
                The famous prison is known by its Tajik name ‘Zindon’ and is
                located behind the Ark. The British agents were executed when
                the news of the famous defeat of the British garrison in Kabul
                reached Bukhara.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={img2}
                  alt="Bukhara csaray"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Buddhism, Zoroastrianism and Nestorian Christianity had been the
                prevailing religions before conversion to Islam under Arab
                conquest. There is also a fascinating history of the{" "}
                <a
                  href="sorry.htm"
                  className="font-['Papyrus',Arial] text-[#f15555] hover:text-red-600 hover:underline"
                >
                  Bukharan Jews
                </a>{" "}
                who have lived in the city and region since being exiled during
                the Babylonian conquest of Israel. Bukhara to this day contains
                a Jewish quarter and school although most of the Jews have
                emigrated since 1991 to either Israel or the USA.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={img1}
                  alt="Bukhara building"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                For the visitor, Bukhara is a place to enjoy authentic Central
                Asia. Carpets, hats, hand woven silk fabric, and clear blue sky
                framed by sandy domes and minarets are what greet the visitor
                today.
              </p>
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

export default Bukhara;
