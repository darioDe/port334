import { useState, useEffect, useRef } from "react";
import {  useLang } from "../context/LangContext";
import IconTecnologies from "../components/IconTecnologies";
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import reactjs from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import tailwind from '../assets/tailwind.svg';
import bootstrap from '../assets/bootstrap.svg';
import next from '../assets/next.svg';
import node from '../assets/node.svg';

export default function About() {
    const [isTitleVisible, setIsTitleVisible ] = useState<boolean>(false);
    const [isTextVisible, setIsTextVisible ] = useState<boolean>(false);
    const [isIconsVisible, setIsIconsVisible ] = useState<boolean>(false);
    const { lang } = useLang();

    const titleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        if (target === titleRef.current) {
                            setIsTitleVisible(true);
                        } else if (target === textRef.current) {
                            setIsTextVisible(true)
                        } else if (target === iconsRef.current) {
                            setIsIconsVisible(true)
                        }
                        observer.unobserve(entry.target)
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (iconsRef.current) observer.observe(iconsRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
            if (iconsRef.current) observer.unobserve(iconsRef.current);
        };
    }, [])


  return (
    <div className=' flex '>
        <div 
            className={`p-10 flex flex-col justify-center items-center transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
            ref={titleRef}
        >
            <div className='flex items-center mt-24'>
                <hr className='w-20 md:w-40 m-1 md:m-5 bg-slate-600'/>
                
                    <h3 
                        className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200'
                    >
                        {lang === 'spanish' ? 'Sobre Mi' : 'About Me'}
                    </h3>
                <hr className='w-20 md:w-40 m-1 md:m-5 bg-slate-600'/>
            </div>

            <div 
                className={`mt-16 flex flex-col lg:flex-row md:p-16 gap-16 transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}
                ref={textRef}
            >
                <div className='lg:w-1/2 text- md:text-start'>
                    <p className='m-2 text-slate-200'>
                        {lang === 'spanish' ? (
                            <>
                            Soy un <span className="font-bold">desarrollador frontend</span> autodidacta con pasión por crear aplicaciones web intuitivas y funcionales. Manejo principalmente <span className="font-bold">JavaScript</span> y su ecosistema, trabajando con <span className="font-bold">React</span>, <span className="font-bold">TypeScript</span> y <span className="font-bold">Tailwind</span> para desarrollar interfaces modernas y eficientes. Me considero un eterno aprendiz, siempre explorando nuevas tecnologías para mejorar mis habilidades y ofrecer mejores soluciones.
                            </>
                        ) : (
                            <>
                            I'm a self-taught <span className="font-bold">frontend developer</span> with a passion for creating intuitive and functional web applications. I primarily work with <span className="font-bold">JavaScript</span> and its ecosystem, using <span className="font-bold">React</span>, <span className="font-bold">TypeScript</span>, and <span className="font-bold">Tailwind</span> to build modern and efficient interfaces. I'm a lifelong learner, always exploring new technologies to improve my skills and provide better solutions.
                            </>
                        )}
                    </p>

                    <p className='m-2 text-slate-200'>
                        {lang === 'spanish' ? (
                            <>
                            Aunque todavía no he tenido experiencia laboral formal, he trabajado en varios proyectos personales que me han permitido practicar y <span className="font-bold">aplicar mis conocimientos</span>. Estos proyectos me han dado una sólida comprensión de los conceptos de desarrollo frontend, desde la maquetación responsiva hasta la gestión del estado en aplicaciones complejas.
                            </>
                        ) : (
                            <>
                            Although I haven't had formal work experience yet, I've worked on several personal projects that have allowed me to practice and <span className="font-bold">apply my knowledge</span>. These projects have given me a solid understanding of frontend development concepts, from responsive layouts to state management in complex applications.
                            </>
                        )}
                    </p>

                    <p className='m-2 text-slate-200'>
                        {lang === 'spanish' ? (
                            <>
                            Mi enfoque está en escribir <span className="font-bold">código limpio, reutilizable y escalable</span>, mientras sigo las mejores prácticas del sector. Siempre busco aprender algo nuevo y llevar mis proyectos al siguiente nivel. Estoy emocionado por empezar mi carrera profesional y poner en práctica todo lo que he aprendido hasta ahora.
                            </>
                        ) : (
                            <>
                            My focus is on writing <span className="font-bold">clean, reusable, and scalable code</span> while following industry best practices. I'm always looking to learn something new and take my projects to the next level. I'm excited to start my professional career and put everything I've learned into practice.
                            </>
                        )}
                    </p>
                </div>

                <div 
                    className= {`lg:w-1/2 grid grid-cols-3 gap-4 md:p-16 justify-items-center transition-opacity duration-1000 ${isIconsVisible ? 'opacity-100' : 'opacity-0'}`}
                    ref={iconsRef}
                >
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
