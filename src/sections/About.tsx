// FALTA TRADUCIR P
import {  useLang } from "../context/LangContext";
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import reactjs from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import tailwind from '../assets/tailwind.svg';
import bootstrap from '../assets/bootstrap.svg';
import next from '../assets/next.svg';
import node from '../assets/node.svg';
import IconTecnologies from "../components/IconTecnologies";


type Props = {}

export default function About({}: Props) {
    const { lang } = useLang();

  return (
    <div className='mt-24 flex'>
        <div className='p-10 flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <hr className='w-20 md:w-40 m-1 md:m-5 h-1 bg-slate-600'/>
                
                    <h3 
                        className='text-2xl md:text-3xl lg:4 font-bold text-slate-600'
                    >
                        {lang === 'spanish' ? 'Sobre Mi' : 'About Me'}
                    </h3>
                <hr className='w-20 md:w-40 m-1 md:m-5 h-1 bg-slate-600'/>
            </div>

            <div className='mt-16 flex flex-col lg:flex-row md:p-16 gap-16'>
                <div className='lg:w-1/2 text- md:text-start'>
                    <p className='m-2 text-slate-900'>
                        Soy un <span className="font-bold">desarrollador frontend</span> autodidacta con pasión por crear aplicaciones web intuitivas y funcionales. Manejo principalmente <span className="font-bold">JavaScript</span> y su ecosistema, trabajando con  <span className="font-bold">React</span>, <span className="font-bold">TypeScript</span> y <span className="font-bold">Tailwind</span> para desarrollar interfaces modernas y eficientes. Me considero un eterno aprendiz, siempre explorando nuevas tecnologías para mejorar mis habilidades y ofrecer mejores soluciones.
                    </p>

                    <p className='m-2 text-slate-900'>

                        Aunque todavía no he tenido experiencia laboral formal, he trabajado en varios proyectos personales que me han permitido practicar y <span className="font-bold">aplicar mis conocimiento</span>. Estos proyectos me han dado una sólida comprensión de los conceptos de desarrollo frontend, desde la maquetación responsiva hasta la gestión del estado en aplicaciones complejas.
                    </p>

                    <p className='m-2 text-slate-900'>
                        Mi enfoque está en escribir <span className="font-bold">código limpio, reutilizable y escalable</span>, mientras sigo las mejores prácticas del sector. Siempre busco aprender algo nuevo y llevar mis proyectos al siguiente nivel. Estoy emocionado por empezar mi carrera profesional y poner en práctica todo lo que he aprendido hasta ahora.

                    </p>
                </div>

                <div className='lg:w-1/2 grid grid-cols-3 gap-4 md:p-16 justify-items-center' >
                    <IconTecnologies icon={html5} name={'HTML'}/>
                    <IconTecnologies icon={css3} name={'CSS'}/>
                    <IconTecnologies icon={javascript} name={'JAVASCRIPT'}/>
                    <IconTecnologies icon={reactjs} name={'REACT'}/>
                    <IconTecnologies icon={typescript} name={'TYPESCRIPT'}/>
                    <IconTecnologies icon={tailwind} name={'TAILWIND'}/>
                    <IconTecnologies icon={bootstrap} name={'BOOTSTRAP'}/>
                    <IconTecnologies icon={next} name={'NEXT'}/>
                    <IconTecnologies icon={node} name={'NODE'}/>
                </div>
            </div>
        </div>
    </div>  
  )
}
