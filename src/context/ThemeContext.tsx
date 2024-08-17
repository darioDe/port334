import { createContext, useState, useContext, ReactNode } from 'react';

// Typing the value context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void
}

// Create the context
const themeContext = createContext<ThemeContextType>({
    theme: 'dark-theme',
    toggleTheme: () => {}
})

// Create the Provider
export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState('dark-theme');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'))
    };

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </themeContext.Provider>
    )
}

// Hook for use the context
export const useTheme = () => {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error ('You must selected a theme context')
    };

    return context
}