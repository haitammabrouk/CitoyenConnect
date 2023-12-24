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
import Login from './pages/Login';
import CitoyenHome from './pages/CitoyenHome'
import FonctionnaireArronHome from './pages/FonctionnaireArronHome'
import FonctionnaireConsultationProfil from './pages/FonctionnaireConsultationProfil'
import ConsultationProfil from './pages/ConsultationProfil';
import CitoyenReclamation from './pages/CitoyenReclamation';
import ModificationMdpFonctionnaire from './pages/ModificationMdpFonctionnaire'
import InsertPdf from './pages/InsertPdf';
import DeclarationHonneurTemplate from './pages/DeclarationHonneurTemplate'
import PdfToJspdf from './pages/PdfToJspdf';
import DeclarationCelibatTemplate from './pages/DecalarationCelibatTemplate'
import DemandeEgalisation from './pages/DemandeEgalisation'
import DemandeSignature from './pages/DemandeSignature'
import DeclarationHonneurCitoyen from './pages/DeclarationHonneurCitoyen';
import DecalarationCelibatCitoyen from './pages/DeclarationCelibatCitoyen';
import FonctionnaireDemandesConformite from './pages/FonctionnaireDemandeConformite'
import FonctionnaireDemandesEgalisation from './pages/FonctionnaireDemandesEgalisation';



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
          <Route path='/login' element = {<Login />} />
          <Route path='/citoyen-home' element = {<CitoyenHome />} />
          <Route path='/admin-home' element = {<FonctionnaireArronHome />} />   
          <Route path='/admin-profile' element = {<FonctionnaireConsultationProfil />} />   
          <Route path='/citoyen-profile' element = {<ConsultationProfil />} />
          <Route path='/citoyen-reclamations' element = {<CitoyenReclamation />} /> 
          <Route path='/creation-mdp' element = {<CreationMdp />} />
          <Route path='/insert-pdf' element = {<InsertPdf />} />
          <Route path='/pdf-to-jspdf' element = {<PdfToJspdf />} />
          <Route path='/citoyen-egalisation' element = {<DemandeEgalisation />} />
          <Route path='/citoyen-signature' element = {<DemandeSignature />} />
          <Route path='/modification-mdp-admin' element = {<ModificationMdpFonctionnaire />} />
          <Route path='/declaration-honneur-template' element = {<DeclarationHonneurTemplate/>} />
          <Route path='/declaration-celibat-template' element = {<DeclarationCelibatTemplate/>} />
          <Route path='/honneur-citoyen' element = {<DeclarationHonneurCitoyen/>} />
          <Route path='/celibat-citoyen' element = {<DecalarationCelibatCitoyen/>} />
          <Route path='/citoyen-demandes' element = {<CitoyenDemandes/>} />
          <Route path='/admin-demandes-egalisation' element = {<FonctionnaireDemandesEgalisation/>} />
          <Route path='/admin-demandes-conformite' element = {<FonctionnaireDemandesConformite/>} />
        </Routes>
      </Router>
    </>
    </SessionProvider>
  )
}

export default App
