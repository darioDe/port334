import './App.css'
import { Header } from './sections/Header'
import { useTheme } from './context/ThemeContext'
import { MatrixBackground } from './background/MatrixBackground';
import About from './sections/About';


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      <MatrixBackground theme={theme} />
      <Header />
      <About />
    </div>
  )
}

export default App
