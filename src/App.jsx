import Home from './pages/Home'
import InscriptionEnCours from './pages/InscriptionEnCours'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FonctionnaireArronDemandeInsc from './pages/FonctionnaireArronDemandeInsc';
import FonctionnaireDemandeInscDetails from './pages/FonctionnaireDemandeInscDetails';
import Reclamation from './pages/Reclamation';
import CitoyenDemandes from './pages/CitoyenDemandes';
import DemandeInscription from './pages/DemandeInscription';
import FonctionnaireArronReclamations from './pages/FonctionnaireArronReclamations'
import InscriptionFinale from './pages/InscriptionFinale';
import CreationMdp from './pages/CreationMdp'
import { SessionProvider } from '../SessionContext';
import EnterEmail from './pages/EnterEmail';
import EmailSent from './pages/EmailSent';
import ResetMdp from './pages/ResetMdp';



function App() {
  

  return (
    <SessionProvider>
    <>
    <Router>
        <Routes>
          <Route path='/reclamations' element={<Reclamation/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/inscription-en-cours' element={<InscriptionEnCours/>} />
          <Route path='/fonctionnaire-demandes-inscription' element={<FonctionnaireArronDemandeInsc/>} />
          <Route path='/fonctionnaire-demandes-inscription-details/:id' element={<FonctionnaireDemandeInscDetails/>} />
          <Route path='/fonctionnaire-reclamations' element={<FonctionnaireArronReclamations/>} />
          <Route path='/citoyen-demandes' element={<CitoyenDemandes/>} />
          <Route path='/demande-inscription' element={<DemandeInscription/>} />
          <Route path='/inscription-finale' element={<InscriptionFinale/>} />
          <Route path='/nouveau-mdp' element={<CreationMdp/>} /> 
          <Route path='/entrer-cin' element={<EnterEmail />} />
          <Route path='/email-sent' element={<EmailSent />} />   
          <Route path='/reseting' element = {<ResetMdp />} />        
        </Routes>
      </Router>
    </>
    </SessionProvider>
  )
}

export default App
