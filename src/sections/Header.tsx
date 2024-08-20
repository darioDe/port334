import { ThemeProvider, useTheme } from "../context/ThemeContext";
import sun from '../assets/sun.svg'
import lang from '../assets/lang.svg'
import { Toggle } from "../components/Toggle";
import { LangContext, useLang } from "../context/LangContext";

export const Header: React.FC = () => {
    const themeContext = useTheme();
    const langContext = useLang();

    return (
        <div>
            <Toggle 
                label='dark-mode'
                context={{ value: themeContext.theme, toggle: themeContext.toggleTheme }}
                icon={themeContext.theme = sun}
            />
            <Toggle 
                label='spanish'
                context={{ value: langContext.lang, toggle: langContext.toggleLang }}
                icon={langContext.lang = lang}
            />
        </div>
        
    )
}
