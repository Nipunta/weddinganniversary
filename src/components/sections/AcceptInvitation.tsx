import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface AcceptInvitationProps {
  isVisible: boolean;
  sectionIndex: number;
}

const AcceptInvitation = forwardRef<HTMLDivElement, AcceptInvitationProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const thankYouCardRef = useRef<HTMLDivElement>(null);

    const createConfetti = (centerX: number, centerY: number) => {
      const confettiContainer = document.createElement('div');
      confettiContainer.style.position = 'fixed';
      confettiContainer.style.top = '0';
      confettiContainer.style.left = '0';
      confettiContainer.style.width = '100vw';
      confettiContainer.style.height = '100vh';
      confettiContainer.style.pointerEvents = 'none';
      confettiContainer.style.zIndex = '9999';
      document.body.appendChild(confettiContainer);

      const confettiPieces = ['🎉', '🎊', '✨', '🌟', '💖', '🎈', '🎁', '🌈'];
      const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];

      for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        const isEmoji = Math.random() > 0.5;
        
        if (isEmoji) {
          confettiPiece.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
          confettiPiece.style.fontSize = `${16 + Math.random() * 16}px`;
        } else {
          confettiPiece.style.width = `${4 + Math.random() * 8}px`;
          confettiPiece.style.height = `${4 + Math.random() * 8}px`;
          confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confettiPiece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        }

        confettiPiece.style.position = 'absolute';
        confettiPiece.style.left = `${centerX}px`;
        confettiPiece.style.top = `${centerY}px`;
        confettiPiece.style.pointerEvents = 'none';

        // Random direction and velocity for 360-degree spread
        const angle = (Math.PI * 2 * i) / 50 + (Math.random() - 0.5) * 0.5;
        const velocity = 100 + Math.random() * 200;
        const gravity = 300 + Math.random() * 200;
        
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        confettiContainer.appendChild(confettiPiece);

        // Animate the confetti piece
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = (currentTime - startTime) / 1000;

          if (elapsed < 3) {
            const x = centerX + vx * elapsed;
            const y = centerY + vy * elapsed + 0.5 * gravity * elapsed * elapsed;
            const rotation = elapsed * 360 * (Math.random() > 0.5 ? 1 : -1);
            const opacity = Math.max(0, 1 - elapsed / 3);

            confettiPiece.style.left = `${x}px`;
            confettiPiece.style.top = `${y}px`;
            confettiPiece.style.transform = `rotate(${rotation}deg)`;
            confettiPiece.style.opacity = opacity.toString();

            requestAnimationFrame(animate);
          } else {
            confettiPiece.remove();
          }
        };

        requestAnimationFrame(animate);
      }

      // Clean up container after animation
      setTimeout(() => {
        if (confettiContainer.parentNode) {
          confettiContainer.remove();
        }
      }, 3000);
    };

    const handleAccept = () => {
      setShowAnimation(true);
      setTimeout(() => {
        setIsAccepted(true);
        setShowConfetti(true);
        
        // Wait for the thank you card to render, then trigger confetti
        setTimeout(() => {
          if (thankYouCardRef.current) {
            const rect = thankYouCardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            createConfetti(centerX, centerY);
          }
        }, 100);
      }, 500);
    };

    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4 relative"
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 animate-title-glow bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
          <h2 className="text-display md:text-5xl font-serif-elegant font-bold mb-8 animate-title-glow bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Will You Join Us?
          </h2>
          <p className="text-amber-900 font-sans-clean font-medium text-body-large mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up bg-gradient-to-r from-amber-800 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Your presence would make our celebration even more special. 
            We can't wait to share this joyous moment with you!
          </p>

          <div className="relative min-h-[200px] flex items-center justify-center">
            {showAnimation && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-ping absolute w-32 h-32 bg-amber-400/30 rounded-full"></div>
                <div className="animate-ping absolute w-24 h-24 bg-amber-400/50 rounded-full animation-delay-150"></div>
                <div className="animate-ping absolute w-16 h-16 bg-amber-400/70 rounded-full animation-delay-300"></div>
              </div>
            )}

            {!isAccepted ? (
              <button
                onClick={handleAccept}
                disabled={showAnimation}
                className="sweeping-light-card group relative bg-gradient-to-r from-amber-400 to-amber-600 text-white font-sans-clean font-semibold px-12 py-6 rounded-full text-body-large shadow-2xl btn-lift disabled:opacity-50 disabled:cursor-not-allowed animate-button-bounce will-change-transform"
              >
                <span className="flex items-center space-x-3">
                  <Heart size={24} className="group-hover:animate-pulse" />
                  <span>Accept Invitation</span>
                  <Sparkles size={24} className="group-hover:animate-spin" />
                </span>
              </button>
            ) : (
              <div 
                ref={thankYouCardRef}
                className="animate__animated animate__fadeIn bg-gradient-to-br from-amber-100/90 to-yellow-100/90 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto text-center shadow-2xl border-2 border-amber-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Heart size={32} className="text-white" />
                  </div>
                  <h3 className="text-heading-2 font-serif-elegant font-bold text-amber-900 mb-2">Thank you, dear guest</h3>
                  <p className="text-amber-800 font-sans-clean font-medium">
                    We're thrilled that you'll be joining us for this special celebration!
                  </p>
                </div>
              </div>
            )}
          </div>

          {!isAccepted && (
            <p className="text-amber-800 font-sans-clean font-medium mt-6 text-caption animate-fade-in-delayed">
              Click to confirm your attendance
            </p>
          )}
        </div>
      </section>
    );
  }
);

AcceptInvitation.displayName = 'AcceptInvitation';

export default AcceptInvitation;