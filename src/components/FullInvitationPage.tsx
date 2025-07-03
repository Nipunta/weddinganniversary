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
      </div>

      {/* Static Background Image Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage: `url('/bg2 copy copy copy.jpg')`,
        }}
      />

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