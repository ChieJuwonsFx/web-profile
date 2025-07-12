import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Star, Sparkles, MedalIcon, Badge, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Award = {
  title: string;
  description: string;
  year: string;
  category: string;
  icon: React.ComponentType<any>;
  gradient: string;
  darkGradient: string;
};

const AwardsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { darkMode } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".award-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out"
      });

      gsap.from(".stats-container", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "back.out(1.2)"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const awards: Award[] = [
    {
      title: '1st Place Winner UI/UX Design Competition',
      description: 'Informatics Innovation Festival - Universitas Telkom',
      year: '2024',
      category: 'UI/UX Design',
      icon: MedalIcon,
      gradient: 'from-red-400 to-purple-500',
      darkGradient: 'from-red-500 to-purple-600'
    },
    {
      title: '2nd Place Winner of UI/UX Design Competition',
      description: 'Informatics Championship X-Project 2024 - Universitas Negeri Surabaya',
      year: '2024',
      category: 'UI/UX Design',
      icon: Trophy,
      gradient: 'from-amber-400 to-orange-500',
      darkGradient: 'from-amber-500 to-orange-600'
    },
    {
      title: '1st Place Winner of UX Today',
      description: 'IT Today Competition 2024 - Institut Pertanian Bogor',
      year: '2024',
      category: 'User Experience',
      icon: Award,
      gradient: 'from-blue-400 to-purple-500',
      darkGradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Best Innovation in UX Today',
      description: 'IT Today Competition 2024 - Institut Pertanian Bogor',
      year: '2024',
      category: 'User Experience',
      icon: Sparkles,
      gradient: 'from-emerald-400 to-teal-500',
      darkGradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Rising Star Of The Year',
      description: 'Faculty of Computer Science Awarding Night - Universitas Jember',
      year: '2023',
      category: 'Academic Excellence',
      icon: Star,
      gradient: 'from-pink-400 to-rose-500',
      darkGradient: 'from-pink-500 to-rose-600'
    },
    {
      title: '1st Outstanding Student',
      description: 'School Level Science Program - SMA Negeri 1 Kencong',
      year: '2023',
      category: 'Academic Achievement',
      icon: Award,
      gradient: 'from-violet-400 to-indigo-500',
      darkGradient: 'from-violet-500 to-indigo-600'
    },
    {
      title: 'Finalist National Business Plan 3',
      description: 'National Business Plan Competition - Universitas Gunung Rinjani',
      year: '2024',
      category: 'Business & Innovation',
      icon: Badge,
      gradient: 'from-yellow-400 to-lime-500',
      darkGradient: 'from-yellow-500 to-lime-600'
    },
    {
      title: 'Finalist UI/UX Design Competition',
      description: 'ITCC 2023 - Universitas Udayana',
      year: '2023',
      category: 'UI/UX Design',
      icon: Moon,
      gradient: 'from-sky-400 to-cyan-500',
      darkGradient: 'from-sky-500 to-cyan-600'
    },
  ];

  const getGradient = (award: Award) => {
    return darkMode ? award.darkGradient : award.gradient;
  };

  return (
    <section 
      ref={sectionRef}
      id="awards" 
      className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-500 relative overflow-hidden`}
    >
      <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}></div>
      <div className={`absolute top-20 left-20 w-72 h-72 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse`}></div>
      <div className={`absolute bottom-20 right-20 w-96 h-96 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
      
      <div className="relative z-10 container mx-auto px-5 md:px-10 max-w-7xl">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20 border-blue-400/30'} px-4 py-2 rounded-full border mb-6`}>
            <Trophy className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Achievements</span>
          </div>
          <h2 className={`section-title text-5xl md:text-6xl font-bold ${darkMode ? 'bg-gradient-to-r from-white via-blue-100 to-purple-100' : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800'} bg-clip-text text-transparent mb-2 pt-2 pb-3 leading-tight`}>
            Awards & Recognition
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Celebrating excellence in design, innovation, and academic achievement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            const gradient = getGradient(award);
            return (
              <div
                key={index}
                className="group relative award-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} backdrop-blur-xl rounded-2xl p-8 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'} transition-all duration-500 hover:scale-[1.02] ${darkMode ? 'hover:shadow-2xl hover:shadow-blue-500/10' : 'hover:shadow-2xl hover:shadow-blue-400/20'}`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
                  
                  <div className="relative z-10">

                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                            {award.category}
                          </div>
                          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {award.year}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 leading-tight`}>
                      {award.title}
                    </h3>

                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                      {award.description}
                    </p>

                    <div className={`flex items-center justify-between pt-4 ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}></div>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Achievement Unlocked</span>
                      </div>
                      <div className={`w-8 h-0.5 bg-gradient-to-r ${gradient} transform transition-all duration-300 ${hoveredIndex === index ? 'w-12' : ''}`}></div>
                    </div>
                  </div>

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>

                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center stats-container px-4">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-xl rounded-2xl px-6 py-6 border w-full sm:w-auto`}>
            <div className="text-center">
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>5+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Awards Won</div>
            </div>
            <div className={`w-full h-px sm:w-px sm:h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>3+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Organizer</div>
            </div>
            <div className={`w-full h-px sm:w-px sm:h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>5+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Areas of Appreciation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;