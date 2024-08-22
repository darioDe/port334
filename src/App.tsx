import './App.css'
import { Header } from './sections/Header'
import { useTheme } from './context/ThemeContext'


const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark-theme' ? 'bg-slate-900 ' : 'bg-slate-200'} transition-colors duration-500`}>
      <Header />
    </div>
  )
}

export default App
