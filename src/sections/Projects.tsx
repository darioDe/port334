import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import Card from '../components/Card';
import projects from '../data/proyectData'; // Import the projects array

const Projects = () => {
  const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);
  const { lang } = useLang();
  const titleRef = useRef<HTMLDivElement>(null);

  // Handle title visibility with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target === titleRef.current) {
              setIsTitleVisible(true);
            }
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.8 } // Trigger when 80% of the title is visible
    );

    if (titleRef.current) observer.observe(titleRef.current);

    // Cleanup the observer on component unmount
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div id="projects" className='mt-10 flex flex-col items-center justify-center'>
      
      {/* Title with fade-in effect */}
      <div 
        className={`flex items-center transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
        ref={titleRef}
      >
        <h3 className='text-5xl text-white'>
          {lang === 'spanish' ? 'PROYECTOS' : 'PROJECTS'}
        </h3>
      </div>

      {/* Projects grid */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mt-7 md:mt-20 p-3">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
