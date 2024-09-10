import {  useTheme } from "../context/ThemeContext";
import sunIcon from '../assets/sun.svg'
import langIcon from '../assets/lang.svg'
import linkedin from '../assets/in.svg';
import github from '../assets/github.svg';
import { Toggle } from "../components/Toggle";
import {  useLang } from "../context/LangContext";
import download from '../assets/download.svg'

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang} = useLang();

    return (
        <header className='w-full h-full h-screen flex flex-col'>
             <div className="flex justify-end p-2 gap-1 fade-in">
                <Toggle 
                    label='dark-theme'
                    context={{ value: theme,toggle: toggleTheme }}
                    icon={sunIcon}
                />
                <Toggle 
                    label='spanish'
                    context={{ value: lang,toggle: toggleLang }}
                    icon={langIcon}
                />
            </div >

            <div className="flex flex-col justify-between items-center flex-grow">
                <div className="flex flex-col items-center justify-center flex-grow">
                    <h1 
                        className={`text-2xl md:text-4xl lg:text-6xl font-semibold fade-in-right text-green-500`}
                    > 
                        Ruben Dario Duarte 
                    </h1>
                    <h2 
                        className={`text-center text-5xl md:text-7xl lg:text-9xl font-bold mb-7 fade-in-left ${theme === 'dark-theme' ? 'text-slate-200' : 'text-slate-900'}`}
                    >
                        {lang === 'spanish' ? 
                            <>  
                                Desarrollador <br /> Frontend
                            </>  : 
                            <>
                                Frontend <br /> Developer
                            </>
                        }
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-3 mb-8">
                    {/* <div 
                        className={`fade-in inline-flex items-center border-2 border-green-500 text-green-500 font-semibold py-2 px-4 rounded-md cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 ${theme === 'dark-theme' ?'hover:bg-black' : 'hover:bg-white'}`}
                    >
                        <a 
                            href=""
                            download='CVRubenDuarte.pdf'
                            className='flex items-center space-x-2'                
                        >
                            <img src={download} alt="" className="w-6 h-6" />
                            <p>
                                {lang === 'spanish' ?
                                    'Descarga mi CV' 
                                    : 
                                    'Download my CV'
                                } 
                            </p>
                        </a>
                    </div> */}

                    <div className='flex gap-2 fade-in'>
                        <a 
                            className="w-12
                             h-12 flex items-center justify-center rounded-full cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110" 
                            href="http://" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img className="p-2" src={linkedin} alt="" />
                        </a>
                        <a 
                            className="w-11 h-12 flex items-center justify-center rounded-full cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110"
                            href="http://"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img className="p-1" src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
                
        
    )
}