import './App.css';
import { Header } from './sections/Header';
import { MatrixBackground } from './background/MatrixBackground';
import About from './sections/About';


const App = () => {

  return (
    <div className='in-h-screen transition-colors duration-500'>
      <MatrixBackground />
      <Header />
      <About />
    </div>
  )
}

export default App
