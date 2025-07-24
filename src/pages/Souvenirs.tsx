import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import souvenirsImage from "@/assets/souvenirs.jpg";

import carpet from "../assets/carpet.png";
import plate from "../assets/plate.png";
import metal from "../assets/metal.png";
import { useEffect } from "react";
const souvenirCategories = [
  {
    title: "Traditional Ceramics",
    description:
      "Hand-painted pottery with intricate blue and white patterns from Bukhara's master artisans",
    image: plate,
  },
  {
    title: "Silk Textiles & Suzani",
    description:
      "Vibrant ikat silk fabrics and embroidered suzani wall hangings with traditional motifs",
    image: carpet,
  },
  {
    title: "Metalwork & Jewelry",
    description:
      "Ornate brass bowls, silver jewelry with turquoise stones, and decorative metalwork",
    image: metal,
  },
];

const Souvenirs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  const whatsappNumber = "+12024982368"; // Replace with actual number
  const whatsappMessage =
    "Hello! I'm interested in authentic Uzbek souvenirs from your collection.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${souvenirsImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Authentic Souvenirs
          </h1>
          <p className="text-xl">from Bukhara & Samarkand</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-uzbek-blue hover:text-uzbek-blue/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          {/* Introduction */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-card rounded-lg shadow-elegant p-8 md:p-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Bringing Central Asia to Your Home
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground mb-8">
                    All of these items were brought directly from the UNESCO
                    heritage cities of Bukhara and Samarkand. These pieces carry
                    the unique history, craftsmanship, and culture of
                    Uzbekistan's ancient artisans. Perfect for those who want to
                    bring home a part of Central Asia.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Each item in our collection represents centuries of artistic
                    tradition, passed down through generations of master
                    craftsmen who continue to work in the same workshops where
                    their ancestors created treasures for Silk Road merchants.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Souvenir Categories */}
          <section className="py-16 bg-gradient-sand">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Collection
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {souvenirCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-300 bg-card"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-gradient-silk text-white p-8 rounded-lg text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Ready to Order?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              For orders, questions, or special requests, reach out to me on
              WhatsApp.
            </p>
            <Button
              variant="heritage"
              size="lg"
              onClick={openWhatsApp}
              className="text-lg px-8 py-3"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact on WhatsApp
            </Button>
            <p className="mt-4 text-sm text-white/80">
              I personally curate each item and can help you find the perfect
              piece for your collection.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Souvenirs;
