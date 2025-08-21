import React, { forwardRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface MemoriesGalleryProps {
  isVisible: boolean;
  sectionIndex: number;
}

const MemoriesGallery = forwardRef<HTMLDivElement, MemoriesGalleryProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    // Sample images - replace with actual memory photos
    const memories = [
      {
        url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Our first dance together'
      },
      {
        url: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'A beautiful moment captured'
      },
      {
        url: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Celebrating together'
      }
    ];

    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % memories.length);
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + memories.length) % memories.length);
    };

    return (
      <div
        ref={ref}
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Memories
            </h2>
            <p className="text-lg text-gray-600">
              A collection of beautiful moments from our journey together
            </p>
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={memories[currentImage].url}
                alt={memories[currentImage].caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-lg text-gray-700 mb-4">
              {memories[currentImage].caption}
            </p>
            
            <div className="flex justify-center space-x-2">
              {memories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-rose-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              {currentImage + 1} of {memories.length}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

MemoriesGallery.displayName = 'MemoriesGallery';

export default MemoriesGallery;