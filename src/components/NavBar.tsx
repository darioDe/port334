import { useState, useEffect } from 'react';
import home from '../assets/home.svg';
import user from '../assets/user.svg';
import code from '../assets/code.svg';
import mail from '../assets/mail.svg';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 150)
    }

    checkIsDesktop();
    handleScroll();

    window.addEventListener('resize', checkIsDesktop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`fixed bottom-4 left-0   right-0 flex justify-center transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} z-50`}>
      <nav className="bg-black rounded-full shadow-lg overflow-hidden shadow-emerald-300">
        <ul className={`flex items-center justify-center ${isDesktop ? 'space-x-32 px-8' : 'space-x-10 px-4'} py-3`}>
          <li>
            <a href="#home" className="block transition-opacity duration-300 hover:opacity-70">
              <img src={home} alt="Inicio" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#about" className="block transition-opacity duration-300 hover:opacity-70">
              <img src={user} alt="Acerca de" className="w-7 h-7" />
            </a>
          </li>
          <li>
            <a href="#projects" className="block transition-opacity duration-300 hover:opacity-70">
              <img src={code} alt="Proyectos" className="w-7 h-7" />
            </a>
          </li>
          <li>
            <a href="#contact" className="block transition-opacity duration-300 hover:opacity-70">
              <img src={mail} alt="Contacto" className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar