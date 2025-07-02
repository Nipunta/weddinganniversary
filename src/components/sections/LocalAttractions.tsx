import React, { forwardRef, useEffect, useState } from 'react';
import { MapPin, Camera, Star } from 'lucide-react';

interface LocalAttractionsProps {
  isVisible: boolean;
  sectionIndex: number;
}

const attractions = [
  {
    id: 1,
    name: 'Gateway of India',
    description: 'Iconic monument and popular tourist destination',
    image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=600',
    distance: '2.5 km',
    type: 'Historical Monument',
    icon: Camera,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Marine Drive',
    description: 'Beautiful seaside promenade perfect for evening walks',
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600',
    distance: '1.8 km',
    type: 'Scenic Drive',
    icon: MapPin,
    rating: 4.7
  },
  {
    id: 3,
    name: 'Chhatrapati Shivaji Museum',
    description: 'Premier museum showcasing art and history',
    image: 'https://images.pexels.com/photos/1193502/pexels-photo-1193502.jpeg?auto=compress&cs=tinysrgb&w=600',
    distance: '3.2 km',
    type: 'Museum',
    icon: Star,
    rating: 4.6
  }
];

const LocalAttractions = forwardRef<HTMLDivElement, LocalAttractionsProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (isVisible && !hasAnimated) {
        setHasAnimated(true);
      }
    }, [isVisible, hasAnimated]);

    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-center mb-4 bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent ${
            hasAnimated ? 'animate__animated animate__bounceIn' : ''
          }`}
          style={{ animationDuration: '1s' }}>
            Local Attractions
          </h2>
          <p className="text-amber-900 font-bold text-center text-lg mb-16 animate-fade-in-up bg-gradient-to-r from-amber-800 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Explore these wonderful places while you're in town
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.id}
                className={`sweeping-light-card group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  index === 0 ? 'animate-card-float' : 
                  index === 1 ? 'animate-card-slide' : 'animate-card-bounce'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <attraction.icon size={20} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-amber-700 transition-colors duration-300 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
                      {attraction.name}
                    </h3>
                    <span className="text-amber-300 text-sm font-bold">
                      {attraction.distance}
                    </span>
                  </div>
                  
                  <p className="text-amber-800 font-bold text-sm mb-3 animate-split-reveal-text">
                    {attraction.type}
                  </p>
                  
                  <p className="text-amber-900 font-bold text-sm leading-relaxed animate-split-reveal-text">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-amber-900 font-bold text-lg animate-fade-in-delayed bg-gradient-to-r from-amber-800 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
              Need directions or recommendations? Our concierge team is here to help!
            </p>
          </div>
        </div>
      </section>
    );
  }
);

LocalAttractions.displayName = 'LocalAttractions';

export default LocalAttractions;