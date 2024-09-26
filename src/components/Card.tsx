import { useState, useEffect, useRef } from "react"
import ProjectProps from "../types/Projects";

export default function Card({ project }: { project: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardVisible, setIsCardVisible ] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver (
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    if (target === cardRef.current) {
                      setIsCardVisible(true)
                    }

                    observer.unobserve(entry.target)
                }
            });
        },
        { threshold: 0.6 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
        if (cardRef.current) observer.unobserve(cardRef.current);
    };
}, [])

  return (
    <div 
      className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-lg h-64 md:h-80 group transition-opacity duration-1000 ${isCardVisible ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
    >
      <img src={project.image} alt={project.title} className="w-full h-full " />
      <div 
        className={`absolute inset-0 bg-black bg-opacity-80 p-4 transition-transform duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        } flex flex-col justify-center items-center gap-16`}
      >
        <div className="flex flex-col items-center">
          <h4 className="text-2xl font-bold text-emerald-600 mb-2">{project.title}</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-white text- fmdont-medium px-2.5 py-0.5 underline">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.codeUrl}
            className="border-4 border-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 text-center transition-colors duration-300 rounded-full"
          >
            CÓDIGO
          </a>
          <a
            href={project.deployUrl}
            className="border-4 border-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 text-center transition-colors duration-300 rounded-full"
          >
            DESPLIEGUE
          </a>
        </div>
      </div>
    </div>
    )
  }