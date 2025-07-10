import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import BlindSonic from '../assets/BlindSonic.webp';
import TourHomie from '../assets/TourHomie.webp';
import Maenklung from '../assets/maenklung.webp';
import Innovixus from '../assets/innovixus.webp';
import PakTelang from '../assets/paktelang.webp';
import Profile from '../assets/web-profile.webp';
import ApiIndo from '../assets/api-wilayah.webp';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  role: string;
  technologies: string[];
  color: string;
  githubLink?: string;
  demoLink?: string;
};

const ProjectsSection: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Blind Sonic',
      description: 'Blind Sonic adalah aplikasi game interaktif untuk penyandang tunanetra yang memanfaatkan teknologi audio. Pengguna dapat menjelajahi dunia virtual melalui suara dan kontrol sederhana.',
      image: BlindSonic,
      role: 'UI/UX Designer',
      technologies: ['Figma', 'Adobe Ilustrator'],
      color: '#6A0DAD', 
      demoLink: 'https://www.figma.com/proto/3TuOq7jwQiX3rp5QiBumnp/Blind-Sonic---Game-untuk-Penyandang-Tunanetra?node-id=201-15&t=OdIdqIQEDEOmurhk-1'
    },
    {
      id: 2,
      title: 'InnoVixus',
      description: 'InnoVixus adalah sistem manajemen toko dan e-commerce terintegrasi yang dirancang untuk membantu pelaku usaha khususnya UMKM mengelola aktivitas operasional toko secara efisien, cerdas, dan modern.',
      image: Innovixus,
      role: 'Fullstack Developer',
      technologies: ['Laravel', 'PHP', 'Tailwind', 'AJAX'],
      color: '#003B73', 
      githubLink: 'https://github.com/ChieJuwonsFx/Belajar-PWEB'
    },
    {
      id: 3,
      title: 'Pak Telang',
      description: 'Prelovedia adalah platform online berbasis website yang didedikasikan untuk jual beli barang bekas berkualitas. Pengguna dapat dengan mudah dan aman menjual serta membeli berbagai jenis barang preloved.',
      image: PakTelang,
      role: 'Designer',
      technologies: ['Figma', 'Laravel', 'React'],
      color: '#C39BD3',
      demoLink: 'https://paktelang.up.railway.app/'
    },
    {
      id: 4,
      title: 'Tour Homie',
      description: 'TourHomie adalah aplikasi yang membantu wisatawan asing menemukan destinasi wisata sesuai preferensi mereka, menyediakan informasi tentang tempat wisata, kuliner, budaya lokal.',
      image: TourHomie,
      role: 'UI/UX Designer',
      technologies: ['React Native', 'Firebase', 'Maps API'],
      color: '#8CBEDD', 
      demoLink: 'https://www.figma.com/proto/cxxXYJScbiqSmLs6doQtJX/TRAM---TourHomie?node-id=0-1&t=I1pRL1NwgsJGcXzJ-1'
    },
    {
      id: 5,
      title: 'MAÉNKLUNG',
      description: 'MAÉNKLUNG adalah platform web interaktif yang mengenalkan Angklung alat musik tradisional Indonesia melalui pendekatan digital yang modern dan edukatif yang dibangun dengan HTML, Tailwind CSS, dan JavaScript.',
      image: Maenklung,
      role: 'Designer',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: '#A0522D', 
      githubLink: 'https://github.com/ChieJuwonsFx/MAENKLUNG',
      demoLink: 'https://maenklung.vercel.app/'
    },
    {
      id: 6,
      title: 'API Wilayah Indonesia',
      description: 'Sebuah API yang menyajikan data hierarki wilayah Indonesia mulai dari kabupaten/kota, kecamatan, hingga kelurahan yang tersebar di 38 provinsi yang ada di Indonesia.',
      image: ApiIndo,
      role: 'Developer',
      technologies: ['JavaScript'],
      color: '#3498DB', 
      githubLink: 'https://github.com/ChieJuwonsFx/api-wilayah-indonesia',
      demoLink: 'https://chiejuwonsfx.github.io/api-wilayah-indonesia/'
    },
    {
      id: 7,
      title: 'Web Portofolio',
      description: 'Website portofolio pribadi yang dirancang untuk menampilkan profil diri, proyek-proyek yang telah dikerjakan, keterampilan teknis, pengalaman organisasi, serta pencapaian selama studi.',
      image: Profile,
      role: 'Front-End Developer',
      technologies: ['React', 'Tailwind'],
      color: '#2980B9', 
      githubLink: 'https://github.com/ChieJuwonsFx/web-profile',
      demoLink: 'https://richie-olajuwon-santoso.vercel.app/'
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".project-slider", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      gsap.from(".project-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.6,
        ease: "power3.out"
      });

      gsap.to(".active-indicator", {
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current.querySelectorAll('h2, h3, p'), {
        color: darkMode ? '#f3f4f6' : '#1f2937',
        duration: 0.5,
      });
      
      const accentElements = sectionRef.current.querySelectorAll('.accent-color');
      gsap.to(accentElements, {
        color: darkMode ? '#93c5fd' : '#3b82f6',
        duration: 0.5,
      });
    }
  }, [darkMode]);

  useEffect(() => {
    if (!isMobile) {
      const items = document.querySelectorAll('#slider-item .item');
      
      function loadShow() {
        let stt = 0;
        items[activeIndex]?.setAttribute('style', 'transform: none; z-index: 1; filter: none; opacity: 1;');
        
        for (let i = activeIndex + 1; i < items.length; i++) {
          stt++;
          items[i]?.setAttribute(
            'style',
            `transform: translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg);
             z-index: -${stt};
             filter: blur(5px);
             opacity: ${stt > 2 ? 0 : 0.6};`
          );
        }

        stt = 0;
        for (let i = activeIndex - 1; i >= 0; i--) {
          stt++;
          items[i]?.setAttribute(
            'style',
            `transform: translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg);
             z-index: -${stt};
             filter: blur(5px);
             opacity: ${stt > 2 ? 0 : 0.6};`
          );
        }
      }

      loadShow();
    }
  }, [activeIndex, isMobile]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1 < projects.length ? prev + 1 : 0));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : projects.length - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`py-28 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-500 relative overflow-hidden`}
    >
      <div className="container mx-auto px-5 md:px-10 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            <span className="relative inline-block">
              My{' '}
              <span className={`accent-color ${darkMode ? 'text-blue-400' : 'text-blue-600'} relative`}>
                Projects
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mt-2`}></span>
              </span>
            </span>
          </h2>
          <p className={`section-title text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-light tracking-wider uppercase text-sm`}>
            Explore My Creative Work
          </p>
        </div>

        {!isMobile && (
          <div 
            ref={sliderRef}
            id="slider-item" 
            className="slider project-slider relative h-[650px] overflow-hidden flex items-center justify-center"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="item project-card absolute w-[330px] sm:w-[350px] md:w-[380px] lg:w-[420px] h-[600px] transition-all duration-300 ease-out cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                <motion.div 
                  className={`relative h-full w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  whileHover={{ 
                    scale: index === activeIndex ? 1.02 : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative w-full h-64 overflow-hidden rounded-t-lg flex-shrink-0">
                    <div 
                      className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent"
                      style={{ background: `linear-gradient(to top, ${project.color}80, transparent 60%)` }}
                    />
                    
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-4 left-4 z-20">
                      <span 
                        className="px-3 py-1 text-xs font-medium rounded-full text-white backdrop-blur-sm shadow-md"
                        style={{ 
                          backgroundColor: `${project.color}`,
                          border: `1px solid ${project.color}`
                        }}
                      >
                        {project.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1 overflow-y-auto">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 mt-auto">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                            darkMode 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Code
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 px-4 rounded-lg text-sm font-medium text-white transition-colors"
                          style={{ backgroundColor: project.color }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${project.color}20, transparent, ${project.color}20)`,
                      filter: 'blur(20px)'
                    }}
                  />
                </motion.div>
              </div>
            ))}

            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className={`absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 z-50 
                w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl
                flex items-center justify-center transition-all duration-300 hover:scale-110
                ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} disabled:opacity-50 disabled:cursor-not-allowed
                border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <svg className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className={`absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-50 
                w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl
                flex items-center justify-center transition-all duration-300 hover:scale-110
                ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} disabled:opacity-50 disabled:cursor-not-allowed
                border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <svg className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {isMobile && (
          <div className="relative">
            <div 
              className="px-4 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <motion.div 
                      className={`relative w-full max-w-sm mx-auto rounded-2xl shadow-xl overflow-hidden min-h-[500px] ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      } border ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex flex-col`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
                        <div 
                          className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"
                          style={{ background: `linear-gradient(to top, ${project.color}60, transparent 70%)` }}
                        />
                        
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        
                        <div className="absolute top-3 left-3 z-20">
                          <span 
                            className="px-2 py-1 text-xs font-medium rounded-full text-white backdrop-blur-sm"
                            style={{ 
                              backgroundColor: `${project.color}`,
                              border: `1px solid ${project.color}`
                            }}
                          >
                            {project.role}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex-1 overflow-y-auto">
                          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                            {project.title}
                          </h3>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-4 mt-auto">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 text-center py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                                darkMode 
                                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                              }`}
                            >
                              View Code
                            </a>
                          )}
                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center py-2.5 px-3 rounded-lg text-sm font-medium text-white transition-colors"
                              style={{ backgroundColor: project.color }}
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 px-4">
              <div className={`w-full h-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                <div 
                  className="h-full rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((activeIndex + 1) / projects.length) * 100}%`,
                    backgroundColor: projects[activeIndex].color
                  }}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeIndex + 1} of {projects.length}
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {projects[activeIndex].title}
                </span>
              </div>
            </div>
          </div>
        )}

        {!isMobile && (
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className={`inline-flex items-center space-x-4 px-6 py-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}>
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: projects[activeIndex].color }}
              />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {projects[activeIndex].title}
              </span>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {projects[activeIndex].role}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;