import { useTheme } from '../context/ThemeContext';
import {  useLang } from "../context/LangContext";

type Props = {}

export default function About({}: Props) {
    const { theme } = useTheme();
    const { lang } = useLang();

  return (
    <div className='mt-24'>
        <div className='p-10 flex flex-col justify-center items-center'>
            <div className='flex items-center gap-6'>
                <hr className='w-20 h-1 bg-slate-100'/>
                
                    <h3 
                        className={`text-xl md:text-3xl lg:4 font-bold  ${theme === 'dark-theme' ? 'text-slate-200' : 'text-slate-900'}`}
                    >
                        {lang === 'spanish' ? 'Sobre Mi' : 'About Me'}
                    </h3>
                <hr className='w-20 h-1 bg-slate-100'/>

            </div>
            <div className='mt-16'>
                <p className={`${theme === 'dark-theme' ? 'text-slate-200' : 'text-slate-900'}`}>
                    Soy un desarrollador frontend autodidacta con pasión por crear aplicaciones web intuitivas y funcionales. Manejo principalmente JavaScript y su ecosistema, trabajando con React, TypeScript y Tailwind CSS para desarrollar interfaces modernas y eficientes. Me considero un eterno aprendiz, siempre explorando nuevas tecnologías para mejorar mis habilidades y ofrecer mejores soluciones.
                </p>

                <p className={`${theme === 'dark-theme' ? 'text-slate-200' : 'text-slate-900'}`}>

                    Aunque todavía no he tenido experiencia laboral formal, he trabajado en varios proyectos personales que me han permitido practicar y aplicar mis conocimientos. Estos proyectos me han dado una sólida comprensión de los conceptos de desarrollo frontend, desde la maquetación responsiva hasta la gestión del estado en aplicaciones complejas.
                </p>

                <p className={`${theme === 'dark-theme' ? 'text-slate-200' : 'text-slate-900'}`}>
                    Mi enfoque está en escribir código limpio, reutilizable y escalable, mientras sigo las mejores prácticas del sector. Siempre busco aprender algo nuevo y llevar mis proyectos al siguiente nivel. Estoy emocionado por empezar mi carrera profesional y poner en práctica todo lo que he aprendido hasta ahora.

                </p>
            </div>
        </div>
    </div>

    
  )
}
