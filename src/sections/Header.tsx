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
        <header>
            <div className="flex justify-end p-2 gap-1">
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
            <div className="flex flex-col justify-center items-center">
                <h1 className={`text-4xl font-semibold ${theme === 'dark-theme' ? 'text-slate-200' : 'text-slate-900'}`}> Ruben Dario Duarte </h1>
                <h2 className="text-7xl text-blue-500 font-bold">
                    {lang === 'spanish' ? 
                        <>  
                            Desarrollador <br /> Frontend
                        </>  : 
                        <>
                            Frontend <br /> Developer
                        </>
                    }
                </h2>
            <div className='inline-flex items-center bg-blue-500  text-white font-semibold py-2 px-4 rounded-md cursor-pointer group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700'>
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
            </div>
                <div className='flex'>
                    <a 
                        className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700" 
                        href="http://" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img className="p-2" src={linkedin} alt="" />
                    </a>
                    <a 
                        className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700"
                        href="http://"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img className="p-2" src={github} alt="" />
                    </a>
                </div>
            </div>
        </header>
                
        
    )
}