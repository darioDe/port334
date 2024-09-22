import { useState } from "react"
import ProjectProps from "../types/Projects";

export default function Card({ project }: { project: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg h-64 md:h-80 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={project.image} alt={project.title} className="w-full h-full " />
      <div 
        className={`absolute inset-0 bg-black bg-opacity-80 p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } flex flex-col justify-center items-center gap-16`}
      >
        <div className="flex flex-col items-center">
          <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
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
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 text-center transition-colors duration-300 rounded-full"
          >
            CÓDIGO
          </a>
          <a
            href={project.deployUrl}
            className="bg-slate-200 hover:bg-slate-400 text-gray-800 font-bold py-2 px-4 text-center transition-colors duration-300 rounded-full"
          >
            DESPLIEGUE
          </a>
        </div>
      </div>
    </div>
    )
  }