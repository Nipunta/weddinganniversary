import React, { useState } from 'react';
import { Fingerprint } from 'lucide-react';

interface EntrancePageProps {
  onEnter: () => void;
}

const EntrancePage: React.FC<EntrancePageProps> = ({ onEnter }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    
    // Show pigeon and scroll animation
    setTimeout(() => {
      setShowScroll(true);
    }, 500);

    // Wait for typewriter animation to complete (15ms per character for "You're Invited" = ~195ms)
    // Plus 500ms delay after completion
    setTimeout(() => {
      onEnter();
    }, 3200);
  };

  // Generate entrance falling petals with reduced count
  const generateEntrancePetals = () => {
    const petals = [];
    for (let i = 0; i < 8; i++) {
      // Enhanced drift and rotation for more natural movement
      const driftX = (Math.random() - 0.5) * 100; // Slightly reduced drift range for entrance
      const rotation = Math.random() * 720 + 360; // More rotation variety
      const swayAmount = Math.random() * 20 + 8; // Variable sway amount
      
      petals.push(
        <div
          key={i}
          className="falling-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${7 + Math.random() * 6}s`, // 7-13 seconds for varied speeds
            animationDelay: `${Math.random() * 8}s`, // Spread out over 8 seconds
            '--drift-x': `${driftX}px`,
            '--rotation': `${rotation}deg`,
            '--sway-amount': `${swayAmount}px`,
          } as React.CSSProperties}
        />
      );
    }
    return petals;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image - New image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/w2 copy copy.webp')`,
        }}
      />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="text-amber-300 text-xs opacity-70">✨</div>
          </div>
        ))}
      </div>

      {/* Entrance Falling Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {generateEntrancePetals()}
      </div>

      {/* Ripple Animation */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-32 h-32 border-2 border-white/30 rounded-full animate-ping"></div>
          <div className="absolute w-48 h-48 border-2 border-white/20 rounded-full animate-ping animation-delay-300"></div>
          <div className="absolute w-64 h-64 border-2 border-white/10 rounded-full animate-ping animation-delay-600"></div>
        </div>
      )}

      {/* Pigeon Animation */}
      {showScroll && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-float">
            <div className="text-6xl animate-bounce">🕊️</div>
          </div>
        </div>
      )}

      {/* Scroll Animation */}
      {showScroll && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transform animate-unfurl">
            <div className="bg-amber-50 p-8 rounded-lg shadow-2xl border-4 border-amber-200 max-w-sm mx-4">
              <div className="text-center">
                <h2 className="text-2xl font-serif text-amber-900 mb-2 animate-fast-typewriter">You're Invited</h2>
                <p className="text-amber-800 text-sm">To a celebration of love and togetherness</p>
                <div className="mt-4 text-xs text-amber-700">Opening invitation...</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Entrance Content */}
      {!showScroll && (
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-display md:text-6xl font-serif-elegant mb-2 animate-anniversary-entrance bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 bg-clip-text text-transparent hover:animate-text-glow transition-all duration-300 ease-in-out">
                Anniversary Celebration
              </h1>
              <p className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-800 bg-clip-text text-transparent text-body-large md:text-heading-2 font-sans-clean font-medium italic animate-fade-in-up">
                A journey of 25 beautiful years
              </p>
            </div>

            <button
              onClick={handleEnter}
              disabled={isAnimating}
              className="group relative p-8 rounded-full shadow-2xl btn-lift disabled:opacity-50 overflow-hidden will-change-transform"
              style={{
                backgroundImage: `url('/w2.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/80 to-amber-600/80 rounded-full"></div>
              <Fingerprint 
                size={48} 
                className="text-white group-hover:animate-pulse relative z-10" 
              />
              {isAnimating && (
                <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
              )}
            </button>

            <p className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-800 bg-clip-text text-transparent mt-6 text-sm md:text-base font-bold animate-fade-in-delayed">
            <p className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-800 bg-clip-text text-transparent mt-6 text-caption md:text-body font-sans-clean font-medium animate-fade-in-delayed">
              Touch to enter
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntrancePage;