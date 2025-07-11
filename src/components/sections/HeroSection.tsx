import React, { forwardRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  isVisible: boolean;
  sectionIndex: number;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
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
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Couple Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-amber-300 shadow-2xl animate-photo-glow will-change-transform">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Anniversary Couple"
                  className="w-full h-full object-cover img-optimized"
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-400/30 to-amber-600/30 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Gradient Title with Animate.css Float Animation */}
          <h1 className={`text-display md:text-7xl font-serif-elegant font-bold mb-6 drop-shadow-lg bg-gradient-to-r from-red-900 via-yellow-700 to-pink-800 bg-clip-text text-transparent will-change-transform ${
            hasAnimated ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDuration: '1.5s' }}>
            Celebrating 25 Years
          </h1>
          <h2 className={`text-heading-2 md:text-display font-serif-elegant font-semibold mb-8 bg-gradient-to-r from-red-800 via-yellow-600 to-pink-700 bg-clip-text text-transparent ${
            hasAnimated ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}>
            of Togetherness
          </h2>
          
          <p className={`text-body-large md:text-heading-2 font-sans-clean font-medium leading-relaxed max-w-2xl mx-auto bg-gradient-to-r from-amber-800 via-yellow-800 to-amber-900 bg-clip-text text-transparent ${
            hasAnimated ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDuration: '1.5s', animationDelay: '0.6s' }}>
            Join us as we celebrate a quarter-century of love, laughter, 
            and beautiful memories shared together
          </p>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;