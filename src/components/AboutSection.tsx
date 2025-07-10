import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import fotoFormalku from '../assets/foto_formalku.jpg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(photoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3
      });

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          delay: 0.6,
          ease: "power3.out"
        });
      }

      if (photoRef.current) {
        gsap.to(photoRef.current, {
          y: 15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      const imgElement = photoRef.current?.querySelector('img');
      if (imgElement) {
        gsap.to(imgElement, {
          borderColor: darkMode ? '#93c5fd' : '#3b82f6',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [darkMode]);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current.querySelectorAll('h3, p'), {
        color: darkMode ? '#f3f4f6' : '#1f2937',
        duration: 0.5,
      });
      
      const blueElement = contentRef.current.querySelector('.text-blue-500');
      if (blueElement) {
        gsap.to(blueElement, {
          color: darkMode ? '#93c5fd' : '#3b82f6',
          duration: 0.5,
        });
      }
    }
  }, [darkMode]);

  const skillColors = {
    blue: {
      bg: darkMode ? 'bg-blue-900/30' : 'bg-blue-100',
      text: darkMode ? 'text-blue-400' : 'text-blue-600',
      border: darkMode ? 'border-blue-400/30' : 'border-blue-600/30',
      hover: darkMode ? 'hover:bg-blue-400/10' : 'hover:bg-blue-600/10'
    },
    emerald: {
      bg: darkMode ? 'bg-emerald-900/30' : 'bg-emerald-100',
      text: darkMode ? 'text-emerald-400' : 'text-emerald-600',
      border: darkMode ? 'border-emerald-400/30' : 'border-emerald-600/30',
      hover: darkMode ? 'hover:bg-emerald-400/10' : 'hover:bg-emerald-600/10'
    },
    purple: {
      bg: darkMode ? 'bg-purple-900/30' : 'bg-purple-100',
      text: darkMode ? 'text-purple-400' : 'text-purple-600',
      border: darkMode ? 'border-purple-400/30' : 'border-purple-600/30',
      hover: darkMode ? 'hover:bg-purple-400/10' : 'hover:bg-purple-600/10'
    },
    amber: {
      bg: darkMode ? 'bg-amber-900/30' : 'bg-amber-100',
      text: darkMode ? 'text-amber-400' : 'text-amber-600',
      border: darkMode ? 'border-amber-400/30' : 'border-amber-600/30',
      hover: darkMode ? 'hover:bg-amber-400/10' : 'hover:bg-amber-600/10'
    }
  };

  return (
    <section
      ref={sectionRef}
      id="aboutme"
      className={`py-28 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-500 relative overflow-hidden`}
    >

      <div className="container mx-auto px-5 md:px-10 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            <span className="relative inline-block">
              About Me
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent ${darkMode ? 'via-blue-400' : 'via-blue-600'} to-transparent mt-2`}></span>
            </span>
          </h2>
          <p className={`section-title text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-light tracking-wider uppercase text-sm`}>
            Discover My Professional Journey
          </p>
        </div>
        
        <div className={`rounded-xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-500 relative overflow-hidden`}>
          <div 
            ref={photoRef}
            className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 relative"
          >
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
            <img
              src={fotoFormalku}
              alt="Profile Picture"
              className="w-48 h-48 rounded-full object-cover border-4 shadow-xl relative z-10"
              style={{
                borderColor: darkMode ? '#60a5fa' : '#3b82f6'
              }}
            />
          </div>
          
          <div ref={contentRef} className="text-center md:text-left">
            <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Hi, I'm <span className={darkMode ? 'text-blue-400 font-bold' : 'text-blue-600 font-bold'}>Richie</span>
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                A highly motivated Information Systems student (GPA 3.96), passionate about UI/UX design and web development. Proficient in Figma, Laravel, Tailwind CSS, JavaScript, React, and database management (MySQL, PostgreSQL). Demonstrated ability to collaborate effectively in teams on various competitions and web development projects, driven by a passion for crafting user-centered digital solutions that combine functionality with aesthetic appeal.            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { name: 'UI/UX', color: 'blue' },
                { name: 'Front-end', color: 'emerald' },
                { name: 'Data Science', color: 'purple' },
                { name: 'Business Tech', color: 'amber' }
              ].map((skill) => {
                const color = skillColors[skill.color as keyof typeof skillColors];
                return (
                  <span 
                    key={skill.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${color.bg} ${color.text} ${color.border} ${color.hover}`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;