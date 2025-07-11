import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollToggle: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsAtTop(true);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsAtTop(false);
  };

  const handleToggle = () => {
    if (isAtTop) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full shadow-xl btn-lift animate-bounce will-change-transform"
    >
      {isAtTop ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
    </button>
  );
};

export default ScrollToggle;