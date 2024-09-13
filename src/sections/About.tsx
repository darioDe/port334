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


type Props = {}

export default function About({}: Props) {
    const { lang } = useLang();

  return (
    <div className='mt-24 flex'>
        <div className='p-10 flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <hr className='w-20 h-1 bg-slate-600'/>
                
                    <h3 
                        className='text-2xl md:text-3xl lg:4 font-bold text-slate-600'
                    >
                        {lang === 'spanish' ? 'Sobre Mi' : 'About Me'}
                    </h3>
                <hr className='w-20 h-1 bg-slate-600'/>
            </div>

            <div className='mt-16 flex flex-col md:flex-row md:p-16 gap-16'>
                <div className='md:w-1/2 text- md:text-start'>
                    <p className='m-2 text-slate-900'>
                        Soy un desarrollador frontend autodidacta con pasión por crear aplicaciones web intuitivas y funcionales. Manejo principalmente JavaScript y su ecosistema, trabajando con React, TypeScript y Tailwind CSS para desarrollar interfaces modernas y eficientes. Me considero un eterno aprendiz, siempre explorando nuevas tecnologías para mejorar mis habilidades y ofrecer mejores soluciones.
                    </p>

                    <p className='m-2 text-slate-900'>

                        Aunque todavía no he tenido experiencia laboral formal, he trabajado en varios proyectos personales que me han permitido practicar y aplicar mis conocimientos. Estos proyectos me han dado una sólida comprensión de los conceptos de desarrollo frontend, desde la maquetación responsiva hasta la gestión del estado en aplicaciones complejas.
                    </p>

                    <p className='m-2 text-slate-900'>
                        Mi enfoque está en escribir código limpio, reutilizable y escalable, mientras sigo las mejores prácticas del sector. Siempre busco aprender algo nuevo y llevar mis proyectos al siguiente nivel. Estoy emocionado por empezar mi carrera profesional y poner en práctica todo lo que he aprendido hasta ahora.

                    </p>
                </div>

                <div className='md:w-1/2 grid grid-cols-3 gap-4 md:p-16 justify-items-center' >
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={html5} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={css3} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={javascript} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={reactjs} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={typescript} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={tailwind} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={bootstrap} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={next} alt="" />
                    </div>
                    <div className='w-14 h-14 bg-slate-700 p-3 rounded-2xl'>
                        <img src={node} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}
