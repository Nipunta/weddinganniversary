import React from 'react';
import { Heart } from 'lucide-react';

interface EntrancePageProps {
  onEnter: () => void;
}

const EntrancePage: React.FC<EntrancePageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="text-center p-8">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome
          </h1>
          <p className="text-gray-600">
            You're invited to celebrate our special day
          </p>
        </div>
        
        <button
          onClick={onEnter}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Touch to Enter
        </button>
      </div>
    </div>
  );
};

export default EntrancePage;