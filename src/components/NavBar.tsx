import { useState, useEffect } from 'react';
import home from '../assets/home.svg';
import user from '../assets/user.svg';
import code from '../assets/code.svg';
import mail from '../assets/mail.svg';
import arrowUp from '../assets/arrow-up.svg';

const NavBar = () => {
  // States to control visibility, window size, active section, and if the user is at the bottom of the page
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Function to check if the view is on desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Function to handle scroll events and update the active section, visibility, and bottom of page status
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Toggle the navbar visibility based on scroll position
      setIsVisible(scrollPosition > 150);

      // Check if the user is near the bottom of the page
      setIsAtBottom(scrollPosition + windowHeight >= documentHeight - 100);

      // Update the active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    // Initial checks on load
    checkIsDesktop();
    handleScroll();

    // Add event listeners for resize and scroll events
    window.addEventListener('resize', checkIsDesktop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* NavBar */}
      <div
        className={`fixed bottom-4 left-0 right-0 flex justify-center transition-all duration-500 ease-in-out transform ${
          isVisible && !isAtBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } z-50`}
      >
        <nav className="bg-black rounded-full shadow-lg overflow-hidden shadow-blue-300 cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500">
          <ul
            className={`flex items-center justify-center ${
              isDesktop ? 'space-x-32 px-8' : 'space-x-10 px-4'
            } py-3`}
          >
            <li>
              <a href="#home" className="block transition-opacity duration-300 hover:opacity-70">
                <img
                  src={home}
                  alt="Inicio"
                  className={`w-6 h-6 ${activeSection === 'home' ? 'text-blue-300' : ''}`}
                  style={{
                    filter:
                      activeSection === 'home'
                        ? 'brightness(0) saturate(100%) invert(74%) sepia(43%) saturate(3063%) hue-rotate(179deg) brightness(98%) contrast(93%)'
                        : '',
                  }}
                />
              </a>
            </li>
            <li>
              <a href="#about" className="block transition-opacity duration-300 hover:opacity-70">
                <img
                  src={user}
                  alt="Acerca de"
                  className={`w-7 h-7 ${activeSection === 'about' ? 'text-blue-300' : ''}`}
                  style={{
                    filter:
                      activeSection === 'about'
                        ? 'brightness(0) saturate(100%) invert(74%) sepia(43%) saturate(3063%) hue-rotate(179deg) brightness(98%) contrast(93%)'
                        : '',
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block transition-opacity duration-300 hover:opacity-70"
              >
                <img
                  src={code}
                  alt="Proyectos"
                  className={`w-7 h-7 ${activeSection === 'projects' ? 'text-blue-300' : ''}`}
                  style={{
                    filter:
                      activeSection === 'projects'
                        ? 'brightness(0) saturate(100%) invert(74%) sepia(43%) saturate(3063%) hue-rotate(179deg) brightness(98%) contrast(93%)'
                        : '',
                  }}
                />
              </a>
            </li>
            <li>
              <a href="#contact" className="block transition-opacity duration-300 hover:opacity-70">
                <img
                  src={mail}
                  alt="Contacto"
                  className={`w-6 h-6 ${activeSection === 'contact' ? 'text-blue-300' : ''}`}
                  style={{
                    filter:
                      activeSection === 'contact'
                        ? 'brightness(0) saturate(100%) invert(74%) sepia(43%) saturate(3063%) hue-rotate(179deg) brightness(98%) contrast(93%)'
                        : '',
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Arrow back to home */}
      <div
        className={`fixed bottom-10 right-10 z-50 transition-all duration-500 ease-in-out transform bg-black rounded-full p-2 shadow-lg shadow-blue-300 hover:shadow-blue-500 hover:scale-120 hover:shadow-xl ${
          isAtBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <a href="#home" className="block ">
          <img src={arrowUp} alt="Volver al inicio" className="w-10 h-10" />
        </a>
      </div>
    </>
  );
};

export default NavBar;

