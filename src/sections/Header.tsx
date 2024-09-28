import React, { useState, useEffect } from 'react';
import linkedin from '../assets/in.svg';
import github from '../assets/github.svg';
import download from '../assets/download.svg';
import { Toggle } from "../components/Toggle";
import { useLang } from "../context/LangContext";

export const Header: React.FC = () => {
  const { lang, toggleLang } = useLang();

  const [showH1, setShowH1] = useState(false);
  const [showSecondH2, setShowSecondH2] = useState(false);
  const [showOtherComponents, setShowOtherComponents] = useState(false);

  useEffect(() => {
    const h1Timeout = setTimeout(() => setShowH1(true), 1500);
    const h2Timeout = setTimeout(() => setShowSecondH2(true), 3000);
    const otherComponentsTimeout = setTimeout(() => setShowOtherComponents(true), 4500);

    return () => {
      clearTimeout(h1Timeout);
      clearTimeout(h2Timeout);
      clearTimeout(otherComponentsTimeout);
    };
  }, []);

  const firstH2Text = lang === 'spanish' ? 'Hola, soy' : "Hello, I'm";
  const h1Text = 'Dario Duarte';
  const secondH2Text = lang === 'spanish' ? 'Desarrollador Frontend' : 'Frontend Developer';

  return (
    <header id="home" className='w-full h-screen flex flex-col'>
      <div className="flex justify-end p-2 gap-1 fade-in">
        <Toggle 
          context={{ value: lang, toggle: toggleLang }}
          icon={'ES | EN'}
        />
      </div>

      <div className="flex flex-col justify-center items-center flex-grow">
        {/* Primer H2 con fade-in */}
        <h2 
          className={`text-3xl md:text-4xl lg:text-6xl text-white text-start transition-opacity duration-1000 ${
            showH1 ? 'opacity-100 visible' : 'opacity-0 invisible'}`
          }
        >
          {firstH2Text}
        </h2>

        {/* H1 con fade-in */}
        <h1 
          className={`text-center text-8xl font-bold md:text-7xl lg:text-9xl mb-2 text-cyan-300 transition-opacity duration-1000 ${
            showSecondH2 ? 'opacity-100 visible' : 'opacity-0 invisible'}`
          }
        >
          {h1Text}
        </h1>

        {/* Segundo H2 con fade-in */}
        <h2 
          className={`text-3xl md:text-4xl lg:text-6xl font-semibold text-white text-center transition-opacity duration-1000 ${
            showSecondH2 ? 'opacity-100 visible' : 'opacity-0 invisible'}`
          }
        >
          {secondH2Text}
        </h2>

        {/* Otros componentes: Íconos sociales y botón de descarga */}
        <div className={`flex flex-col items-center gap-6 mt-8 transition-opacity duration-1000 ${showOtherComponents ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className='flex gap-4'>
            <a 
              className="w-12 h-12 flex items-center justify-center rounded-md cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-cyan-300 hover:shadow-lg hover:shadow-cyan-500 relative" 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="p-1" src={linkedin} alt="LinkedIn" />
            </a>
            
            <a 
              className="w-12 h-12 flex items-center justify-center rounded-md cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-cyan-300 hover:shadow-lg hover:shadow-cyan-500 relative"
              href="https://www.github.com"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="p-1" src={github} alt="GitHub" />
            </a>
          </div>

          <div 
            className="shadow-md shadow-cyan-300 inline-flex items-center text-white font-semibold py-2 px-4 rounded-full cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500"
          >
            <a 
              href="/path/to/cv.pdf"
              download='CV_DarioDuarte.pdf'
              className='flex items-center space-x-2'                
            >
              <img src={download} alt="Descargar CV" className="w-6 h-6" />
              <p>
                {lang === 'spanish' ? 'Descarga mi CV' : 'Download my CV'}
              </p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};



