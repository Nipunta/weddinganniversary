import React, { forwardRef } from 'react';
import { Check, Heart } from 'lucide-react';

interface AcceptInvitationProps {
  isVisible: boolean;
  sectionIndex: number;
}

const AcceptInvitation = forwardRef<HTMLDivElement, AcceptInvitationProps>(
  ({ isVisible, sectionIndex }, ref) => {
    const handleAccept = () => {
      // Handle invitation acceptance logic here
      alert('Thank you for accepting our invitation!');
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
              Will You Join Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your presence would make our celebration complete. Please let us know if you can attend our special day.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAccept}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              <Check className="w-5 h-5 mr-2" />
              Accept Invitation
            </button>
            
            <p className="text-sm text-gray-500">
              We can't wait to celebrate with you!
            </p>
          </div>
        </div>
      </div>
    );
  }
);

AcceptInvitation.displayName = 'AcceptInvitation';

export default AcceptInvitation;