import React, { useState, useRef, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import EventDetails from './sections/EventDetails';
import MemoriesGallery from './sections/MemoriesGallery';
import GuestWishes from './sections/GuestWishes';
import LocalAttractions from './sections/LocalAttractions';
import AcceptInvitation from './sections/AcceptInvitation';
import ContactSection from './sections/ContactSection';

const FullInvitationPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-section') || '0');
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, index]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

  // Generate natural falling petals
  const generateFallingPetals = () => {
    const petals = [];
    for (let i = 0; i < 20; i++) {
      const driftX = (Math.random() - 0.5) * 100; // Random horizontal drift
      petals.push(
        <div
          key={i}
          className="falling-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 10}s`,
            '--drift-x': `${driftX}px`,
          } as React.CSSProperties}
        />
      );
    }
    return petals;
  };

  // Generate Hero Section - Gold Shimmer Waves and Light Rays
  const generateHeroElements = () => {
    const elements = [];
    
    // Gold shimmer waves
    for (let i = 0; i < 3; i++) {
      elements.push(
        <div
          key={`shimmer-${i}`}
          className="hero-shimmer-wave"
          style={{
            top: `${20 + i * 30}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        />
      );
    }
    
    // Light rays
    for (let i = 0; i < 5; i++) {
      elements.push(
        <div
          key={`ray-${i}`}
          className="hero-light-ray"
          style={{
            left: `${15 + i * 20}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + i}s`,
          }}
        />
      );
    }
    
    return elements;
  };

  // Generate Event Details - Twilight Sky with Floating Lanterns
  const generateEventElements = () => {
    const elements = [];
    
    // Twilight sky background
    elements.push(
      <div key="twilight" className="twilight-sky" />
    );
    
    // Floating lanterns
    for (let i = 0; i < 6; i++) {
      const driftX = (Math.random() - 0.5) * 60;
      elements.push(
        <div
          key={`lantern-${i}`}
          className="floating-lantern"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 2.5}s`,
            animationDuration: `${15 + Math.random() * 5}s`,
            '--lantern-drift': `${driftX}px`,
          } as React.CSSProperties}
        />
      );
    }
    
    return elements;
  };

  // Generate Memories Gallery - Film Reel and Photo Particles
  const generateMemoriesElements = () => {
    const elements = [];
    
    // Film reel strip
    elements.push(
      <div key="film-reel" className="film-reel-strip" />
    );
    
    // Vignette glow
    elements.push(
      <div key="vignette" className="vignette-glow" />
    );
    
    // Photo particles
    for (let i = 0; i < 8; i++) {
      elements.push(
        <div
          key={`photo-${i}`}
          className="photo-particle"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${12 + Math.random() * 4}s`,
          }}
        />
      );
    }
    
    return elements;
  };

  // Generate Local Attractions - Rolling Hills Landscape
  const generateAttractionsElements = () => {
    const elements = [];
    
    // Rolling hills
    elements.push(
      <div key="hills" className="rolling-hills" />
    );
    
    // Landmark icons
    for (let i = 0; i < 4; i++) {
      elements.push(
        <div
          key={`landmark-${i}`}
          className="landmark-icon"
          style={{
            top: `${30 + Math.random() * 40}%`,
            left: `${20 + i * 20}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      );
    }
    
    return elements;
  };

  // Generate Guest Wishes - Purple Stars (keeping original)
  const generateWishesElements = () => {
    const elements = [];
    for (let i = 0; i < 12; i++) {
      elements.push(
        <div
          key={`wishes-${i}`}
          className="wishes-star"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      );
    }
    return elements;
  };

  // Generate Accept Invitation - Golden Sparkles (keeping original)
  const generateInvitationElements = () => {
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push(
        <div
          key={`invitation-${i}`}
          className="invitation-sparkle"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      );
    }
    return elements;
  };

  // Generate Contact Section - Indigo Waves (keeping original)
  const generateContactElements = () => {
    const elements = [];
    for (let i = 0; i < 4; i++) {
      elements.push(
        <div
          key={`contact-${i}`}
          className="contact-wave"
          style={{
            top: `${20 + i * 20}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      );
    }
    return elements;
  };

  return (
    <div className="min-h-screen relative">
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Flowing Gradient Waves */}
        <div className="absolute inset-0 animate-flowing-waves opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-yellow-300/15 to-orange-200/20"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <div className="floating-orb floating-orb-1"></div>
          <div className="floating-orb floating-orb-2"></div>
          <div className="floating-orb floating-orb-3"></div>
          <div className="floating-orb floating-orb-4"></div>
          <div className="floating-orb floating-orb-5"></div>
        </div>
        
        {/* Subtle Mesh Gradient */}
        <div className="absolute inset-0 animate-mesh-gradient opacity-25">
          <div className="absolute inset-0 bg-gradient-radial from-amber-300/10 via-transparent to-yellow-200/10"></div>
        </div>
        
        {/* Gentle Light Rays */}
        <div className="absolute inset-0 animate-light-rays opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-300/30 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-300/20 to-transparent transform -rotate-6"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-orange-300/25 to-transparent transform rotate-8"></div>
        </div>

        {/* Natural Falling Petals */}
        <div className="absolute inset-0 pointer-events-none">
          {generateFallingPetals()}
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Gold Shimmer Waves */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateHeroElements()}
          </div>
          <HeroSection 
            ref={(el) => addSectionRef(el, 0)}
            isVisible={visibleSections.has(0)}
            sectionIndex={0}
          />
        </div>

        {/* Event Details with Twilight Sky and Lanterns */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateEventElements()}
          </div>
          <EventDetails 
            ref={(el) => addSectionRef(el, 1)}
            isVisible={visibleSections.has(1)}
            sectionIndex={1}
          />
        </div>

        {/* Memories Gallery with Film Reel and Photo Particles */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateMemoriesElements()}
          </div>
          <MemoriesGallery 
            ref={(el) => addSectionRef(el, 2)}
            isVisible={visibleSections.has(2)}
            sectionIndex={2}
          />
        </div>

        {/* Guest Wishes with Purple Stars */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateWishesElements()}
          </div>
          <GuestWishes 
            ref={(el) => addSectionRef(el, 3)}
            isVisible={visibleSections.has(3)}
            sectionIndex={3}
          />
        </div>

        {/* Local Attractions with Rolling Hills Landscape */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateAttractionsElements()}
          </div>
          <LocalAttractions 
            ref={(el) => addSectionRef(el, 4)}
            isVisible={visibleSections.has(4)}
            sectionIndex={4}
          />
        </div>

        {/* Accept Invitation with Golden Sparkles */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateInvitationElements()}
          </div>
          <AcceptInvitation 
            ref={(el) => addSectionRef(el, 5)}
            isVisible={visibleSections.has(5)}
            sectionIndex={5}
          />
        </div>

        {/* Contact Section with Indigo Waves */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateContactElements()}
          </div>
          <ContactSection 
            ref={(el) => addSectionRef(el, 6)}
            isVisible={visibleSections.has(6)}
            sectionIndex={6}
          />
        </div>
      </div>
    </div>
  );
};

export default FullInvitationPage;