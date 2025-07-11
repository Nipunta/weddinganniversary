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
          <h2 className="text-display md:text-5xl font-serif-elegant font-bold text-center mb-4 animate-title-slide bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            Need More Info?
          </h2>
          <p className="text-amber-900 font-sans-clean font-medium text-center text-body-large mb-16 animate-fade-in-up bg-gradient-to-r from-amber-800 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
            We're here to help with any questions you might have
          </p>

          <div className="text-center space-y-4">
            <div className="sweeping-light-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-card-float will-change-transform">
              <p className="text-amber-900 font-sans-clean font-semibold text-body-large mb-2 animate-ink-spread-text">
                📞 Call us: <a href="tel:+919876543210" className="text-amber-700 font-sans-clean font-semibold link-elegant">+91 98765 43210</a>
              </p>
              <p className="text-amber-900 font-sans-clean font-semibold text-body-large animate-split-reveal-text">
                ✉️ Email us: <a href="mailto:celebrate@anniversary.com" className="text-amber-700 font-sans-clean font-semibold link-elegant">celebrate@anniversary.com</a>
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="sweeping-light-card bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-card-slide will-change-transform">
              <h3 className="text-heading-2 font-serif-elegant font-bold mb-4 animate-ink-spread-text bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
                Thank you for being part of our journey
              </h3>
              <p className="text-amber-900 font-sans-clean font-medium text-body-large leading-relaxed max-w-2xl mx-auto animate-split-reveal-text">
                Your love and support over the years have meant the world to us. 
                We look forward to celebrating this milestone with all our dear friends and family.
              </p>
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