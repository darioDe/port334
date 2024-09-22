import { useState } from "react"
import ProjectProps from "../types/Projects"
import arrowUp from '../assets/arrow-up.svg'

export default function Card({ project }: { project: ProjectProps }) {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  
    return (
      <div className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <img src={project.image} alt={project.title} className="w-full h-full rounded-xl object-cover " />
            <button
              className="absolute top-4 left-1/2 transform -translate-x-1/2 rounded-full p-2 shadow-md"
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
              aria-label="Toggle description"
            >
              <img
                src={arrowUp}
                className={`w-6 h-6 transition-transform ${isDescriptionVisible ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isDescriptionVisible && (
              <div className="absolute inset-0 bg-black bg-opacity-70 p-4 overflow-auto">
                <p className="text-white">{project.description}</p>
              </div>
            )}
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <a
                href={project.codeUrl}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-center"
              >
                CÓDIGO
              </a>
              <a
                href={project.deployUrl}
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded text-center"
              >
                DESPLIEGUE
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }