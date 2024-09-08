import './App.css'
import { Header } from './sections/Header'
import { useTheme } from './context/ThemeContext'
import { MatrixBackground } from './background/MatrixBackground';


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      <MatrixBackground theme={theme} />
      <Header />
    </div>
  )
}

export default App
