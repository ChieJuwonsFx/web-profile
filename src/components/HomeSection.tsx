import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import profilePhoto from '../assets/fotoku.jpg';
import cvPdf from '../assets/Richie_Olajuwon_CV.pdf';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { darkMode } = useTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Richie_Olajuwon_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const initialAnimationsCtx = gsap.context(() => {
      gsap.from(".bg-shape", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      });

      gsap.from(".text-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(photoContainerRef.current, {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: "back.out(1.7)"
      });

      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 0, y: 30 });
        gsap.to(buttonRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 1.2, 
          ease: "back.out(1.7)"
        });
      }
    }, sectionRef);

    const floatingAnimationCtx = gsap.context(() => {
      gsap.to(photoContainerRef.current, {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    const toRotate = [
      "Information Systems Student",
      "UI/UX Designer",
      "Front-End Developer",
      "Digital Designer",
      "Tech Enthusiast"
    ];
    const period = 2000;
    let loopNum = 0;
    let txt = '';
    let isDeleting = false;
    let typewriterTimeout: NodeJS.Timeout;

    const tick = () => {
      const fullTxt = toRotate[loopNum % toRotate.length];
      txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);

      const typewriter = document.querySelector(".typewrite");
      if (typewriter) {
        typewriter.innerHTML = `<span class="wrap">${txt}</span><span class="cursor ${darkMode ? 'text-gray-300' : 'text-gray-600'}">|</span>`;
      }

      let delta = 150 - Math.random() * 100;
      if (isDeleting) delta /= 2;

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && txt === "") {
        isDeleting = false;
        loopNum++;
        delta = 500;
      }

      typewriterTimeout = setTimeout(tick, delta);
    };

    tick();

    return () => {
      initialAnimationsCtx.revert();
      floatingAnimationCtx.revert();
      clearTimeout(typewriterTimeout);
    };
  }, []); 
  
  useEffect(() => {
    if (photoContainerRef.current) {
      gsap.to(photoContainerRef.current.querySelector('img'), {
        borderColor: darkMode ? '#60a5fa' : '#3b82f6',
        duration: 0.5,
      });
    }

    if (textContentRef.current) {
      gsap.to(textContentRef.current.querySelectorAll('h1, p, .typewrite'), {
        color: darkMode ? '#f3f4f6' : '#1f2937',
        duration: 0.5,
      });
      
      gsap.to(textContentRef.current.querySelector('.text-blue-500'), {
        color: darkMode ? '#93c5fd' : '#3b82f6',
        duration: 0.5,
      });
    }

    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 1, y: 0 });
    }
  }, [darkMode]); 

  return (
    <div
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden py-12 md:py-24"
    >
      <div className="bg-shape absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-400/10" />
      <div className="bg-shape absolute -right-10 top-1/4 w-60 h-60 rounded-full bg-blue-500/5 dark:bg-blue-400/5" />

      <div ref={textContentRef} className="text-content w-full md:w-auto md:max-w-xl mx-4 md:mx-8 text-center md:text-left">
        <p className="text-lg sm:text-xl md:text-2xl text-blue-500 dark:text-blue-400 mb-2 sm:mb-3 transition-colors duration-500">
          HELLO, MY NAME IS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight transition-colors duration-500">
          <span className="text-blue-500 dark:text-blue-400 transition-colors duration-500">Richie</span>{' '}
          <span className="text-gray-800 dark:text-white transition-colors duration-500">Olajuwon Santoso</span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 typewrite transition-colors duration-500 h-8 sm:h-10 md:h-12">
          <span className="wrap"></span>
        </div>
        <button 
          ref={buttonRef}
          onClick={handleDownload}
          className="px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Download CV
        </button>
      </div>

      <div 
        ref={photoContainerRef} 
        className="relative w-full md:w-auto mt-8 sm:mt-12 md:mt-0 md:ml-8 lg:ml-12 flex justify-center"
      >
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-dashed border-blue-500 dark:border-blue-400 transition-colors duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;