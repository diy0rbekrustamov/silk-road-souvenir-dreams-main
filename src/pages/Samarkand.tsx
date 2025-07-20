import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"; // Agar kerak bo‘lsa
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import samarkandImage from "@/assets/samarkand.jpg";
import Header from "../assets/Header.png";
import Bodey from "../assets/Body.png";
import FooterI from "../assets/Footer.png";
import img5 from "../assets/img5.webp";
import "../style.css";
import image4 from "../assets/image4.png";
import img2 from "../assets/img2.png";
import img1 from "../assets/img1.png";
const Samarkand = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <table
          width="100%"
          style={{ borderCollapse: "collapse", border: 0, padding: 0 }}
          align="center"
        >
          <tbody>
            <tr>
              <td style={{ backgroundColor: "#000000" }} height="66">
                &nbsp;
              </td>
              <td
                width="796"
                height="66"
                valign="bottom"
                style={{
                  backgroundImage: `url(${Header})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                &nbsp;
              </td>
              <td style={{ background: "#000000" }} height="66">
                &nbsp;
              </td>
            </tr>

            <tr>
              <td style={{ background: "#000000" }}>&nbsp;</td>
              <td
                style={{
                  backgroundImage: `url(${Bodey})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  padding: "20px",
                }}
                width="796"
              >
                <h1 className="text-red-600 text-2xl text-center font-bold font-[Papyrus]">
                  Overview of Bukhara's history
                </h1>

                <blockquote>
                  <p className="pap">
                    <b>B</b>ukhara is an ancient oasis city along the fabled
                    Silk Road and it is said that the sun shines up from the
                    city for it is so noble. For centuries it was a centre of
                    trade and Islam, earning the title Bukhoro-i-Sharif, or
                    "Noble Bukhara" among Muslims (one of the seven holy cities
                    of Islam). The city itself boasts impressive architecture
                    and history. It is one of the few places in Central Asia
                    where one can feel the heartbeat of ancient Central Asia.
                    Most of the city remains intact and most of the 250,000
                    inhabitants are members of families who have lived there for
                    generations upon generations.
                  </p>

                  <div className="flex justify-center my-4">
                    <img src={img5} width="394" height="180" alt="img5" />
                  </div>
                  <p className="pap">
                    <b>T</b>he city was founded in the 1st century AD. By the
                    time of its capture by Arabs in the early 8th century,
                    Bukhara had become an important trade and cultural center.
                    It was a leading center of Islamic learning under the Arabs
                    and the Persian Samanid dynasty, which held the city in the
                    9th and 10th centuries. It later was captured successively
                    by the Qarakhanids and Tatars, and in 1555 it became the
                    capital of an Uzbek emirate. The emirate was conquered in
                    1866 by Russia, which held it as a protectorate from 1868 to
                    1920; then the emir was removed, and the city was made the
                    capital of the Bukhara People's Soviet Republic. From 1924
                    to 1991 the city was incorporated into the Uzbek Soviet
                    Socialist Republic (UzSSR). Uzbekistan became an independent
                    republic in 1991.
                  </p>

                  <div className="flex justify-center my-4">
                    <img src={image4} width="394" height="180" alt="img5" />
                  </div>
                  <p className="pap">
                    <b>T</b>he Bukharan region produces natural gas, cotton,
                    fruit and silk. There is also a textile industry producing
                    karakul pelts, local
                    <a href="#" className="linka">
                      <h1
                        style={{
                          fontFamily: "Papyrus, Arial, Helvetica, sans-serif",
                        }}
                      >
                        carpets
                      </h1>
                    </a>
                    and clothing. At the end of the Zarafshan river, Bukhara is
                    also on the edge of Uzbekistan's agricultural belt and the
                    large Kyzyl Kum and Kara Kum deserts (Red Sand and Black
                    Sand deserts).
                  </p>

                  <p className="pap">
                    <b>M</b>ost impressive to the foreigner are the buildings
                    which date to the 9th-10th centuries, and the overall
                    atmosphere. Unfortunately Ghenghis Khan destroyed most of
                    the city during his sojourn in the 13th century. The two
                    buildings he didn't destroy are the Kalyan Minaret (12th
                    century) and the Ismail Samani mausoleum (9th-10th century).
                    Perhaps the most famous event form a western point of view
                    that occurred in Bukhara was the beheading of two British
                    government agents in 1842 after two years of captivity, much
                    of which was endured in an insect and rat infested pit at
                    the city jail, today known as the "Bug Pit". The famous
                    prison is known by its Tajik name ‘Zindon’ and is located
                    behind the Ark. The British agents were executed when the
                    news of the famous defeat of the British garrison in Kabul
                    reached Bukhara.
                  </p>

                  <div className="flex justify-center my-4">
                    <img src={img2} width="394" height="180" alt="img5" />
                  </div>
                  <p className="pap">
                    <b>B</b>uddhism, Zoroastroism and Nestorian Christianity had
                    been the prevailing religions before conversion to Islam
                    under Arab conquest. There is also a fascinating history of
                    the
                    <a href="#" className="linka">
                      <h1
                        style={{
                          fontFamily: "Papyrus, Arial, Helvetica, sans-serif",
                        }}
                      >
                        Bukharan Jews
                      </h1>
                    </a>
                    who have lived in the city and region since being exiled
                    during the Babylonian conquest of Israel. Bukhara to this
                    day contains a Jewish quarter and school although most of
                    the Jews have emigrated since 1991 to either Israel or the
                    USA.
                  </p>

                  <div className="flex justify-center my-4">
                    <img src={img1} width="394" height="180" alt="img5" />
                  </div>
                  <p>
                    <span className="pap">
                      <b>F</b>or the visitor, Bukhara is a place to enjoy
                      authentic Central Asia. Carpets, hats, hand woven silk
                      fabric, and clear blue sky framed by sandy domes and
                      minarets are what greet the visitor today. <br />
                    </span>
                  </p>
                </blockquote>
              </td>
              <td style={{ backgroundColor: "#000000" }}>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#000000" }}>&nbsp;</td>
              <td
                width="796"
                height="75"
                style={{
                  backgroundImage: `url(${FooterI})`,
                }}
                align="center"
              >
                .::
                <a
                  className="linka"
                  href="https://www.bukharacity.com/index.htm"
                >
                  Home
                </a>
                ::. .::
                <a
                  className="linka"
                  href="https://www.bukharacity.com/sorry.htm"
                >
                  Arts
                </a>
                ::. .::
                <a
                  className="linka"
                  href="https://www.bukharacity.com/jews.htm"
                >
                  Bukharan Jews
                </a>
                ::. .::<a href="https://ikhtiyor.bukharacity.com/">Carpets</a>
                ::. .::<a href="https://nazira.bukharacity.com/">Hotel</a>::.
                .::
                <a
                  className="linka"
                  href="https://www.bukharacity.com/album/album.htm"
                >
                  Photo album
                </a>
                ::. .::
                <a
                  className="linka"
                  href="https://www.bukharacity.com/travel.htm"
                >
                  Travel info
                </a>
                ::.
              </td>
              <td style={{ backgroundColor: "#000000" }}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Samarkand;
