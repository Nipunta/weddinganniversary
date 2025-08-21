import React, { forwardRef } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventDetailsProps {
  isVisible: boolean;
  sectionIndex: number;
}

const EventDetails = forwardRef<HTMLDivElement, EventDetailsProps>(
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
            Event Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <Calendar className="w-16 h-16 text-rose-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Date</h3>
              <p className="text-xl text-gray-600 mb-2">Saturday</p>
              <p className="text-2xl font-bold text-rose-600">December 15, 2024</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <Clock className="w-16 h-16 text-rose-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Time</h3>
              <p className="text-xl text-gray-600 mb-2">Ceremony</p>
              <p className="text-2xl font-bold text-rose-600">6:00 PM</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <MapPin className="w-16 h-16 text-rose-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Venue</h3>
              <p className="text-lg text-gray-600 mb-2">Grand Celebration Hall</p>
              <p className="text-gray-500">123 Anniversary Avenue<br />Love City, LC 12345</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <Users className="w-16 h-16 text-rose-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dress Code</h3>
              <p className="text-lg text-gray-600 mb-2">Semi-Formal</p>
              <p className="text-gray-500">Elegant attire requested</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-rose-100 to-amber-100 rounded-lg p-6">
            <p className="text-lg text-gray-700">
              Join us for an evening of love, laughter, and celebration as we commemorate this special milestone in our journey together.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

EventDetails.displayName = 'EventDetails';

export default EventDetails;