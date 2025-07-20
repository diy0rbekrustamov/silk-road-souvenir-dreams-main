import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import bukharaImage from '@/assets/bukhara.jpg';
import samarkandImage from '@/assets/samarkand.jpg';

const cities = [
  {
    name: 'Bukhara',
    description: 'The Noble and Holy Bukhara, a living museum of Islamic architecture',
    image: bukharaImage,
    link: '/bukhara',
  },
  {
    name: 'Samarkand',
    description: 'The Crossroads of Cultures, featuring the magnificent Registan Square',
    image: samarkandImage,
    link: '/samarkand',
  },
  {
    name: 'Tashkent',
    description: 'The modern capital blending contemporary life with ancient traditions',
    image: bukharaImage,
    link: '/tashkent',
  },
  {
    name: 'Khiva',
    description: 'The ancient fortress city preserved in time',
    image: samarkandImage,
    link: '/khiva',
  },
];

const CitiesGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Historic Cities
          </h2>
          <div className="w-24 h-1 bg-uzbek-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the magnificent cities that once served as vital stops along the ancient Silk Road
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city) => (
            <Link key={city.name} to={city.link} className="group">
              <Card className="overflow-hidden hover:shadow-heritage transition-all duration-300 group-hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {city.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {city.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesGallery;