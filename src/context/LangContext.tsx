import { createContext, useContext, useState } from "react";

// Typing the value context
interface LangContextType {
    lang: string;
    toggleLang: () => void;
}

// Create the context with default values
export const LangContext = createContext<LangContextType>({
    lang: 'spanish', // Default languag
    toggleLang: () => {}, // Default function (empty)
});

// Create the provider component to wrap parts of the app
const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState("spanish"); // State to manage the current language

    // Function to toggle between Spanish and English
    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'spanish' ? 'english' : 'spanish'))
    }

    return (
         // Pass down the current language and the toggle function to context consumers
        <LangContext.Provider value={{ lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    )
}

// Hook to easily use the Lang context in any component
export const useLang = () => {
    const context = useContext(LangContext);
    
    // Error handling for when the hook is used outside of the provider
    if (!context) {
        throw new Error('useContext must be selected')
    }
    return context
}

export default LangProvider