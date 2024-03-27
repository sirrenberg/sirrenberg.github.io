import '../App.css';
import NavBar from '../components/NavBar';
import { Banner } from '../components/Banner.tsx';
import { Projects } from '../components/Projects.tsx';
import { Contact } from '../components/Contact.tsx';
import '../styles/Default.css';



function App() {
  return (
    <div id="home">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
