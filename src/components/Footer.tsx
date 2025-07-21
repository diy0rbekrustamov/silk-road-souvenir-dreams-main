import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-uzbek-gold mb-4">
              Uzbekistan Heritage
            </h3>
            <p className="text-background/80 leading-relaxed">
              Discover the magical Silk Road cities and authentic craftsmanship
              of Uzbekistan. Bringing you heritage souvenirs from UNESCO World
              Heritage sites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="flex gap-10">
              <li>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-background/80 hover:text-uzbek-gold transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bukhara"
                      className="text-background/80 hover:text-uzbek-gold transition-colors"
                    >
                      Bukhara
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/samarkand"
                      className="text-background/80 hover:text-uzbek-gold transition-colors"
                    >
                      Samarkand
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link
                      to="/tashkent"
                      className="text-background/80 hover:text-uzbek-gold transition-colors"
                    >
                      Tashkent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/khorazm"
                      className="text-background/80 hover:text-uzbek-gold transition-colors"
                    >
                      Khorazm
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/souvenirs"
                      className="text-background/80 hover:text-uzbek-gold transition-colors"
                    >
                      Souvenirs
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-uzbek-gold" />
                <span className="text-background/80">+1 (202) 498-2368</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-uzbek-gold" />
                <span className="text-background/80">
                  akmal.khakimov@gwu.edu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-uzbek-gold" />
                <span className="text-background/80"> +1 (202) 498-2368</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} Uzbekistan Heritage. All rights
            reserved. Authentic souvenirs from the Silk Road.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
