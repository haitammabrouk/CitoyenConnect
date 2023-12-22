import Home from './pages/Home'
import DemandeInscription from './pages/DemandeInscription'
import InscriptionEnCours from './pages/InscriptionEnCours'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FonctionnaireArronDemandeInsc from './pages/FonctionnaireArronDemandeInsc';
import FonctionnaireDemandeInscDetails from './pages/FonctionnaireDemandeInscDetails';


function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/demande-inscription' element={<DemandeInscription/>} />
          <Route path='/inscription-en-cours' element={<InscriptionEnCours/>} />
          <Route path='/fonctionnaire-demandes-inscription' element={<FonctionnaireArronDemandeInsc/>} />
          <Route path='/fonctionnaire-demandes-inscription-details/:id' element={<FonctionnaireDemandeInscDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
