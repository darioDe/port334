import {  useLang } from "../context/LangContext";
import Card from '../components/Card';
import movieSearcher from '../assets/movie-searcher.png'
import ProjectProps from '../types/Projects'
;



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
    image: movieSearcher,
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

const Proyects = () => {

  const { lang } = useLang();


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

        <div className="grid gap-8 mt-16 p-10">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}



export default Proyects