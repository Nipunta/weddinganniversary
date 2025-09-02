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
      {/* Moving SVG Pattern Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full animate-flowing-pattern" viewBox="0 0 200 200" preserveAspectRatio="none">
          <defs>
            <pattern id="royalMotif" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              {/* Central ornate diamond */}
              <path d="M20,5 L30,15 L20,25 L10,15 Z" fill="rgba(251, 191, 36, 0.12)" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="0.5"/>
              {/* Interlocking circles */}
              <circle cx="20" cy="20" r="8" fill="none" stroke="rgba(217, 119, 6, 0.08)" strokeWidth="0.8"/>
              <circle cx="10" cy="10" r="4" fill="rgba(251, 191, 36, 0.06)"/>
              <circle cx="30" cy="30" r="4" fill="rgba(251, 191, 36, 0.06)"/>
              {/* Decorative crosses */}
              <path d="M20,2 L20,8 M17,5 L23,5" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1"/>
              <path d="M20,32 L20,38 M17,35 L23,35" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1"/>
              <path d="M2,20 L8,20 M5,17 L5,23" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1"/>
              <path d="M32,20 L38,20 M35,17 L35,23" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1"/>
            </pattern>
            <pattern id="ornateFloral" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Central floral motif */}
              <path d="M30,15 Q35,20 30,25 Q25,30 20,25 Q15,20 20,15 Q25,10 30,15 Z" fill="rgba(217, 119, 6, 0.08)"/>
              <path d="M30,35 Q35,40 30,45 Q25,50 20,45 Q15,40 20,35 Q25,30 30,35 Z" fill="rgba(217, 119, 6, 0.08)"/>
              {/* Connecting vine patterns */}
              <path d="M30,25 Q40,30 30,35" stroke="rgba(245, 158, 11, 0.06)" strokeWidth="1.5" fill="none"/>
              <path d="M20,25 Q10,30 20,35" stroke="rgba(245, 158, 11, 0.06)" strokeWidth="1.5" fill="none"/>
              {/* Small decorative dots */}
              <circle cx="30" cy="30" r="1.5" fill="rgba(251, 191, 36, 0.15)"/>
              <circle cx="15" cy="15" r="1" fill="rgba(251, 191, 36, 0.1)"/>
              <circle cx="45" cy="45" r="1" fill="rgba(251, 191, 36, 0.1)"/>
            </pattern>
            <pattern id="geometricLace" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              {/* Lace-like geometric pattern */}
              <path d="M12.5,0 L25,12.5 L12.5,25 L0,12.5 Z" fill="none" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.5"/>
              <circle cx="12.5" cy="12.5" r="3" fill="none" stroke="rgba(251, 191, 36, 0.08)" strokeWidth="0.8"/>
              <path d="M6,6 L19,19 M19,6 L6,19" stroke="rgba(217, 119, 6, 0.04)" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#royalMotif)" className="animate-pattern-drift" />
          <rect width="100%" height="100%" fill="url(#ornateFloral)" className="animate-pattern-float" />
          <rect width="100%" height="100%" fill="url(#geometricLace)" className="animate-flowing-pattern" />
        </svg>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/25 via-amber-800/20 to-orange-900/25"></div>
      </div>

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
              <h1 className="text-4xl md:text-6xl font-serif mb-2 animate-anniversary-entrance bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 bg-clip-text text-transparent hover:animate-text-glow transition-all duration-300 ease-in-out">
                Anniversary Celebration
              </h1>
              <p className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-800 bg-clip-text text-transparent text-lg md:text-xl font-bold italic animate-fade-in-up">
                A journey of 25 beautiful years
              </p>
            </div>

            <button
              onClick={handleEnter}
              disabled={isAnimating}
              className="group relative p-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 disabled:opacity-50 overflow-hidden"
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
              Touch to enter
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntrancePage;