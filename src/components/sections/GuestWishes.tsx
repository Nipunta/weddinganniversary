import React, { forwardRef, useState, useEffect } from 'react';
import { Send, Heart, ChevronLeft, ChevronRight, Upload, MessageSquare, X } from 'lucide-react';

interface GuestWishesProps {
  isVisible: boolean;
  sectionIndex: number;
}

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: string;
  photo?: string;
}

const initialWishes: Wish[] = [
  {
    id: 1,
    name: 'Rajesh & Priya',
    message: 'Wishing you both a very happy 25th anniversary! Your love story is truly inspiring.',
    timestamp: '2 hours ago',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'The Sharma Family',
    message: 'Congratulations on this beautiful milestone. May your love continue to grow stronger!',
    timestamp: '4 hours ago',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'Neha',
    message: 'Such a wonderful celebration of love! Excited to be part of this special day.',
    timestamp: '1 day ago',
    photo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const GuestWishes = forwardRef<HTMLDivElement, GuestWishesProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const [wishes, setWishes] = useState<Wish[]>(initialWishes);
    const [newWish, setNewWish] = useState({ message: '', photo: '' });
    const [currentWishIndex, setCurrentWishIndex] = useState(0);
    const [showWishForm, setShowWishForm] = useState(false);

    const handleSubmitWish = (e: React.FormEvent) => {
      e.preventDefault();
      if (newWish.message) {
        const wish: Wish = {
          id: Date.now(),
          name: 'Anonymous Guest',
          message: newWish.message,
          timestamp: 'Just now',
          photo: newWish.photo || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
        };
        setWishes([wish, ...wishes]);
        setNewWish({ message: '', photo: '' });
        setShowWishForm(false);
      }
    };

    const nextWish = () => {
      setCurrentWishIndex((prev) => (prev + 1) % wishes.length);
    };

    const prevWish = () => {
      setCurrentWishIndex((prev) => (prev - 1 + wishes.length) % wishes.length);
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setNewWish(prev => ({ ...prev, photo: e.target?.result as string }));
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 animate-title-glow bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Guest Wishes Wall
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Wish Display */}
            <div className="relative">
              <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl min-h-[350px] flex flex-col justify-center animate-card-float">
                <div className="relative overflow-hidden">
                  {wishes.map((wish, index) => (
                    <div
                      key={wish.id}
                      className={`transition-all duration-500 ${
                        index === currentWishIndex
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 absolute inset-0 translate-y-4'
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300">
                          <img
                            src={wish.photo}
                            alt={wish.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold italic animate-ink-spread-text bg-gradient-to-r from-yellow-600 via-amber-700 to-yellow-800 bg-clip-text text-transparent">{wish.name}</p>
                          <p className="text-amber-800 font-bold text-sm animate-split-reveal-text">{wish.timestamp}</p>
                        </div>
                      </div>
                      <Heart className="text-pink-400 mb-4" size={32} />
                      <p className="text-amber-900 font-bold text-lg mb-4 leading-relaxed animate-split-reveal-text">
                        "{wish.message}"
                      </p>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={prevWish}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={24} className="text-amber-800" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {wishes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentWishIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentWishIndex
                            ? 'bg-amber-400'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextWish}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={24} className="text-amber-800" />
                  </button>
                </div>

                {/* Sparkle Effect */}
                <div className="absolute top-4 right-4 animate-pulse">
                  <span className="text-yellow-300">✨</span>
                </div>
              </div>
            </div>

            {/* Share Your Wishes Button or Form */}
            <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-card-slide border-4 border-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-border relative">
              <div className="absolute inset-1 bg-white/10 backdrop-blur-sm rounded-xl"></div>
              <div className="relative z-10">
              {!showWishForm ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <MessageSquare size={64} className="text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
                    Share Your Wishes
                  </h3>
                  <p className="text-amber-900 font-bold mb-8 text-lg">
                    Leave a heartfelt message for the happy couple
                  </p>
                  <button
                    onClick={() => setShowWishForm(true)}
                    className="bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <MessageSquare size={24} />
                    <span>Write a Wish</span>
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">Share Your Wishes</h3>
                    <button
                      onClick={() => setShowWishForm(false)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                    >
                      <X size={20} className="text-amber-800" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmitWish} className="space-y-6">
                    <div>
                      <label className="block text-amber-900 font-bold mb-2 animate-split-reveal-text">Upload Your Photo (Optional)</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                          id="photo-upload"
                        />
                        <label
                          htmlFor="photo-upload"
                          className="flex items-center justify-center w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-amber-800 font-bold cursor-pointer hover:bg-white/20 transition-all duration-300"
                        >
                          <Upload size={20} className="mr-2" />
                          <span>{newWish.photo ? 'Photo Selected' : 'Choose Photo'}</span>
                        </label>
                      </div>
                      {newWish.photo && (
                        <div className="mt-2 flex justify-center">
                          <img
                            src={newWish.photo}
                            alt="Preview"
                            className="w-16 h-16 rounded-full object-cover border-2 border-amber-300"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-amber-900 font-bold mb-2 animate-split-reveal-text">Your Message</label>
                      <textarea
                        value={newWish.message}
                        onChange={(e) => setNewWish(prev => ({ ...prev, message: e.target.value }))}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-bold placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-800 bg-clip-text text-transparent"
                        placeholder="Share your heartfelt wishes..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <Send size={20} />
                      <span>Send Wishes</span>
                    </button>
                  </form>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

GuestWishes.displayName = 'GuestWishes';

export default GuestWishes;