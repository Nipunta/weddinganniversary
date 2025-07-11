import React, { forwardRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MemoriesGalleryProps {
  isVisible: boolean;
  sectionIndex: number;
}

const memories = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Wedding Day Bliss',
    year: '1999'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'First Anniversary',
    year: '2000'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Family Vacation',
    year: '2005'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Celebration Time',
    year: '2010'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Recent Memories',
    year: '2023'
  }
];

const MemoriesGallery = forwardRef<HTMLDivElement, MemoriesGalleryProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (isVisible && !hasAnimated) {
        setHasAnimated(true);
      }
    }, [isVisible, hasAnimated]);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % memories.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
    };

    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-center mb-16 bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent ${
          <h2 className={`text-display md:text-5xl font-serif-elegant font-bold text-center mb-16 bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent ${
            hasAnimated ? 'animate__animated animate__slideInLeft' : ''
          }`}
          style={{ animationDuration: '1s' }}>
            Our Precious Memories
          </h2>

          {/* Main Carousel */}
          <div className="relative mb-12">
            <div className="sweeping-light-card relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl will-change-transform">
              <img
                src={memories[currentIndex].url}
                alt={memories[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-500 img-optimized"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-heading-2 font-serif-elegant font-bold mb-2 text-white animate-ink-spread-text">{memories[currentIndex].title}</h3>
                <p className="text-amber-300 font-sans-clean font-semibold text-body-large animate-split-reveal-text">{memories[currentIndex].year}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 nav-arrow will-change-transform"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 nav-arrow will-change-transform"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4">
            {memories.map((memory, index) => (
              <button
                key={memory.id}
                onClick={() => setCurrentIndex(index)}
                className={`sweeping-light-card relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-amber-400 scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={memory.url}
                  alt={memory.title}
                  className="w-full h-full object-cover img-optimized"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 20vw, 120px"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

MemoriesGallery.displayName = 'MemoriesGallery';

export default MemoriesGallery;