import React, { forwardRef } from 'react';
import { Heart, Users, Home, Sparkles } from 'lucide-react';

interface JourneyTimelineProps {
  isVisible: boolean;
  sectionIndex: number;
}

const milestones = [
  {
    year: '1999',
    title: 'First Meeting',
    description: 'Two hearts found each other in the most unexpected way',
    icon: Heart,
    color: 'from-pink-500 to-red-500'
  },
  {
    year: '2001',
    title: 'Wedding Day',
    description: 'The beginning of our beautiful journey together',
    icon: Sparkles,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    year: '2005',
    title: 'Growing Family',
    description: 'Our family grew with love and laughter',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2024',
    title: 'Silver Jubilee',
    description: '25 years of love, commitment, and togetherness',
    icon: Home,
    color: 'from-purple-500 to-indigo-500'
  }
];

const JourneyTimeline = forwardRef<HTMLDivElement, JourneyTimelineProps>(
  ({ isVisible, sectionIndex }, ref) => {
    return (
      <section 
        ref={ref}
        data-section={sectionIndex}
        className="py-20 px-4"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 text-center mb-16 animate-neon-glow-pulse">
            Our Journey Together
          </h2>

          <div className="relative">
            {/* Spiral Curved Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
              <svg className="w-2 h-full animate-spiral-draw" viewBox="0 0 8 800" fill="none">
                <path
                  d="M4 0 Q20 100 4 200 Q-12 300 4 400 Q20 500 4 600 Q-12 700 4 800"
                  stroke="url(#spiralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-spiral-flow"
                />
                <defs>
                  <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-16 md:space-y-20">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${
                      index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'
                    }`
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group ${
                      index === 0 ? 'animate-zoom-blur-reveal' :
                      index === 1 ? 'animate-ink-spread' :
                      index === 2 ? 'animate-split-reveal' : 'animate-bounce-pop'
                    }`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${milestone.color} group-hover:scale-110 transition-transform duration-300`}>
                          <milestone.icon size={28} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold animate-scrambled-decode bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">{milestone.year}</div>
                          <h3 className="text-2xl font-semibold transition-colors duration-300 animate-flicker-text bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed bg-gradient-to-r from-slate-700 via-gray-600 to-zinc-700 bg-clip-text text-transparent font-bold">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-6 h-6 bg-amber-400 rounded-full border-4 border-white shadow-xl animate-pulse"></div>
                    {/* Connection Line to Card */}
                    <div className={`absolute top-1/2 ${
                      index % 2 === 0 ? 'left-6' : 'right-6'
                    } w-8 h-0.5 bg-amber-300 transform -translate-y-1/2`}></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

JourneyTimeline.displayName = 'JourneyTimeline';

export default JourneyTimeline;