import {  useTheme } from "../context/ThemeContext";
import sunIcon from '../assets/sun.svg'
import langIcon from '../assets/lang.svg'
import linkedin from '../assets/in.svg';
import github from '../assets/github.svg';
import { Toggle } from "../components/Toggle";
import {  useLang } from "../context/LangContext";

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang} = useLang();

    return (
        <div>
            <div className="flex">
                <Toggle 
                    label='dark-theme'
                    context={{ value: theme, toggle: toggleTheme }}
                    icon={sunIcon}
                />
                <Toggle 
                    label='spanish'
                    context={{ value: lang, toggle: toggleLang }}
                    icon={langIcon}
                />
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
            <div>
                <h1> Ruben Duarte </h1>
            </div>
        </div>
                
        
    )
}