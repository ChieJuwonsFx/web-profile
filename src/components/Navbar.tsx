import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); 
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'aboutme', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'awards', label: 'Awards' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: '-50% 0px -49% 0px', 
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, [navItems]); 

  return (
    <nav className={`sticky top-0 z-50 shadow-sm py-1 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="max-w-screen mx-auto px-6 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            className="flex-shrink-0 flex items-center space-x-4"
            onClick={() => handleLinkClick('home')}
          >
            <span className="text-2xl font-mono font-bold">&lt;/&gt;</span>
            <span className="hidden lg:block text-xl font-medium tracking-tight">
              Richie Olajuwon Santoso
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeLink === item.id 
                        ? darkMode ? 'text-white' : 'text-gray-900' 
                        : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                    <span className={`absolute left-0 bottom-0 h-0.5 ${
                      darkMode ? 'bg-white' : 'bg-gray-900'
                    } transition-all duration-300 ${
                      activeLink === item.id ? 'w-full' : 'w-0'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                darkMode ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden absolute w-full z-50 shadow-lg"
          id="mobile-menu"
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-lg shadow-md ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  activeLink === item.id 
                    ? darkMode 
                      ? 'bg-white/10 text-white' 
                      : 'bg-gray-100 text-gray-900'
                    : darkMode 
                      ? 'text-gray-300 hover:bg-white/10 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;