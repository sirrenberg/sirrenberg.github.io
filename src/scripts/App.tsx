import '../App.css'
import nils from '../assets/NILS_s.jpg'
import NavBar from '../components/NavBar'
import '../styles/LandingPage.css'


function App() {
  return (
    <div id="home">
      <NavBar />
      <h1>Nils Sirrenberg</h1>
      <div>
        <p>
          Your expert for Java, C++, Python, SQL and Databases.
        </p>
      </div>
      <div className="image-container">
        <img src={nils} alt="Nils" />
      </div>
    </div>
  )
}

export default App
