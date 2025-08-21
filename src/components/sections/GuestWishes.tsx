import React, { forwardRef, useState } from 'react';
import { Heart, Send, Upload } from 'lucide-react';

interface GuestWishesProps {
  isVisible: boolean;
  sectionIndex: number;
}

const GuestWishes = forwardRef<HTMLDivElement, GuestWishesProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here
      alert(`Thank you for your wishes, ${name}!`);
      setMessage('');
      setName('');
    };

    return (
      <div
        ref={ref}
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Share Your Wishes
            </h2>
            <p className="text-lg text-gray-600">
              Leave us a message or share a memory that we can treasure forever
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <textarea
                  placeholder="Share your wishes, memories, or advice..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-6 py-3 border-2 border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50 transition-all"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Photo
                </button>
                
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Wishes
                </button>
              </div>
            </div>
          </form>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Your message will be added to our memory book
            </p>
          </div>
        </div>
      </div>
    );
  }
);

GuestWishes.displayName = 'GuestWishes';

export default GuestWishes;