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

  // Generate falling petals
  const generateFallingPetals = () => {
    const petals = [];
    for (let i = 0; i < 15; i++) {
      petals.push(
        <div
          key={i}
          className="falling-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 8}s`,
            animationTimingFunction: 'linear',
          }}
        />
      );
    }
    return petals;
  };

  // Generate section-specific background elements
  const generateSectionElements = (sectionIndex: number) => {
    const elements = [];
    
    switch (sectionIndex) {
      case 0: // Hero Section - Golden Diamonds
        for (let i = 0; i < 6; i++) {
          elements.push(
            <div
              key={`hero-${i}`}
              className="hero-diamond"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          );
        }
        break;
        
      case 1: // Event Details - Blue Bubbles
        for (let i = 0; i < 8; i++) {
          elements.push(
            <div
              key={`event-${i}`}
              className="event-bubble"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                width: `${40 + Math.random() * 30}px`,
                height: `${40 + Math.random() * 30}px`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          );
        }
        break;
        
      case 2: // Memories Gallery - Pink Hearts
        for (let i = 0; i < 10; i++) {
          elements.push(
            <div
              key={`memories-${i}`}
              className="memories-heart"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          );
        }
        break;
        
      case 3: // Guest Wishes - Purple Stars
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
        break;
        
      case 4: // Local Attractions - Green Circles
        for (let i = 0; i < 6; i++) {
          elements.push(
            <div
              key={`attractions-${i}`}
              className="attractions-circle"
              style={{
                top: `${Math.random() * 60 + 20}%`,
                width: `${50 + Math.random() * 40}px`,
                height: `${50 + Math.random() * 40}px`,
                animationDelay: `${i * 2.5}s`,
              }}
            />
          );
        }
        break;
        
      case 5: // Accept Invitation - Golden Sparkles
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
        break;
        
      case 6: // Contact Section - Indigo Waves
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
        break;
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

        {/* Falling Petals */}
        <div className="absolute inset-0 pointer-events-none">
          {generateFallingPetals()}
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Golden Diamonds */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateSectionElements(0)}
          </div>
          <HeroSection 
            ref={(el) => addSectionRef(el, 0)}
            isVisible={visibleSections.has(0)}
            sectionIndex={0}
          />
        </div>

        {/* Event Details with Blue Bubbles */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateSectionElements(1)}
          </div>
          <EventDetails 
            ref={(el) => addSectionRef(el, 1)}
            isVisible={visibleSections.has(1)}
            sectionIndex={1}
          />
        </div>

        {/* Memories Gallery with Pink Hearts */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateSectionElements(2)}
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
            {generateSectionElements(3)}
          </div>
          <GuestWishes 
            ref={(el) => addSectionRef(el, 3)}
            isVisible={visibleSections.has(3)}
            sectionIndex={3}
          />
        </div>

        {/* Local Attractions with Green Circles */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateSectionElements(4)}
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
            {generateSectionElements(5)}
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
            {generateSectionElements(6)}
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