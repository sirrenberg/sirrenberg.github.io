import '../App.css'
import nils from '../assets/NILS_s.jpg'

function App() {
  return (
    <>
      <h1>Nils Sirrenberg</h1>
      <div className="card">
        <p>
        Your expert for Java, C++, Python, SQL and Databases.
        </p>
      </div>
      <div>
        <img src={nils}
        style={{ width: '400px' }}/>
      </div>
    </>
  )
}

export default App
