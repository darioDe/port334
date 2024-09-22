import './App.css';
import { Header } from './sections/Header';
import { MatrixBackground } from './background/MatrixBackground';
import About from './sections/About';
import Proyects from './sections/Proyects';
import NavBar from './components/NavBar';
import Contact from './sections/Contact';


const App = () => {

  return (
    <div className='in-h-screen transition-colors duration-500'>
      <MatrixBackground />
      <NavBar />
      <Header />
      <div className=' bg-zinc-950 lg:m-16 rounded-xl border-4 border-slate-900'>
        <About />
        <Proyects />
        <Contact />
      </div>
    </div>
  )
}

export default App