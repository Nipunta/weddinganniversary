import React, { forwardRef } from 'react';
import { Calendar, Clock, MapPin, Shirt, Map } from 'lucide-react';

interface EventDetailsProps {
  isVisible: boolean;
  sectionIndex: number;
}

const EventDetails = forwardRef<HTMLDivElement, EventDetailsProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const handleViewLocation = () => {
      // Open Google Maps with the venue location
      window.open('https://maps.google.com/?q=Grand+Ballroom+Hotel+Elegance+Mumbai', '_blank');
    };

    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 animate-title-glow bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Event Details
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Date & Time Card */}
            <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-card-float">
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">Date & Time</h3>
                <p className="text-amber-900 font-bold text-lg mb-1 animate-split-reveal-text">December 15, 2024</p>
                <p className="text-amber-900 font-bold text-lg mb-1 animate-split-reveal-text">Saturday</p>
                <p className="text-amber-800 font-bold flex items-center justify-center space-x-2 animate-split-reveal-text">
                  <Clock size={16} />
                  <span>6:00 PM onwards</span>
                </p>
              </div>
            </div>

            {/* Venue Card */}
            <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-card-slide">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">Venue</h3>
                <p className="text-amber-900 font-bold text-lg mb-1 animate-split-reveal-text">Grand Ballroom</p>
                <p className="text-amber-900 font-bold text-lg mb-2 animate-split-reveal-text">Hotel Elegance</p>
                <p className="text-amber-800 font-bold text-sm mb-6 animate-split-reveal-text">
                  123 Celebration Avenue<br />
                  Mumbai, Maharashtra 400001
                </p>
                
                <button 
                  onClick={handleViewLocation}
                  className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 mx-auto"
                >
                  <Map size={20} />
                  <span>View Location</span>
                </button>
              </div>
            </div>

            {/* Dress Code Card */}
            <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-card-bounce">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Shirt className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">Dress Code</h3>
                <p className="text-amber-900 font-bold text-lg mb-2 animate-split-reveal-text">Cocktail Attire</p>
                <p className="text-amber-800 font-bold animate-split-reveal-text">Semi-formal preferred</p>
                <div className="mt-4 text-amber-300">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

EventDetails.displayName = 'EventDetails';

export default EventDetails;