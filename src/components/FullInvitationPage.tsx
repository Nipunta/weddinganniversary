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

  // Generate natural falling petals with enhanced vertical movement - REDUCED COUNT
  const generateFallingPetals = () => {
    const petals = [];
    for (let i = 0; i < 15; i++) {
      // Enhanced drift and rotation for more natural movement
      const driftX = (Math.random() - 0.5) * 150; // Increased drift range
      const rotation = Math.random() * 720 + 360; // More rotation variety
      const swayAmount = Math.random() * 25 + 10; // Variable sway amount
      
      petals.push(
        <div
          key={i}
          className="falling-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`, // 6-14 seconds for varied speeds
            animationDelay: `${Math.random() * 10}s`, // Spread out over 10 seconds
            '--drift-x': `${driftX}px`,
            '--rotation': `${rotation}deg`,
            '--sway-amount': `${swayAmount}px`,
          } as React.CSSProperties}
        />
      );
    }
    return petals;
  };

  // Generate Celestial Constellations for Event Details
  const generateCelestialConstellations = () => {
    const elements = [];
    
    for (let i = 0; i < 20; i++) {
      elements.push(
        <div
          key={`star-${i}`}
          className="celestial-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      );
    }
    
    return elements;
  };

  // Generate Soft Focus Bokeh for Memories Gallery
  const generateSoftFocusBokeh = () => {
    const elements = [];
    
    for (let i = 0; i < 12; i++) {
      elements.push(
        <div
          key={`bokeh-${i}`}
          className="bokeh-circle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        />
      );
    }
    
    return elements;
  };

  // Generate Topographic Lines for Local Attractions
  const generateTopographicLines = () => {
    return (
      <div
        key="topographic"
        className="topographic-background"
      />
    );
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
      {/* Patterned Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Enhanced SVG Pattern Background inspired by motif design */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <defs>
            <pattern id="royalDamask" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              {/* Central ornate diamond motif */}
              <path d="M25,8 L35,18 L25,28 L15,18 Z" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(245, 158, 11, 0.12)" strokeWidth="0.5"/>
              {/* Interlocking oval chains */}
              <ellipse cx="25" cy="25" rx="12" ry="6" fill="none" stroke="rgba(217, 119, 6, 0.06)" strokeWidth="0.8"/>
              <ellipse cx="25" cy="25" rx="6" ry="12" fill="none" stroke="rgba(217, 119, 6, 0.06)" strokeWidth="0.8"/>
              {/* Corner decorative elements */}
              <circle cx="8" cy="8" r="2" fill="rgba(251, 191, 36, 0.08)"/>
              <circle cx="42" cy="8" r="2" fill="rgba(251, 191, 36, 0.08)"/>
              <circle cx="8" cy="42" r="2" fill="rgba(251, 191, 36, 0.08)"/>
              <circle cx="42" cy="42" r="2" fill="rgba(251, 191, 36, 0.08)"/>
              {/* Connecting lines */}
              <path d="M8,8 Q25,15 42,8" stroke="rgba(245, 158, 11, 0.04)" strokeWidth="0.5" fill="none"/>
              <path d="M8,42 Q25,35 42,42" stroke="rgba(245, 158, 11, 0.04)" strokeWidth="0.5" fill="none"/>
            </pattern>
            <pattern id="ornateGeometric" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
              {/* Complex geometric motif */}
              <rect x="12" y="12" width="11" height="11" fill="rgba(217, 119, 6, 0.05)" stroke="rgba(251, 191, 36, 0.08)" strokeWidth="0.5"/>
              <circle cx="17.5" cy="17.5" r="4" stroke="rgba(251, 191, 36, 0.08)" strokeWidth="0.6" fill="none"/>
              <path d="M17.5,10 L24.5,17.5 L17.5,25 L10.5,17.5 Z" fill="none" stroke="rgba(245, 158, 11, 0.06)" strokeWidth="0.4"/>
              {/* Corner flourishes */}
              <path d="M5,5 Q10,8 5,12 Q8,10 12,5" stroke="rgba(217, 119, 6, 0.04)" strokeWidth="0.3" fill="none"/>
              <path d="M30,5 Q25,8 30,12 Q27,10 23,5" stroke="rgba(217, 119, 6, 0.04)" strokeWidth="0.3" fill="none"/>
              <path d="M5,30 Q10,27 5,23 Q8,25 12,30" stroke="rgba(217, 119, 6, 0.04)" strokeWidth="0.3" fill="none"/>
              <path d="M30,30 Q25,27 30,23 Q27,25 23,30" stroke="rgba(217, 119, 6, 0.04)" strokeWidth="0.3" fill="none"/>
            </pattern>
            <pattern id="vintageLace" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              {/* Vintage lace pattern */}
              <circle cx="15" cy="15" r="8" fill="none" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.6"/>
              <circle cx="15" cy="15" r="4" fill="rgba(251, 191, 36, 0.06)"/>
              <path d="M15,3 L15,9 M15,21 L15,27 M3,15 L9,15 M21,15 L27,15" stroke="rgba(217, 119, 6, 0.07)" strokeWidth="0.8"/>
              <path d="M7,7 L11,11 M19,19 L23,23 M23,7 L19,11 M11,19 L7,23" stroke="rgba(245, 158, 11, 0.04)" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#royalMotif)" className="animate-pattern-drift" />
          <rect width="100%" height="100%" fill="url(#ornateGeometric)" className="animate-pattern-float" />
          <rect width="100%" height="100%" fill="url(#vintageLace)" className="animate-flowing-pattern" />
        </svg>
        
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-yellow-50/70 to-orange-50/80"></div>
        
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
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection 
          ref={(el) => addSectionRef(el, 0)}
          isVisible={visibleSections.has(0)}
          sectionIndex={0}
        />

        {/* Event Details with Celestial Constellations */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateCelestialConstellations()}
          </div>
          <EventDetails 
            ref={(el) => addSectionRef(el, 1)}
            isVisible={visibleSections.has(1)}
            sectionIndex={1}
          />
        </div>

        {/* Memories Gallery with Soft Focus Bokeh */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateSoftFocusBokeh()}
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

        {/* Local Attractions with Topographic Lines */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateTopographicLines()}
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