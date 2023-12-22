import Home from './pages/Home'
import InscriptionEnCours from './pages/InscriptionEnCours'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reclamation from './pages/Reclamation';


function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path='/reclamations' element={<Reclamation/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/inscription-en-cours' element={<InscriptionEnCours/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
