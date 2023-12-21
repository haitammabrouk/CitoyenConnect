import Home from './pages/Home'
import DemandeInscription from './pages/DemandeInscription'
import InscriptionEnCours from './pages/InscriptionEnCours'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/demande-inscription' element={<DemandeInscription/>} />
          <Route path='/inscription-en-cours' element={<InscriptionEnCours/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
