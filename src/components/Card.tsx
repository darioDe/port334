import ProjectProps from "../types/Projects";

export default function Card({ project }: { project: ProjectProps }) {

  return (
    <div className="m-4 p-2 max-w-md shadow-lg shadow-blue-300 rounded-lg cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500">
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
            CÓDIGO
          </a>
          <a
            href={project.deployUrl}
            className="text-white rounded-full shadow-md shadow-cyan-300 p-2 cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500"
          >
            DESPLIEGUE
          </a>
        </div>
      </div>
    </div>
    )
  }