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
        {/* Sophisticated SVG Pattern Background inspired by royal motif design */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="none">
          <defs>
            <pattern id="imperialMotif" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Large central ornate diamond */}
              <path d="M40,15 L55,30 L40,45 L25,30 Z" fill="rgba(251, 191, 36, 0.12)" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="0.8"/>
              {/* Interlocking oval chains - larger */}
              <ellipse cx="40" cy="40" rx="20" ry="10" fill="none" stroke="rgba(217, 119, 6, 0.08)" strokeWidth="1"/>
              <ellipse cx="40" cy="40" rx="10" ry="20" fill="none" stroke="rgba(217, 119, 6, 0.08)" strokeWidth="1"/>
              {/* Corner ornate elements */}
              <circle cx="15" cy="15" r="4" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.5"/>
              <circle cx="65" cy="15" r="4" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.5"/>
              <circle cx="15" cy="65" r="4" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.5"/>
              <circle cx="65" cy="65" r="4" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.5"/>
              {/* Decorative crosses and flourishes */}
              <path d="M40,5 L40,15 M35,10 L45,10" stroke="rgba(245, 158, 11, 0.12)" strokeWidth="1.2"/>
              <path d="M40,65 L40,75 M35,70 L45,70" stroke="rgba(245, 158, 11, 0.12)" strokeWidth="1.2"/>
              <path d="M5,40 L15,40 M10,35 L10,45" stroke="rgba(245, 158, 11, 0.12)" strokeWidth="1.2"/>
              <path d="M65,40 L75,40 M70,35 L70,45" stroke="rgba(245, 158, 11, 0.12)" strokeWidth="1.2"/>
              {/* Connecting ornate curves */}
              <path d="M15,15 Q30,25 15,35 Q25,30 35,15" stroke="rgba(217, 119, 6, 0.06)" strokeWidth="0.6" fill="none"/>
              <path d="M65,15 Q50,25 65,35 Q55,30 45,15" stroke="rgba(217, 119, 6, 0.06)" strokeWidth="0.6" fill="none"/>
              <path d="M15,65 Q30,55 15,45 Q25,50 35,65" stroke="rgba(217, 119, 6, 0.06)" strokeWidth="0.6" fill="none"/>
              <path d="M65,65 Q50,55 65,45 Q55,50 45,65" stroke="rgba(217, 119, 6, 0.06)" strokeWidth="0.6" fill="none"/>
            </pattern>
            <pattern id="elegantLace" x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
              {/* Lace-like intricate pattern */}
              <circle cx="22.5" cy="22.5" r="12" fill="none" stroke="rgba(245, 158, 11, 0.06)" strokeWidth="0.8"/>
              <circle cx="22.5" cy="22.5" r="6" fill="rgba(251, 191, 36, 0.08)"/>
              <path d="M22.5,5 L22.5,15 M22.5,30 L22.5,40 M5,22.5 L15,22.5 M30,22.5 L40,22.5" stroke="rgba(217, 119, 6, 0.08)" strokeWidth="1"/>
              <path d="M12,12 L18,18 M27,27 L33,33 M33,12 L27,18 M18,27 L12,33" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.6"/>
              {/* Small decorative dots */}
              <circle cx="10" cy="10" r="1.5" fill="rgba(251, 191, 36, 0.1)"/>
              <circle cx="35" cy="10" r="1.5" fill="rgba(251, 191, 36, 0.1)"/>
              <circle cx="10" cy="35" r="1.5" fill="rgba(251, 191, 36, 0.1)"/>
              <circle cx="35" cy="35" r="1.5" fill="rgba(251, 191, 36, 0.1)"/>
            </pattern>
            <pattern id="vintageFlourish" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Vintage flourish pattern */}
              <path d="M30,10 Q40,20 30,30 Q20,40 10,30 Q20,20 30,10 Z" fill="rgba(217, 119, 6, 0.06)" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.5"/>
              <path d="M30,30 Q40,40 30,50 Q20,60 10,50 Q20,40 30,30 Z" fill="rgba(217, 119, 6, 0.06)" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.5"/>
              {/* Connecting vine elements */}
              <path d="M30,30 Q45,35 30,40" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.8" fill="none"/>
              <path d="M30,30 Q15,35 30,40" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.8" fill="none"/>
              <path d="M30,10 Q35,25 40,30" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.8" fill="none"/>
              <path d="M30,10 Q25,25 20,30" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.8" fill="none"/>
              {/* Central decorative element */}
              <circle cx="30" cy="30" r="2" fill="rgba(251, 191, 36, 0.12)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#imperialMotif)" className="animate-pattern-drift" />
          <rect width="100%" height="100%" fill="url(#elegantLace)" className="animate-pattern-float" />
          <rect width="100%" height="100%" fill="url(#vintageFlourish)" className="animate-flowing-pattern" />
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