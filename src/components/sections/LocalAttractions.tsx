import React, { forwardRef } from 'react';
import { MapPin, Camera, Coffee, ShoppingBag } from 'lucide-react';

interface LocalAttractionsProps {
  isVisible: boolean;
  sectionIndex: number;
}

const LocalAttractions = forwardRef<HTMLDivElement, LocalAttractionsProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const attractions = [
      {
        icon: Camera,
        name: 'Scenic Viewpoint',
        description: 'Beautiful panoramic views perfect for photos',
        distance: '5 minutes walk'
      },
      {
        icon: Coffee,
        name: 'Cozy Café',
        description: 'Local coffee shop with delicious pastries',
        distance: '2 minutes walk'
      },
      {
        icon: ShoppingBag,
        name: 'Artisan Market',
        description: 'Local crafts and unique souvenirs',
        distance: '10 minutes walk'
      },
      {
        icon: MapPin,
        name: 'Historic Garden',
        description: 'Peaceful gardens with beautiful flowers',
        distance: '15 minutes walk'
      }
    ];

    return (
      <div
        ref={ref}
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <MapPin className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Local Attractions
            </h2>
            <p className="text-lg text-gray-600">
              Explore the beautiful area around our venue
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <IconComponent className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {attraction.description}
                  </p>
                  <p className="text-sm text-rose-500 font-medium">
                    {attraction.distance}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-rose-100 to-amber-100 rounded-lg p-6">
            <p className="text-lg text-gray-700">
              Take some time to explore the local area and create more beautiful memories during your visit!
            </p>
          </div>
        </div>
      </div>
    );
  }
);

LocalAttractions.displayName = 'LocalAttractions';

export default LocalAttractions;