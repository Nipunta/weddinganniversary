import React, { forwardRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  isVisible: boolean;
  sectionIndex: number;
}

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ isVisible, sectionIndex }, ref) => {
    return (
      <div
        ref={ref}
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Phone className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <a 
                href="tel:+1234567890" 
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                +1 (234) 567-8900
              </a>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Mail className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <a 
                href="mailto:celebration@example.com" 
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                celebration@example.com
              </a>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Celebration Street<br />
                Love City, LC 12345
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-lg text-gray-600">
              Have questions? We'd love to hear from you!
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;