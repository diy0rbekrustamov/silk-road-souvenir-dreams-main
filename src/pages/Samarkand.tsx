import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import samarkandImage from "@/assets/samarkand.jpg";
import Header from "../assets/Header.png";
import Bodey from "../assets/Body.png";
import FooterI from "../assets/Footer.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";

import "../style.css";

const Samarkand = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-900 font-sans">
      <Navigation />

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
                Overview of Samarkand's history
              </h3>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Samarkand is one of the oldest cities in the world, known for
                its rich history and role along the Silk Road. The city is often
                called the "Crossroad of Cultures" due to the many civilizations
                that have passed through it. Samarkand was once the capital of
                the ancient Sogdian civilization and later became a key city in
                the Achaemenid Empire under Persian rule. Its strategic location
                helped it flourish as a center of trade, culture, and science.
                Most notably, it gained immense prominence in the 14th century
                when it was chosen as the capital by Amir Temur (Tamerlane), the
                great conqueror. Under his rule, Samarkand experienced a golden
                age of architecture and scholarship. The Registan Square,
                majestic madrassas, and observatories built during this era
                remain among the city's most iconic landmarks today. The city's
                atmosphere still echoes the legacy of its vibrant past.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={i1}
                  alt="Bukhara wall"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                The city has witnessed many ruling powers, including the Arabs,
                Samanids, Seljuks, and Mongols. After the fall of the Timurid
                Empire, Samarkand came under the control of the Shaybanids and
                later became part of the Bukhara Khanate. In 1868, it was
                conquered by the Russian Empire. During Soviet times, it became
                part of the Uzbek Soviet Socialist Republic (UzSSR), and since
                1991 it has been part of the independent Republic of Uzbekistan.
                Today, Samarkand is a UNESCO World Heritage Site, drawing
                thousands of visitors every year. It remains a proud symbol of
                Uzbekistan’s cultural and scientific achievements.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={i2}
                  alt="Bukhara building"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                The Samarkand region is famous for its diverse production
                including silk, cotton, fruits, and especially paper made from
                mulberry bark, which was first introduced during the Chinese
                influence. Samarkand’s traditional crafts include ceramics, silk
                weaving, and fine embroidery. The city is also known for its
                Samarkand bread (non), which is round, golden, and has a special
                taste and texture unique to the region.
              </p>

              <div className="flex justify-center my-4">
                <img
                  src={i3}
                  alt="Bukhara csaray"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Many of Samarkand's architectural wonders date from the Timurid
                dynasty (14th–15th centuries). The Ulugh Beg Madrasah, the
                Bibi-Khanym Mosque, and Shah-i-Zinda mausoleum complex are among
                the most admired monuments. Despite the destruction caused by
                Mongol invasions earlier, Timur rebuilt the city with grand
                vision and beauty. Ulugh Beg, Timur’s grandson, was also a
                brilliant astronomer, and his Ulugh Beg Observatory is
                considered one of the most advanced scientific centers of the
                medieval Islamic world.
              </p>
              <div className="flex justify-center my-4">
                <img
                  src={i4}
                  alt="Bukhara building"
                  className="w-full max-w-[394px] h-auto"
                />
              </div>
              <p className="mt-4 text-[#123456] font-['Papyrus',Arial] text-base first-letter:text-2xl first-letter:font-bold">
                Samarkand, like Bukhara, has a long religious history. Before
                Islam, the region practiced Zoroastrianism and Buddhism. With
                the Arab conquest, it became a key Islamic center. The city was
                home to many ethnicities and religious groups, including Jews,
                who had settled there as early as the Babylonian exile. Even
                today, traces of Jewish quarters remain, although most Jews
                emigrated in the late 20th century. Today, Samarkand is a modern
                city that preserves its historical charm. Visitors are enchanted
                by its turquoise domes, tilework mosaics, and the peaceful
                courtyards of madrassas. Samarkand is a symbol of Uzbekistan’s
                heritage and continues to be a major destination for tourists
                from around the world.
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

export default Samarkand;
