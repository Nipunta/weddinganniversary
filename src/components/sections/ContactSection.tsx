import React, { forwardRef } from 'react';

interface ContactSectionProps {
  isVisible: boolean;
  sectionIndex: number;
}

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ isVisible, sectionIndex }, ref) => {
    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 animate-title-slide bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Need More Info?
          </h2>
          <p className="text-amber-900 font-bold text-center text-lg mb-16 animate-fade-in-up bg-gradient-to-r from-amber-800 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            We're here to help with any questions you might have
          </p>

          <div className="text-center space-y-4">
            <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-card-float">
              <p className="text-amber-900 font-bold text-lg mb-2 animate-ink-spread-text">
                📞 Call us: <a href="tel:+919876543210" className="text-amber-700 hover:text-amber-600 font-bold transition-colors duration-300">+91 98765 43210</a>
              </p>
              <p className="text-amber-900 font-bold text-lg animate-split-reveal-text">
                ✉️ Email us: <a href="mailto:celebrate@anniversary.com" className="text-amber-700 hover:text-amber-600 font-bold transition-colors duration-300">celebrate@anniversary.com</a>
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="sweeping-light-card bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-card-slide">
              <h3 className="text-2xl font-bold mb-4 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
                Thank you for being part of our journey
              </h3>
              <div className="mt-6 text-amber-300 text-2xl">💖</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;