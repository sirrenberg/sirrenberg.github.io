import '../App.css';
import NavBar from '../components/NavBar';
import { Banner } from '../components/Banner.tsx';
import { Projects } from '../components/Projects.tsx';
import '../styles/Default.css';



function App() {
  return (
    <div id="home">
      <NavBar />
      <Banner />
      <Projects />
    </div>
  )
}

export default App
