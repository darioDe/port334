import { useState } from 'react'
import {  useLang } from "../context/LangContext";
import arrwpUp from '../assets/arrow-up.svg'
import movieSearcher from '../assets/movie-searcher.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Una aplicación de comercio electrónico completa con carrito de compras y pasarela de pago.",
    image: movieSearcher,
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Un sitio web de portfolio personal con diseño responsivo y animaciones suaves.",
    image: movieSearcher,
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "App de Tareas",
    description: "Una aplicación de gestión de tareas con autenticación de usuarios y almacenamiento en la nube.",
    image: movieSearcher,
    tags: ["React Native", "Firebase"]
  },
  {
    id: 4,
    title: "Blog de Tecnología",
    description: "Un blog de tecnología con sistema de gestión de contenidos personalizado.",
    image: movieSearcher,
    tags: ["Next.js", "Tailwind CSS", "Sanity.io"]
  }
]

const Proyects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const { lang } = useLang();

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <div className='mt-24 flex flex-col items-center justify-center'>
        <div className='flex items-center'>             
            <hr className='w-20 md:w-40 m-1 md:m-5 bg-slate-900'/>
                <h3 
                    className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900'
                >
                    {lang === 'spanish' ? 'Proyectos' :'Proyects'}
                </h3>
            <hr className='w-20 md:w-40 m-1 md:m-5 bg-slate-900'/>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 sm:p-20 md:p-40 lg:p-20 xl:p-32 gap-10 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-64">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div 
                className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-white transition-all duration-300 ease-in-out ${
                  expandedProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
              >
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="p-4 flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div
                className={`transition-transform duration-300 ${
                  expandedProject === project.id ? 'rotate-180' : ''
                } z-10`}
                onClick={() => toggleProject(project.id)}
              >
                <img 
                  src={arrwpUp}
                  alt="Expandir proyecto" 
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyects