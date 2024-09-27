import './App.css';
import { Header } from './sections/Header';
import About from './sections/About';
import Proyects from './sections/Projects';
import NavBar from './components/NavBar';
import Contact from './sections/Contact';


const App = () => {

  return (
    <div className='bg-black in-h-screen transition-colors duration-500 '>
      <NavBar />
      <Header />
      <About />
      <Proyects />
      <Contact />
    </div>
  )
}

export default App