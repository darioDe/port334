import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import Card from '../components/Card';
import movieSearcher from '../assets/movie-searcher.png'
import ProjectProps from '../types/Projects'
import advice from '../assets/advice-generator.png'



const projects: ProjectProps[] = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Una aplicación de comercio electrónico completa con carrito de compras y pasarela de pago.",
    image: movieSearcher,
    tags: ["React", "Node.js", "MongoDB"],
    codeUrl: "#",
    deployUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Un sitio web de portfolio personal con diseño responsivo y animaciones suaves.",
    image: advice,
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "#",
    deployUrl: "#"
  },
  {
    id: 3,
    title: "App de Tareas",
    description: "Una aplicación de gestión de tareas con autenticación de usuarios y almacenamiento en la nube.",
    image: movieSearcher,
    tags: ["React Native", "Firebase"],
    codeUrl: "#",
    deployUrl: "#"
  },
  {
    id: 4,
    title: "Blog de Tecnología",
    description: "Un blog de tecnología con sistema de gestión de contenidos personalizado.",
    image: movieSearcher,
    tags: ["Next.js", "Tailwind CSS", "Sanity.io"],
    codeUrl: "#",
    deployUrl: "#"
  }
]

const Projects = () => {
  const [isTitleVisible, setIsTitleVisible ] = useState<boolean>(false);

  const { lang } = useLang();

  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver (
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    if (target === titleRef.current) {
                        setIsTitleVisible(true);
                    }
                    observer.unobserve(entry.target)
                }
            });
        },
        { threshold: 0.7 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
        if (titleRef.current) observer.unobserve(titleRef.current);
    };
}, [])


  return (
    <div id="projects" className='mt-10 flex flex-col items-center justify-center'>
        <div 
          className={`flex items-center transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
          ref={titleRef}
        >            
          <h3 
            className='text-5xl text-white'
          >
            {lang === 'spanish' ? 'PROYECTOS' :'PROJECTS'}
          </h3>
            
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mt-7  md:mt-20 p-3 ">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}



export default Projects