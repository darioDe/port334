import { createContext, useContext, useState } from "react";

// Typing the value context
interface LangContextType {
    lang: string;
    toggleLang: (lang: string) => void;
}

// Create the context
export const LangContext = createContext<LangContextType>({
    lang: 'spanish',
    toggleLang: () => {},

});

// Create the provider
const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState("spanish");

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'spanish' ? 'english' : 'spanish'))
    }

    return (
        <LangContext.Provider value={{ lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    )
}

// Hook for use the Lang context
export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) {
        throw new Error('useContext must be selected')
    }
    return context
}

export default LangProvider