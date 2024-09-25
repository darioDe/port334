import './App.css';
import { Header } from './sections/Header';
import { MatrixBackground } from './background/MatrixBackground';
import About from './sections/About';
import Proyects from './sections/Projects';
import NavBar from './components/NavBar';
import Contact from './sections/Contact';


const App = () => {

  return (
    <div className='in-h-screen transition-colors duration-500'>
      <MatrixBackground />
      <NavBar />
      <Header />
      <About />
      <Proyects />
      <Contact />
    </div>
  )
}

export default App