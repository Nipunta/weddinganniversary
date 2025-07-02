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

  return (
    <div className="min-h-screen relative">
      {/* Kaleidoscope Background Animation */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="kaleidoscope-bg"></div>
      </div>

      {/* Background Image - New provided image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url('/bg2 copy copy copy.jpg')`,
        }}
      />

      {/* Sparkle Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="text-yellow-300 text-xs">✨</div>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <HeroSection 
          ref={(el) => addSectionRef(el, 0)}
          isVisible={visibleSections.has(0)}
          sectionIndex={0}
        />
        <EventDetails 
          ref={(el) => addSectionRef(el, 1)}
          isVisible={visibleSections.has(1)}
          sectionIndex={1}
        />
        <MemoriesGallery 
          ref={(el) => addSectionRef(el, 2)}
          isVisible={visibleSections.has(2)}
          sectionIndex={2}
        />
        <GuestWishes 
          ref={(el) => addSectionRef(el, 3)}
          isVisible={visibleSections.has(3)}
          sectionIndex={3}
        />
        <LocalAttractions 
          ref={(el) => addSectionRef(el, 4)}
          isVisible={visibleSections.has(4)}
          sectionIndex={4}
        />
        <AcceptInvitation 
          ref={(el) => addSectionRef(el, 5)}
          isVisible={visibleSections.has(5)}
          sectionIndex={5}
        />
        <ContactSection 
          ref={(el) => addSectionRef(el, 6)}
          isVisible={visibleSections.has(6)}
          sectionIndex={6}
        />
      </div>
    </div>
  );
};

export default FullInvitationPage;