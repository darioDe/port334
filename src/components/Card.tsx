import { useState, useEffect, useRef } from "react";
import ProjectProps from "../types/Projects";
import { useLang } from "../context/LangContext";

export default function Card({ project }: { project: ProjectProps }) {
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false); // Nuevo estado para la visibilidad de la tarjeta
  const cardRef = useRef<HTMLDivElement>(null); // Referencia para la tarjeta

  const { lang } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCardVisible(true);
            observer.unobserve(entry.target); // Deja de observar una vez visible
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral para activar la animación
    );

    if (cardRef.current) {
      observer.observe(cardRef.current); // Observa la tarjeta
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Limpia el observador al desmontar
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group transition-opacity duration-1000 ease-in-out transform ${isCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} // Aplica animación de fade-in
    >
      <div className="m-4 p-2 max-w-md shadow-lg shadow-blue-300 rounded-lg cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500">
        <img className='rounded-lg' src={project.image} alt={project.title} />

        <div className="flex flex-col justify-center items-center p-2">
          <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>

          <div className="flex">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-cyan-300 font-semibold px-2.5 py-0.5">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={project.codeUrl}
              className="text-white text-center rounded-full shadow-md shadow-cyan-300 p-2 cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500"
            >
              {lang == 'spanish' ? 'CÓDIGO' : 'CODE'}
            </a>
            <a
              href={project.deployUrl}
              className="text-white rounded-full shadow-md shadow-cyan-300 p-2 cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500"
            >
              {lang == 'spanish' ? 'DESPLIEGUE' : 'DEPLOY'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
