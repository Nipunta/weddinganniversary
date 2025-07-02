import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface SaveTheDatePageProps {
  onContinue: () => void;
}

const SaveTheDatePage: React.FC<SaveTheDatePageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image - New image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg copy copy copy.webp')`,
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Couple Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-amber-300 shadow-2xl animate-photo-glow">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Anniversary Couple"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Guest Name - Matching "You're Invited" gradient with Typewriter Animation */}
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-bold italic animate-typewriter bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent">
              Dear Priya
            </p>
          </div>

          {/* Main Heading with Custom Gradient Glow and Float Animation */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-lg animate-gradient-glow-float bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent">
              You're Invited
            </h1>
            <p className="text-xl md:text-2xl font-bold italic animate-fade-in-delayed bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent">
              To celebrate 25 years of love & togetherness
            </p>
          </div>

          {/* Event Details - Matching "You're Invited" gradient */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center justify-center space-x-3 animate-slide-in-left">
              <Calendar size={24} className="text-amber-300" />
              <span className="text-lg md:text-xl bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent font-bold">December 15, 2024</span>
            </div>
            <div className="flex items-center justify-center space-x-3 animate-slide-in-right">
              <Clock size={24} className="text-amber-300" />
              <span className="text-lg md:text-xl bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent font-bold">6:00 PM onwards</span>
            </div>
            <div className="flex items-center justify-center space-x-3 animate-slide-in-left">
              <MapPin size={24} className="text-amber-300" />
              <span className="text-lg md:text-xl bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent font-bold">Grand Ballroom, Hotel Elegance</span>
            </div>
          </div>

          {/* Continue Button - Matching "You're Invited" gradient text */}
          <button
            onClick={onContinue}
            className="group bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-button-bounce"
          >
            <span className="group-hover:mr-2 transition-all duration-300 bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] bg-clip-text text-transparent font-bold">
              See Full Invitation
            </span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              ✨
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDatePage;