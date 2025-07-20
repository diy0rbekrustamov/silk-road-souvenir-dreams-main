const About = () => {
  return (
    <section id="about" className="py-20 bg-uzbek-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Uzbekistan
          </h2>
          <div className="w-24 h-1 bg-uzbek-blue mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Magical Silk Road cities, wide open spaces and a rich history. Uzbekistan has come under the rule of the Macedonian, Persian, Arab, and Mongol empires. 
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cities like <span className="font-semibold text-uzbek-blue">Bukhara</span>, <span className="font-semibold text-uzbek-blue">Samarkand</span>, and <span className="font-semibold text-uzbek-blue">Khiva</span> are UNESCO heritage treasures with world-class architecture.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              These ancient cities showcase stunning Islamic architecture, intricate tilework, and centuries-old traditions that continue to captivate visitors from around the world.
            </p>
          </div>

          <div className="bg-gradient-desert p-8 rounded-lg shadow-heritage">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              UNESCO World Heritage Sites
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-uzbek-blue rounded-full"></div>
                <span className="text-muted-foreground">Historic Centre of Bukhara</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-uzbek-blue rounded-full"></div>
                <span className="text-muted-foreground">Samarkand - Crossroads of Cultures</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-uzbek-blue rounded-full"></div>
                <span className="text-muted-foreground">Itchan Kala in Khiva</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-uzbek-blue rounded-full"></div>
                <span className="text-muted-foreground">Shakhrisyabz Historic Centre</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;